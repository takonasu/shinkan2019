<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6 v-for="n in card_lists" v-bind:key="n.id">
        <v-container>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ n.title }}</h3>
                <div> {{ n.text }} </div>
              </div>
            </v-card-title>

            <v-card-actions><router-link v-bind:to="n.link" style="text-decoration: none;">
              <v-btn color="blue lighten-1" dark>
                  移動 
              </v-btn></router-link>
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
            link: "gashuku"
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
            title: "その他",
            text: "スライム",
            link: "other"
          },
        ],
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }

</script>
