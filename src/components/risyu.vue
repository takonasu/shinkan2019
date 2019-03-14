<template>
  <div>
    <v-flex>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">履修相談会に行こう！</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>先輩と一緒に履修登録をしましょう！</div>
          </v-card-text>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">日時</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <h3>4月13日(土) 10:00~16:00</h3>
                <h3>4月14日(日) 10:00~16:00</h3>
              </v-card-text>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">持ち物</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <h3>履修要覧、学生証、統一認証のパスワードが書いてある紙</h3>
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
</style>
