<template>
<body>
      <!-- Dashboard -->
  <div>
    <v-row>
    <v-col>
      <v-card
          class="mx-auto card-style"
          max-width="395">
            <v-list-item-content>
              <div class="mb-1 card-overlist">Oldest Elapsed</div>
              <v-list-item-title class="headline mb-1 card-right">{{dbOldest}}{{" " + interval + "s"}}</v-list-item-title>
              <v-list-item-subtitle class="card-sub">{{dbOldestName}}</v-list-item-subtitle>
            </v-list-item-content>

      </v-card>
    </v-col>
    <v-col>
      <v-card
        class="mx-auto card-style"
        max-width="395">
            <v-list-item-content>
              <div class="mb-1 card-overlist">Average Elapsed</div>
              <v-list-item-title class="headline mb-1 card-right">{{dbAverage}}{{" " + interval + "s"}}</v-list-item-title>
              <v-list-item-subtitle class="card-sub">Total events: {{dbTotal}}</v-list-item-subtitle>
            </v-list-item-content>
      </v-card>
    </v-col>
      <v-col>
        <v-card
          class="mx-auto card-style"
          max-width="395">
            <v-list-item-content>
              <div class="mb-1 card-overlist">Newest Elapsed</div>
              <v-list-item-title class="headline mb-1 card-right">{{dbNewest}}{{" " + interval + "s"}}</v-list-item-title>
              <v-list-item-subtitle class="card-sub">{{dbNewestName}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </div>
      <!-- Table Section -->
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
                @click="deleteDiag = true"
              >Delete All</v-btn>
              <v-dialog v-model="deleteDiag" max-width="290" :retain-focus="false">
                <v-card>
                  <v-card-title class="headline">Delete all events</v-card-title>
                  <v-card-text>Are you sure you want to delete everything?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="deleteDiag = false">No</v-btn>
                    <v-btn color="green darken-1" text @click="deleteAll()">Yes!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="deleteDiagSp" max-width="290" :retain-focus="false">
                <v-card>
                  <v-card-title class="headline">Delete this event</v-card-title>
                  <v-card-text>Are you sure you want to delete this item?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="resetDelete()">No</v-btn>
                    <v-btn color="green darken-1" text @click="deleteItem()">Yes!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="archDiagSp" max-width="290" :retain-focus="false">
                <v-card>
                  <v-card-title class="headline">Archive this event</v-card-title>
                  <v-card-text>Are you sure you want to archive this item?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="resetArchive()">No</v-btn>
                    <v-btn color="green darken-1" text @click="archiveItem()">Yes!</v-btn>
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
        <v-icon small class="mr-2" @click="archItemStage(item)">mdi-archive</v-icon>
        <v-icon small @click="deleteItemStage(item)">mdi-delete</v-icon>
      </template>
      <!-- Buttons for editing -->
    </v-data-table>
  </div>
</body>
</template>

<script>
import { uuid } from "vue-uuid";
import axios from "axios";
import authSetting from "../../auth"

const apiEventResource = "/Api/Event";
const apiEventsResource = "/Api/Events";
const apiArchiveEventResource = "/Api/Archive/Event";

export default {
  data: () => ({
    //apis storage
    loading: true,
    apiEndpoint: "",

    //dashboard
    dbOldest: 0,
    dbOldestName: "Loading...",
    dbAverage: 0,
    dbTotal: 0,
    dbNewest: 0,
    dbNewestName: "Loading...",

    //dialogs for deletion
    deleteDiagSp: false,
    deleteDiag: false,

    //dialog for archive
    archDiagSp: false,

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
    deleteIndex: - 1,

    //item to be deleted
    deletingItem: {
      strId: "",
      strEvent: "",
      dtmDate: new Date().toISOString().substr(0, 10),
      intElapsed: 0,
    },

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

    myevents: {
      handler: function () {
        this.updateDashboard();
      },
      deep: true
    },
    
  },

  created() {
    this.initialize();
  },

  methods: {
    setApiEndpoint() {
      this.apiEndpoint = authSetting.dev ? authSetting.audience_dev : authSetting.audience;
    },

    //data sync api calls
    async apiRetrieveEvents() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.get(this.apiEndpoint + this.apiEventsResource, {
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

    async apiAddEvent(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();
      const event_data = {
        strId: event.strId,
        strEvent: event.strEvent,
        dtmDate: event.dtmDate,
      };

      // Use Axios to make a call to the API
      await axios.put(this.apiEndpoint + this.apiEventResource,
        event_data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },

    async apiArchEvent(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();
      const event_data = {
        strId: event.strId,
        strEvent: event.strEvent,
        dtmDate: event.dtmDate,
      };

      // Use Axios to make a call to the API
      await axios.put(this.apiEndpoint + this.apiArchiveEventResource,
        event_data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },

    async apiDelEvent(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete(this.apiEndpoint + this.apiEventResource, {
        headers: { Authorization: `Bearer ${token}` },
        data: { strId: event.strId },
      });

    },

    async apiDelAll() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete(this.apiEndpoint + this.apiEventsResource, {
        headers: { Authorization: `Bearer ${token}` },
      });

    },
    //data sync api calls

    // list initialization
    initialize() {
      this.setApiEndpoint();
      this.apiRetrieveEvents();
    },

    //recalculates all elapsed
    recalculateElapsed() {
      for (var x = 0; x < this.myevents.length; x++) {
        this.myevents[x].intElapsed = this.timeElapsed(
          this.myevents[x].dtmDate
        );
      }
    },

    //
    updateDashboard() {
      this.updateDbMax();
      this.updateDbAvg();
      this.updateDbMin();
    },

    updateDbMax() {
      if(this.myevents.length === 0) {
        this.dbOldest = 0;
        this.dbOldestName = "There are no events";
        return;
      }
      
      var max = 0;
      var event = this.myevents[0].strEvent;
      for(var x = 0; x < this.myevents.length; x++) {
        if(this.myevents[x].intElapsed > max) {
            max = this.myevents[x].intElapsed;
            event = this.myevents[x].strEvent;
        }
      }
      this.dbOldest = max;
      this.dbOldestName = event;
    },

    updateDbAvg() {
      var total = 0;
      for(var x = 0; x < this.myevents.length; x++) {
        total += this.myevents[x].intElapsed;
      }

      this.dbAverage = this.myevents.length === 0 ? 0 : parseInt(total / this.myevents.length);
      this.dbTotal = this.myevents.length;
    },

    updateDbMin() {
      if(this.myevents.length === 0) {
        this.dbNewest = 0;
        this.dbNewestName = "There are no events";
        return;
      }

      var min = 2147483647; //max integer value
      var event = this.myevents[0].strEvent;
      for(var x = 0; x < this.myevents.length; x++) {
        if(this.myevents[x].intElapsed < min) {
            min = this.myevents[x].intElapsed;
            event = this.myevents[x].strEvent;
        }
      }

      this.dbNewest = min;
      this.dbNewestName = event;
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

    //set up dialog and set index and deletion
    deleteItemStage(item) {
      this.deleteIndex = this.myevents.indexOf(item);
      this.deletingItem = Object.assign({}, this.myevents[this.deleteIndex]);
      this.deleteDiagSp = true; //show delete dialog
    },

        //set up dialog and set index and deletion
    archItemStage(item) {
      this.editedIndex = this.myevents.indexOf(item);
      this.editedItem = Object.assign({}, this.myevents[this.editedIndex]);
      this.archDiagSp = true; //show delete dialog
    },

    //reset delete item, closes dialog {
    resetDelete() {
      this.deleteIndex = -1; //reset index
      this.deletingItem = Object.assign({}, this.defaultItem); //reset item
      this.deleteDiagSp = false;
    },

    //reset delete item, closes dialog {
    resetArchive() {
      this.editedIndex = -1; //reset index
      this.editedItem = Object.assign({}, this.defaultItem); //reset item
      this.archDiagSp = false;
    },

    archiveItem() {
      //insert item into archive (cloud, which will also delete it from main)
      this.apiArchEvent(this.myevents[this.editedIndex]);
      //delete item physicall in table
      this.myevents.splice(this.editedIndex, 1); //delete locally
      this.resetArchive();
    },

    //deletes selected item
    deleteItem() {
      this.apiDelEvent(this.deletingItem); //delete from cloud
      this.myevents.splice(this.deleteIndex, 1); //delete locally
      this.resetDelete(); //reset delete containers
    },

    //deletes all items
    deleteAll() {
      if(this.myevents.length !== 0) {
        this.apiDelAll();
        this.clearEvents();
      }
        
      this.deleteDiag = false;
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
      this.apiAddEvent(this.editedItem); //attempts update on atlas
      this.close();
    },

    //color tagging for time elapsed
    getColor(elapse) {
      if (elapse > 30) return "red";
      else if (elapse > 14) return "orange";
      else if (elapse < 0) return "blue";
      else return "green";
    },
  },
};
</script>
