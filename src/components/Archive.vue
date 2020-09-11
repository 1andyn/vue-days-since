<template>
<body>
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
        <v-alert :value="!loading" color="white" icon="info">You don't have anything archived 😔</v-alert>
      </template>
      <template v-slot:[`item.intElapsed`]="{ item }">
        <v-chip :color="getColor(item.intElapsed)" dark>{{ item.intElapsed }}</v-chip>
      </template>
      <template v-slot:top>
        <!-- This section is for the editing / add new item modal -->
        <v-toolbar flat color="white">
          <v-toolbar-title class="tbl-title">Archive</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#e91e63"
                dark
                class="mb-2 ds-btn"
                width="150"
                @click="delete_diag = true"
                v-bind="attrs"
                v-on="on"
              >Delete All</v-btn>
              <v-dialog v-model="delete_diag" max-width="290" :retain-focus="false">
                <v-card>
                  <v-card-title class="headline">Delete all events</v-card-title>
                  <v-card-text>Are you sure you want to delete everything?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="close">No</v-btn>
                    <v-btn color="green darken-1" text @click="deleteAll()">Yes!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="delete_diag_sp" max-width="290" :retain-focus="false">
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
            </template>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- This section is for the editing / add new item modal -->
      <!-- Buttons for editing -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItemStage(item)">mdi-delete</v-icon>
      </template>
      <!-- Buttons for editing -->
    </v-data-table>
  </div>
</body>
</template>

<script>
import axios from "axios";
import authSetting from "../../auth"

const apiArchiveEventResource = "/Api/Archive/Event";
const apiArchiveEventsResource = "/Api/Archive/Events";

export default {
  data: () => ({
    //apis storage
    loading: true,
    apiEndpoint: "",

    //dialogs for deletion
    delete_diag_sp: false,
    delete_diag: false,

    //dialog window for adding/editing
    dialog: false,

    //interval for elapsed
    interval: "day",

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

    deleteIndex: - 1,

    //item to be deleted
    deletingItem: {
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

  watch: {
    dialog(val) {
      val || this.close();
    },    
  },

  created() {
    this.initialize();
  },

  methods: {
    setApiEnd() {
      this.apiEndpoint = authSetting.dev ? authSetting.audience_dev : authSetting.audience;
    },

    //data sync api calls
    async apiRetrieveArchive() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.get(this.apiEndpoint + this.apiArchiveEventsResource, {
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

    async apiDelEvent(event) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete(this.apiEndpoint + this.apiArchiveEventResource, {
        headers: { Authorization: `Bearer ${token}` },
        data: { strId: event.strId },
      });

    },

    async apiDelAll() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      await axios.delete(this.apiEndpoint + this.apiArchiveEventsResource, {
        headers: { Authorization: `Bearer ${token}` },
      });

    },
    //data sync api calls

    // list initialization
    initialize() {
      this.setApiEnd();
      this.apiRetrieveArchive();
    },

    //recalculates all elapsed
    recalculateElapsed() {
      for (var x = 0; x < this.myevents.length; x++) {
        this.myevents[x].intElapsed = this.timeElapsed(
          this.myevents[x].dtmDate
        );
      }
    },

        //close window
    close() {
      this.delete_diag = false;
      this.dialog = false;
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

    //set up dialog and set index and deletion
    deleteItemStage(item) {
      this.deleteIndex = this.myevents.indexOf(item);
      this.deletingItem = Object.assign({}, this.myevents[this.deleteIndex]);
      this.delete_diag_sp = true; //show delete dialog
    },

    //reset delete item, closes dialog {
    resetDelete() {
      this.deleteIndex = -1; //reset index
      this.deletingItem = Object.assign({}, this.defaultItem); //reset item
      this.delete_diag_sp = false;
      this.dialog = false;
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
      this.delete_diag = false;
      this.dialog = false;
    },

    //clears event container
    clearEvents() {
      this.myevents = [];
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
