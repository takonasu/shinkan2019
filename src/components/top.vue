<template>
  <div>
    <div>
      <v-alert v-model="alert" type="info" class="mt-0">
        入学式は4月8日です。
      </v-alert>

      <div class="text-xs-center">
      </div>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6 v-for="n in card_lists" v-bind:key="n.id">
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
        card_lists: [{
            id: 1,
            title: "新歓合宿",
            text: "合宿に行きます",
            link: "camp"
          },
          {
            id: 2,
            title: "入学式前ご飯会",
            text: "百香亭に行きます",
            link: "gohan"
          },
          {
            id: 3,
            title: "入学パンフレット正誤表",
            text: "ごめんなさい間違えました。許してください、なんでもしますから！なんでもするとは言ってない。",
            link: "seigo"
          },
          {
            id: 4,
            title: "学類懇親会",
            text: "情報科学類で懇親会するよ！",
            link: "gakurui"
          },
          {
            id: 5,
            title: "学群懇親会",
            text: "情報学群で懇親会するよ！",
            link: "gakugun"
          },
          {
            id: 6,
            title: "入学式",
            text: "パンフの日にち間違えてるから気をつけて！",
            link: "enter"
          },
          {
            id: 7,
            title: "プレイスメントテスト",
            text: "は？なにこれ？",
            link: "Eng_test"
          },
          {
            id: 8,
            title: "宿舎入居",
            text: "宿舎に入る人はみてね！",
            link: "shukusya"
          },
          {
            id: 9,
            title: "理趣相談会",
            text: "履修って何？先輩と一緒に登録しよう！",
            link: "risyu"
          },
          {
            id: 10,
            title: "その他",
            text: "スライム",
            link: "other"
          },
        ],
        alert: true
      }
    }
  }

</script>
