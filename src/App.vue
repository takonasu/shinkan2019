<template>
  <div id="app">
    
    <v-parallax height="300" dark src="/static/gakuhi.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">coins新歓2019</h1>
        <h4 class="subheading"></h4>
      </v-layout>
    </v-parallax>
    <div style="margin-bottom:100px;">
    <router-view />
    </div>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions class="blue lighten-1 justify-center">
          &copy;
          <strong>平成31年度筑波大学情報科学類新入生歓迎委員会</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }

</script>

<style>

</style>
