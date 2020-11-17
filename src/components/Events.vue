<template>
  <div class="d-flex justify-content-around my-5">
    <b-card
      :title="event.name"
      :img-src="event.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mr-2 mb-2"
      v-for="(event, eventIndex) in eventList"
      :key="eventIndex"
    >
      <b-card-text>
        <strong
          ><p>
            {{ event.info }}
          </p>
        </strong>
        <p>{{ event.description }}</p>
      </b-card-text>

      <template #footer>
        <p>
          Organized by <strong>{{ event.organizer }}</strong>
        </p>
        <b-button :href="'/event/' + event._id" variant="primary">Checkout Event</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Events",
  props: {
    eventList: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.eventList);
  },
};
</script>

<style>
</style>