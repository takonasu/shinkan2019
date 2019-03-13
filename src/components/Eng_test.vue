<template>
  <div>
    <v-flex>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">プレイスメントテストってなんや！！</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              新入生は全員TOEFL ITPというテストを受けます。これがプレイスメントテストです。
              このテストの結果によって英語のクラス分けがされます。
              真面目に受けましょう。
            </div>
          </v-card-text>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">日時</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <h3>4月9日(火) 9:15~11:45</h3>
              </v-card-text>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">会場</h3>
                </div>
              </v-card-title>

              <v-card-text>
                <h3>2B412</h3>
                <div>
                  第二エリアB棟四階の教室です。
                  下のgooglemapsでは第二エリア大食堂を指していますが、同じ建物なのでここに来てくれれば大丈夫です！
                </div>
              </v-card-text>
              <div class="ggmap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d402.9098166480591!2d140.1011846!3d36.1110714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c01198068f3%3A0xe0937f4e0d78477!2z562R5rOi5aSn5a2m56ys77yS44Ko44Oq44Ki5aSn6aOf5aCC!5e0!3m2!1sja!2sjp!4v1552468691033"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
              </div>
            </v-card>
          </v-container>
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
.ggmap {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

.ggmap iframe,
.ggmap object,
.ggmap embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h3 {
  margin-bottom: 1rem;
}
</style>
