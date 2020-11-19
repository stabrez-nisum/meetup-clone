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
      <div class="d-flex justify-content-between">
        <div>
          <h4>Attendees ({{ event.attendees }})</h4>
        </div>
        <div>
          <b-button variant="outline-danger" size="lg">
            Attend <b-icon icon="flag-fill" aria-hidden="true"></b-icon
          ></b-button>
        </div>
      </div>
    </b-container>
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
    };
  },
  mounted() {
    this.globalEvents = GlobalEvents;
    this.event = this.globalEvents.find(
      (el) => el._id == this.$route.params.id
    );
  },
};
</script>

<style>
.event-image {
  height: 390px;
  width: 600px;
}
</style>