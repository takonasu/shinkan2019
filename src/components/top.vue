<template>
  <div>

    <v-layout row wrap>
      <v-flex xs12 md6 v-for="n in page_lists" v-bind:key="n.id">
        <v-container>
          <v-card hover>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ n.title }}</h3>
                <div> {{ n.text }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <router-link v-bind:to="n.link" style="text-decoration: none;">
                <v-btn color="blue lighten-1" dark>
                  移動
                </v-btn>
              </router-link>
            </v-card-actions>


          </v-card>
        </v-container>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page_lists: [{
            id: 1,
            title: "宿舎入居",
            text: "宿舎に入る人はみてね！",
            link: "shukusya"
          },
          {
            id: 2,
            title: "入学前食事会",
            text: "百香亭という中華飯店に行きます",
            link: "gohan"
          },
          {
            id: 3,
            title: "入学式",
            text: "お待ちかねの入学式です！",
            link: "enter"
          },
          {
            id: 4,
            title: "プレイスメントテスト",
            text: "は？なにこれ？",
            link: "Eng_test"
          },
          {
            id: 5,
            title: "新歓合宿",
            text: "合宿に行きます",
            link: "camp"
          },
          {
            id: 6,
            title: "履修相談会",
            text: "履修って何？先輩と一緒に登録しよう！",
            link: "risyu"
          },
          {
            id: 7,
            title: "情報科学類懇親会",
            text: "情報科学類で懇親会するよ！",
            link: "gakurui"
          },
          {
            id: 8,
            title: "情報学群懇親会",
            text: "情報学群で懇親会するよ！",
            link: "gakugun"
          },


        ],
        alert: true
      }
    }
  }

</script>
