<template>
  <v-container>
    <!-- Section 1st -->
    <section
      style="
        margin-top: 5.5619rem;
        margin-bottom: 6.4375rem;
      "
    >
      <v-row justify="center" align="center">
        <v-col cols="6">
          <h1 style="font-size: 3.125rem; font-weight: 500; color:#0B132A">
            Want anything to be <br />
            easy with
            <p
              style="
                font-size: 3.125rem;
                font-weight: 700;
                display: inline-block;
              "
            >
              LaslesVPN.
            </p>
          </h1>
          <p class="mt-5 mb-11" style="font-weight: 500; color: #4f5665">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <v-btn
            width="15.625rem"
            height="3.75rem"
            color="primary"
            class="text-capitalize py-4 px-19"
            style="
              font-weight: 700;
              line-height: 19px;
              box-shadow: 0px 20px 54px rgba(245, 56, 56, 0.35);
            "
          >
            Get Started
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="require('@/assets/images/illustration1.png')"
            height="23.9025rem"
            width="34.015rem"
            contain
          />
        </v-col>
      </v-row>
    </section>

    <!--Section 2nd  -->
    <section style="margin-bottom: 5.9894rem">
      <v-card
        height="12.5rem"
        style="box-shadow: 0px 27px 51px -57px  rgba(13, 16, 37, 0.6);"
      >
        <v-row style="height: 100%">
          <v-col
            cols="4"
            class="d-flex justify-center align-center"
            v-for="iconAndName in iconsAndName"
            :key="iconAndName.icon"
          >
            <v-avatar color="#FFECEC" height="3.4375rem" width="3.4375rem">
              <v-icon color="#F53838" size="1.5rem">{{
                iconAndName.icon
              }}</v-icon>
            </v-avatar>
            <h1
              class="ml-9"
              style="font-size: 1.5625rem; font-weight: 700; line-height: 30px"
            >
              {{ iconAndName.heading }}+
              <p class="my-0" style="font-size: 1.25rem; font-weight: 400;">
                {{ iconAndName.subHeading }}
              </p>
            </h1>
          </v-col>
        </v-row>
      </v-card>
    </section>

    <!-- Section 3rd -->
    <section>
      <v-row justify="center" align="center" style="margin-bottom: 8.1994rem">
        <v-col cols="6">
          <v-img
            :src="require('@/assets/images/illustration2.png')"
            height="25.9194rem"
            width="31.7575rem"
            contain
          />
        </v-col>
        <v-col cols="6">
          <h2
            style="font-size: 2.1875rem; font-weight: 500; color: #0B132A; max-width: 23.9631rem;"
          >
            We Provide Many Features You Can Use
          </h2>
          <p
            class="mt-5 mb-5"
            style="font-weight: 400; color: #4F5665; max-width: 26.7425rem"
          >
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <v-list v-for="list in lists" :key="list" class="px-0 py-0 mx-0 my-0">
            <v-list-item class="pl-0">
              <v-list-item-icon class="mr-2 mt-3 mb-3 ">
                <v-icon color="#2FAB73">$right</v-icon>
              </v-list-item-icon>

              <v-list-item-title
                style="color: #4F5665; font-size: 0.875rem; font-weight: 400; line-height: 30px"
                >{{ list }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </section>

    <!-- Section 4th -->
    <section style="margin-bottom: 9.375rem">
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center align-center flex-column text-center"
        >
          <h2
            class="text-center"
            style="font-size: 2.1875rem; font-weight: 500; color: #0B132A; max-width: 23.9631rem;"
          >
            Choose Your Plan
          </h2>
          <p
            class="mt-5 mb-15"
            style="font-weight: 400; color: #4F5665; max-width: 34.6875rem"
          >
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" :key="i" v-for="(plan, i) in plans">
          <PriceCard
            :planList="plan.planList"
            :planType="plan.planType"
            :price="plan.price"
          />
        </v-col>
      </v-row>
    </section>

    <!-- Section 5th -->
    <section style="margin-bottom: 1.8344rem">
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center align-center flex-column text-center"
        >
          <h2
            class="text-center"
            style="font-size: 2.1875rem; font-weight: 500; color: #0B132A; max-width: 23.9631rem"
          >
            Huge Global Network of Fast VPN
          </h2>
          <p
            class="mt-5"
            style="font-weight: 400; color: #4F5665; max-width: 34.6875rem; margin-bottom: 9.7381rem"
          >
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </v-col>
      </v-row>
      <v-row style="height: 537.77px">
        <v-col cols="12">
          <MglMap :accessToken="mapAccessToken" :mapStyle="mapStyle">
            <MglMarker :coordinates="coordinates1">
              <MapMarker slot="marker" />
            </MglMarker>

            <MglMarker :coordinates="coordinates2">
              <MapMarker slot="marker" />
            </MglMarker>

            <MglMarker :coordinates="coordinates3">
              <MapMarker slot="marker" />
            </MglMarker>

            <MglMarker :coordinates="coordinates4">
              <MapMarker slot="marker" />
            </MglMarker>

            <MglMarker :coordinates="coordinates5">
              <MapMarker slot="marker" />
            </MglMarker>
          </MglMap>
        </v-col>
      </v-row>
    </section>

    <!-- Section 6th -->
    <section style="margin-bottom: 3.125rem; max-height: 208.32px">
      <v-row>
        <v-col class="d-flex align-center"
          ><v-img
            contain
            height="112.5px"
            width="200px"
            :src="require('@/assets/images/logo1.png')"
        /></v-col>
        <v-col class="d-flex align-center"
          ><v-img
            contain
            height="50.62px"
            width="156.25px"
            :src="require('@/assets/images/logo5.png')"
        /></v-col>
        <v-col class="d-flex align-center"
          ><v-img
            contain
            height="208.32"
            width="277.76px"
            :src="require('@/assets/images/logo4.png')"
        /></v-col>
        <v-col class="d-flex align-center"
          ><v-img
            contain
            height="187.02px"
            width="187.02px"
            :src="require('@/assets/images/logo3.png')"
        /></v-col>
        <v-col class="d-flex align-center"
          ><v-img
            contain
            height="51.34px"
            width="171.28px"
            :src="require('@/assets/images/logo2.png')"
        /></v-col>
      </v-row>
    </section>

    <!-- Section 7th -->
    <section style="margin-bottom: 4.0637rem">
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center align-center flex-column text-center"
        >
          <h2
            class="text-center"
            style="font-size: 2.1875rem; font-weight: 500; color: #0B132A; max-width: 27.9881rem"
          >
            Trusted by Thousands of Happy Customer
          </h2>
          <p
            class="mt-5"
            style="font-weight: 400; color: #4F5665; max-width: 34.6875rem; margin-bottom: 9.7381rem"
          >
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Section 8th -->
    <section style="margin-bottom: -5.3rem">
      <v-card
        height="14.5625rem"
        style="box-shadow: 0px 27px 51px -57px  rgba(13, 16, 37, 0.6); z-index: 4"
        class="px-16"
      >
        <v-row style="height: 100%">
          <v-col cols="6" class="d-flex justify-center flex-column">
            <h2
              style="font-size: 2.1875rem;line-height: 45px; font-weight: 500; color: #0B132A; max-width: 27.9881rem"
            >
              Subscribe Now for Get Special Features!
            </h2>
            <p
              class="mt-5"
              style="font-weight: 400; color: #4F5665;  max-width: 34.6875rem;"
            >
              Let's subscribe with us and find the fun.
            </p>
          </v-col>
          <v-col cols="6" class=" d-flex align-center">
            <v-btn
              width="15.625rem"
              height="3.75rem"
              color="primary"
              class="text-capitalize d-flex ml-auto g-btn-hover"
              style="
              font-weight: 700;
              line-height: 25px;
            "
            >
              Subscribe Now
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </section>
  </v-container>
</template>

<script>
import PriceCard from "../components/partials/PriceCard.vue";
import MapMarker from "../components/partials/MapMarker.vue";
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    PriceCard,
    MglMap,
    MglMarker,
    MapMarker
  },
  data() {
    return {
      coordinates1: [-331.17187499999994, 12.554563528593656],
      coordinates2: [-265.078125, 56.9449741808516],
      coordinates3: [-469.68750000000006, 51.6180165487737],
      coordinates4: [-236.95312499999997, -27.68352808378776],
      coordinates5: [-416.953125, -11.867350911459294],
      mapAccessToken:
        "pk.eyJ1IjoibW9oZHNoYWh6YWliMDciLCJhIjoiY2tra3NuMjFkMWF3bTJucGdxZ24wbjduYyJ9.GWDj2PIkeapff20Zeou6jw",
      mapStyle: "mapbox://styles/mohdshahzaib07/ckkktol12356917nsm0eovkqv",
      iconsAndName: [
        {
          icon: "$user",
          heading: "90",
          subHeading: "User"
        },
        {
          icon: "$location",
          heading: "30",
          subHeading: "Locations"
        },
        {
          icon: "$group",
          heading: "50",
          subHeading: "Servers"
        }
      ],
      lists: [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits."
      ],
      plans: [
        {
          planType: "Free",
          price: "Free",
          planList: [
            "Unlimited Bandwitch",
            "IEncrypted Connection.",
            "No Traffic Logs",
            "Works on All Devices"
          ]
        },
        {
          planType: "Standard Plan",
          price: "$9",
          planList: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware"
          ]
        },
        {
          planType: "Premium Plan",
          price: "$12",
          planList: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features"
          ]
        }
      ]
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>
