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
          <b-button variant="outline-danger" size="lg" v-b-modal.modal-center>
            Share <b-icon icon="share" aria-hidden="true"></b-icon
          ></b-button>
          <b-modal
            id="modal-center"
            centered
            :title="'Share event: ' + event.name"
            cancel-disabled="true"
          >
            <template #modal-footer="{ ok }">
              <b-button variant="danger" @click="ok()"> OK </b-button>
            </template>

            <template>
              <!-- Sharingbutton Facebook -->
              <a
                class="resp-sharing-button__link"
                href="https://facebook.com/sharer/sharer.php?u="
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
                      />
                    </svg>
                  </div>
                  Facebook
                </div>
              </a>

              <!-- Sharingbutton Twitter -->
              <a
                class="resp-sharing-button__link"
                href="https://twitter.com/intent/tweet/?text=Hi%20from%20meetup-clone&amp;url="
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
                      />
                    </svg>
                  </div>
                  Twitter
                </div>
              </a>

              <!-- Sharingbutton Tumblr -->
              <a
                class="resp-sharing-button__link"
                href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Hi%20from%20meetup-clone&amp;caption=Hi%20from%20meetup-clone&amp;content=&amp;canonicalUrl=&amp;shareSource=tumblr_share_button"
                target="_blank"
                rel="noopener"
                aria-label="Tumblr"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"
                      />
                    </svg>
                  </div>
                  Tumblr
                </div>
              </a>

              <!-- Sharingbutton LinkedIn -->
              <a
                class="resp-sharing-button__link"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=Hi%20from%20meetup-clone&amp;summary=Hi%20from%20meetup-clone&amp;source="
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"
                      />
                    </svg>
                  </div>
                  LinkedIn
                </div>
              </a>

              <!-- Sharingbutton WhatsApp -->
              <a
                class="resp-sharing-button__link"
                href="whatsapp://send?text=Hi%20from%20meetup-clone%20"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"
                      />
                    </svg>
                  </div>
                  WhatsApp
                </div>
              </a>

              <!-- Sharingbutton Telegram -->
              <a
                class="resp-sharing-button__link"
                href="https://telegram.me/share/url?text=Hi%20from%20meetup-clone&amp;url="
                target="_blank"
                rel="noopener"
                aria-label="Telegram"
              >
                <div
                  class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--medium"
                >
                  <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"
                      />
                    </svg>
                  </div>
                  Telegram
                </div>
              </a>
            </template>
          </b-modal>
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
          <b-button variant="outline-danger" size="lg" @click="attendEvent()">
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
    attendEvent() {
      this.$bvToast.toast(
        "Event approval sent! Please wait for the organizer to accept your request.",
        {
          title: "Success",
        }
      );
    },
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
.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
}

.resp-sharing-button__link:hover {
  text-decoration: none !important;
  color: red !important;
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em;
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top;
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle;
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none;
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9;
}

.resp-sharing-button--pinterest {
  background-color: #bd081c;
}

.resp-sharing-button--pinterest:hover {
  background-color: #8c0615;
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373;
}

.resp-sharing-button--tumblr {
  background-color: #35465c;
}

.resp-sharing-button--tumblr:hover {
  background-color: #222d3c;
}

.resp-sharing-button--reddit {
  background-color: #5f99cf;
}

.resp-sharing-button--reddit:hover {
  background-color: #3a80c1;
}

.resp-sharing-button--google {
  background-color: #dd4b39;
}

.resp-sharing-button--google:hover {
  background-color: #c23321;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
}

.resp-sharing-button--linkedin:hover {
  background-color: #046293;
}

.resp-sharing-button--email {
  background-color: #777;
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e;
}

.resp-sharing-button--xing {
  background-color: #1a7576;
}

.resp-sharing-button--xing:hover {
  background-color: #114c4c;
}

.resp-sharing-button--whatsapp {
  background-color: #25d366;
}

.resp-sharing-button--whatsapp:hover {
  background-color: #1da851;
}

.resp-sharing-button--hackernews {
  background-color: #ff6600;
}
.resp-sharing-button--hackernews:hover,
.resp-sharing-button--hackernews:focus {
  background-color: #fb6200;
}

.resp-sharing-button--vk {
  background-color: #507299;
}

.resp-sharing-button--vk:hover {
  background-color: #43648c;
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

.resp-sharing-button--tumblr {
  background-color: #35465c;
  border-color: #35465c;
}

.resp-sharing-button--tumblr:hover,
.resp-sharing-button--tumblr:active {
  background-color: #222d3c;
  border-color: #222d3c;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.resp-sharing-button--linkedin:hover,
.resp-sharing-button--linkedin:active {
  background-color: #046293;
  border-color: #046293;
}

.resp-sharing-button--whatsapp {
  background-color: #25d366;
  border-color: #25d366;
}

.resp-sharing-button--whatsapp:hover,
.resp-sharing-button--whatsapp:active {
  background-color: #1da851;
  border-color: #1da851;
}

.resp-sharing-button--telegram {
  background-color: #54a9eb;
}

.resp-sharing-button--telegram:hover {
  background-color: #4b97d1;
}
</style>