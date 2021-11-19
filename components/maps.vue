<template>
  <MapboxMap
    class="rounded-lg"
    style="height: 400px; width: 600px"
    :access-token="accessToken"
    :map-style="mapStyle"
    :zoom="5.8"
    :center="[5.526944, 52.167443]"
  >
    <div v-for="city in cities" v-bind:key="city.name">
      <MapboxMarker
        v-if="!isNaN(city.longitude) && !isNaN(city.latitude)"
        :lng-lat="[city.longitude, city.latitude]"
        popup
      >
        <div
          class="w-4 h-4 bg-wf-orange rounded-full"
          v-bind:class="cities.length > 20 ? 'bg-opacity-20' : 'bg-opacity-50'"
        />
        <template v-slot:popup>
          <p>{{ city.name }}</p>
        </template>
      </MapboxMarker>
    </div>
  </MapboxMap>
</template>

<script>
export default {
  props: ['cities'],
  data() {
    return {
      accessToken: process.env.mapboxKey,
      mapStyle: 'mapbox://styles/julienrbrt/ckvtg8faj1zkr15o7mthfp4to',
    }
  },
}
</script>