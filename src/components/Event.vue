<template>
  <div>
    <hr />
    <b-container fluid="md">
      <div>
        <p class="text-muted">
          {{ event.info }}
        </p>
        <h1>
          <strong> {{ event.name }}</strong>
        </h1>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <p>Hosted By</p>
          <h2>
            <strong>{{ event.organizer }}</strong>
          </h2>
        </div>
        <div>
          <b-button variant="outline-danger" size="lg">
            Share <b-icon icon="share" aria-hidden="true"></b-icon
          ></b-button>
        </div>
      </div>
      <hr />
      <img :src="event.image" class="event-image" :alt="event.name" />
      <hr />
      <h4>Details</h4>
      <p>{{ event.description }}</p>
      <hr />
      <div class="d-flex justify-content-between">
        <div style="width: 70%">
          <h4>Attendees ({{ noOfAttendees }})</h4>
          <div class="flex-container">
            <b-card
              class="mr-2 mb-2"
              v-for="(item, eventIndex) in attendeesDetails"
              :key="eventIndex"
            >
              <b-card-text>
                <b-button class="mr-1" variant="primary" pill>
                  {{ nameIcon[eventIndex] }}</b-button
                >
                <p>
                  <b>{{ item.name }}</b>
                </p>
                <p>{{ item.status }}</p>
              </b-card-text>
            </b-card>
          </div>
        </div>
        <div>
          <b-button variant="outline-danger" size="lg">
            Attend <b-icon icon="flag-fill" aria-hidden="true"></b-icon
          ></b-button>
        </div>
      </div>
    </b-container>
    <hr />
  </div>
</template>

<script>
import GlobalEvents from "../../public/global_events.json";
export default {
  name: "Event",
  data() {
    return {
      event: {},
      globalEvents: [],
      attendeesDetails: [],
      nameIcon: [],
      noOfAttendees: "",
    };
  },
  mounted() {
    this.globalEvents = GlobalEvents;
    this.event = this.globalEvents.find(
      (el) => el._id == this.$route.params.id
    );
    if (this.event.attendeesDetails != null) {
      this.attendeesDetails = this.event.attendeesDetails;
      this.attendeesDetails.map((icon) => {
        var spaceIndex = icon.name.match(/\b(\w)/g);
        this.nameIcon.push(spaceIndex.join("").toUpperCase());
      });
      this.noOfAttendees = this.event.attendeesDetails.length;
    } else {
      this.noOfAttendees = 0;
    }
  },
  methods: {
    attend() {},
  },
};
</script>

<style>
.event-image {
  height: 390px;
  width: 600px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-container > div {
  width: 157px;
  margin: 10px;
  text-align: center;
}
</style>