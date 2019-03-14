<template>
  <div id="app">
    <v-app>
      <v-toolbar color="blue lighten-1" dark fixed app clipped-right>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title @click="$router.push('/')">coins新歓2019WEB</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" fixed app>
        <v-list dense>
          <v-list-tile v-for="item in page_lists" :key="item.title" @click="$router.push(item.link);drawer=!drawer"
            class="mt-2">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-navigation-drawer>

      <v-parallax height="300" dark src="/static/gakuhi.jpg" class="mt-4 pt-4">
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
            <v-btn class="mx-3" dark icon href="https://twitter.com/coins2019">
              <v-icon size="24px">fab fa-twitter</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      page_lists: [{
          id: 0,
          title: "トップページ",
          link: "/",
          icon: "dashboard"
        }, {
          id: 1,
          title: "宿舎入居",
          text: "宿舎に入る人はみてね！",
          link: "lodging",
          icon: "fas fa-home"
        },
        {
          id: 2,
          title: "入学前食事会",
          text: "百香亭という中華飯店に行きます",
          link: "meal",
          icon: "fas fa-utensils"
        },
        {
          id: 3,
          title: "入学式",
          text: "お待ちかねの入学式です！",
          link: "entrance",
          icon: "fas fa-user-graduate"
        },
        {
          id: 4,
          title: "プレイスメントテスト",
          text: "は？なにこれ？",
          link: "test",
          icon: "fas fa-pencil-alt"
        },
        {
          id: 5,
          title: "新歓合宿",
          text: "合宿に行きます",
          link: "camp",
          icon: "fas fa-bed"
        },
        {
          id: 6,
          title: "履修相談会",
          text: "履修って何？先輩と一緒に登録しよう！",
          link: "registration",
          icon: "fas fa-desktop"
        },
        {
          id: 7,
          title: "情報科学類懇親会",
          text: "情報科学類で懇親会するよ！",
          link: "department",
          icon: "fas fa-handshake"
        },
        {
          id: 8,
          title: "情報学群懇親会",
          text: "情報学群で懇親会するよ！",
          link: "faculty",
          icon: "fas fa-user-friends"
        },
      ],
      drawer: false,
      drawerRight: null,
      right: false,
      left: false
    })

  }

</script>

<style>

</style>
