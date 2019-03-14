<template>
  <div>
    <v-flex>
      <v-container>
        <h1>製作者</h1>
        <div>
          このWebサイトは私達で制作しました。
          何かわからないことがあればTwitterのDM等で連絡ください。
        </div>
      </v-container>

      <v-container>
        <v-card>
          <v-img
            src="https://pbs.twimg.com/profile_images/1041278929854558210/VMcuApjK_400x400.jpg"
            aspect-ratio="1.5"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h1>oshun(@uk_osy)</h1>

              <h4 class="headline mb-2">新歓委員長です！</h4>
              <v-btn
                class="mx-2"
                color="info"
                icon
                large
                target="_blank"
                href="https://twitter.com/uk_osy"
              >
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-container>
        <v-card>
          <v-img
            src="https://pbs.twimg.com/profile_images/1079755767119409153/aTlUrEPU_400x400.jpg"
            aspect-ratio="1.5"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h1>takonasu(@ITF_tako)</h1>
              <h4 class="headline mb-2">たこなすだよん</h4>
              <v-btn
                class="mx-2"
                color="info"
                icon
                large
                target="_blank"
                href="https://twitter.com/ITF_tako"
              >
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-container>
        <v-card>
          <v-img src="/static/szk.jpg" aspect-ratio="1.5"></v-img>

          <v-card-title primary-title>
            <div>
              <h1>szk18(@ITF_szk)</h1>
              <h4 class="headline mb-2">ねこはかわいい</h4>
              <v-btn
                class="mx-2"
                color="info"
                icon
                large
                target="_blank"
                href="https://twitter.com/ITF_szk"
              >
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  }
};
</script>

<style>
</style>
