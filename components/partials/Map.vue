<template>
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
</template>

<script>
import MapMarker from "./MapMarker.vue";
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
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
      mapStyle: "mapbox://styles/mohdshahzaib07/ckkktol12356917nsm0eovkqv"
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

<style lang="scss" scoped>
::v-deep .mapboxgl-canvas:focus {
  outline: none !important;
}
</style>
