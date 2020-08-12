<template>
<body>
  <div>
    <v-alert :value="!$auth.user.email_verified" color="#FFFF99" icon="warning">
      <span class ="alert-unverified"><b>Email address</b> is <b>unverified</b>, Please check your inbox! </span>
    </v-alert>
    <v-data-table
      :headers="headers"
      :items="myevents"
      :sort-by="['strEvent', 'dtmDate']"
      class="elevation-1"
      :sortDesc="[false, true]"
    >
      <template slot="no-data">
        <v-alert :value="loading" color="white" icon="info">Loading data from the cloud ☁️</v-alert>
        <v-alert :value="!loading" color="white" icon="info">You don't have any days tracked 😔</v-alert>
      </template>
      <template v-slot:[`item.intElapsed`]="{ item }">
        <v-chip :color="getColor(item.intElapsed)" dark>{{ item.intElapsed }}</v-chip>
      </template>
      <template v-slot:top>
        <!-- This section is for the editing / add new item modal -->
        <v-toolbar flat color="white">
          <v-toolbar-title class="tbl-title">Days Since</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#e91e63"
                dark
                class="mb-2 ds-btn"
                width="150"
                @click="delete_diag = true"
              >Delete All</v-btn>
              <v-dialog v-model="delete_diag" max-width="290">
                <v-card>
                  <v-card-title class="headline">Delete all events</v-card-title>
                  <v-card-text>Are you sure you want to delete everything?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="delete_diag = false">No</v-btn>
                    <v-btn color="green darken-1" text @click="deleteAll()">Yes!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn
                color="primary"
                dark
                class="mb-2 ds-btn"
                width="150"
                v-bind="attrs"
                v-on="on"
              >New Item</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <p></p>
                  </v-row>
                  <v-row>
                    <v-col cols="16" sm="8" md="6">
                      <v-text-field
                        :rules="rules"
                        v-model="editedItem.strEvent"
                        hint="Andy's Birthday"
                        prepend-inner-icon="mdi-emoticon"
                        outlined
                        label="Event Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="14" sm="8" md="6">
                      <v-menu
                        v-model="datepicker"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.dtmDate"
                            label="Date of Event"
                            hint="MM/DD/YYYY format"
                            persistent-hint
                            prepend-icon="event"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.dtmDate"
                          no-title
                          @input="datepicker = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- This section is for the editing / add new item modal -->

      <!-- Buttons for editing -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="delete_diag_sp=true">mdi-delete</v-icon>
        <v-dialog v-model="delete_diag_sp" max-width="290">
          <v-card>
            <v-card-title class="headline">Delete this event</v-card-title>
            <v-card-text>Are you sure you want to delete this item?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="delete_diag_sp = false">No</v-btn>
              <v-btn color="green darken-1" text @click="deleteItem(item)">Yes!</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <!-- Buttons for editing -->
    </v-data-table>
  </div>
</body>
</template>

<script>
import { uuid } from "vue-uuid";
import axios from "axios";

export default {
  data: () => ({
    //apis storage
    loading: true,

    //dialogs for deletion
    delete_diag_sp: false,
    delete_diag: false,

    //dialog window for adding/editing
    dialog: false,

    //interval for elapsed
    interval: "day",

    //used to indicate if the datepicker should be open or closed
    datepicker: false,

    //Required Rules
    rules: [(v) => !!v || "Required"],

    //Headers for Tables
    headers: [
      {
        text: "Event",
        align: "start",
        value: "strEvent",
        width: 500,
      },
      { text: "Date", value: "dtmDate" },
      { text: "Elapsed", value: "intElapsed", divider: true },
      { text: "Actions", value: "actions", sortable: false, align: "center" },
    ],

    //Container for Events
    myevents: [],

    //Index for Item being edited / modified
    editedIndex: -1,

    //Edited Item Props
    editedItem: {
      strId: "",
      strEvent: "",
      dtmDate: new Date().toISOString().substr(0, 10),
      intElapsed: 0,
    },

    //Default Item (Creating New)
    defaultItem: {
      strId: "",
      strEvent: "My event",
      dtmDate: new Date().toISOString().substr(0, 10), //default to today
      intElapsed: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    //data sync api calls
    async api_retrieve_events() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.get("https://vds-db.andywork.dev/retrieve", {
          headers: { Authorization: `Bearer ${token}` },
        }).then(response => {
          this.myevents = response.data.message;
          this.recalculateElapsed();
          this.loading = false; //flip loading boolean
      }).catch(() => {
            this.loading = false;
      }
      );

    },

    async api_add_event(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();
      const event_data = {
        strId: event.strId,
        strEvent: event.strEvent,
        dtmDate: event.dtmDate,
      };

      // Use Axios to make a call to the API
      await axios.put(
        "https://vds-db.andywork.dev/add",
        event_data,
        { headers: { Authorization: `Bearer ${token}` } }
      );

    },

    async api_del_event(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete("https://vds-db.andywork.dev/delsp", {
        headers: { Authorization: `Bearer ${token}` },
        data: { strId: event.strId },
      });

    },

    async api_del_all() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete("https://vds-db.andywork.dev/delete/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

    },
    //data sync api calls

   //sync all - called when user verifies emails after adding stuff




    // list initialization
    initialize() {
      this.api_retrieve_events();
    },

    //recalculates all elapsed
    recalculateElapsed() {
      for (var x = 0; x < this.myevents.length; x++) {
        this.myevents[x].intElapsed = this.timeElapsed(
          this.myevents[x].dtmDate
        );
      }
    },

    //calculates time elapsed
    timeElapsed(date) {
      var now = new Date();
      var pdate = new Date(date);
      var diff = now.getTime() - pdate.getTime();

      if (this.interval === "day") return parseInt(diff / 86400000);
      if (this.interval === "week") return parseInt(diff / (86400000 * 7));
      if (this.interval === "month") return parseInt(diff / (86400000 * 30));
    },

    //edits selected item
    editItem(item) {
      this.editedIndex = this.myevents.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    //deletes selected item
    deleteItem(item) {
      this.api_del_event(item);
      const index = this.myevents.indexOf(item);
      this.myevents.splice(index, 1);
      this.delete_diag_sp = false;
    },

    //deletes all items
    deleteAll() {
      this.api_del_all();
      this.clearEvents();
      this.delete_diag = false;
    },

    //clears event container
    clearEvents() {
      this.myevents = [];
    },

    //close window
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    //clicking save when new or editing
    save() {
      if (this.editedItem.strEvent === "") return; //do nothing if event name isn't filled out

      //calculate date diff
      this.editedItem.intElapsed = this.timeElapsed(this.editedItem.dtmDate);

      if (this.editedIndex > -1) {
        Object.assign(this.myevents[this.editedIndex], this.editedItem);
      } else {
        this.editedItem.strId = uuid.v1(); //generate a unique ID
        this.myevents.push(this.editedItem);
      }
      this.api_add_event(this.editedItem); //attempts update on atlas
      this.close();
    },

    //color tagging for time elapsed
    getColor(elapse) {
      if (elapse > 30) return "red";
      else if (elapse > 14) return "orange";
      else return "green";
    },
  },
};
</script>
