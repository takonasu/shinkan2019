<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <h1>製作者</h1>
          <div>
            このWebサイトは私達で制作しました。
            何かわからないことがあればTwitterのDM等で連絡ください。
          </div>
        </v-container>





        <v-layout row wrap>
          <v-flex xs12 md6 v-for="n in card_lists" v-bind:key="n.id">
            <v-container>
              <v-card>
                <v-img v-bind:src="n.img" aspect-ratio="1.5"></v-img>
                <v-card-title primary-title>
                  <span class="headline">{{n.title}}</span>
                  {{n.subtitle}}
                </v-card-title>
                <v-card-text>
                  <h4 class="headline mb-2">{{n.text}}</h4>
                  <v-btn class="mx-2" color="info" icon large target="_blank" v-bind:href="n.link">
                    <v-icon>fab fa-twitter</v-icon>
                  </v-btn>
                </v-card-text>

              </v-card>
            </v-container>

          </v-flex>
        </v-layout>

      </v-card>
    </v-container>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        card_lists: [{
            id: 1,
            title: "oshun(@uk_osy)",
            subtitle : "新歓委員長　合宿ページ担当",
            text: "新歓委員長です！",
            link: "https://twitter.com/uk_osy",
            img: "https://pbs.twimg.com/profile_images/1041278929854558210/VMcuApjK_400x400.jpg"
          },
          {
            id: 2,
            title: "たこなす(@ITF_tako)",
            subtitle : "副新歓委員長 広報班長 入学式ページ・WEB構成担当",
            text: "もう入学してから1年経つのか。。。",
            link: "https://twitter.com/ITF_tako",
            img: "https://pbs.twimg.com/profile_images/1079755767119409153/aTlUrEPU_400x400.jpg"

          },
          {
            id: 3,
            title: "szk18(@ITF_szk)",
            subtitle : "履修班長 ほぼ全ページ・アイコン担当",
            text: "ねこはかわいい",
            link: "https://twitter.com/ITF_szk",
            img: "/static/szk.jpg"

          },

        ],
      };
    }
  };

</script>

<style>
</style>
