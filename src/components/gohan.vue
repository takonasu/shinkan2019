<template>
  <div>
    <v-flex>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">入学前食事会</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              入学に先立って同じ新入生と交流を持ってみませんか。
              新歓委員も多く参加するので、大学生活への疑問があれば聞いてみてください。
              皆さんのご参加をお待ちしております。
            </div>
          </v-card-text>
        </v-card>
      </v-container>

      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">日時</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <p>
              <b>4月6日</b>
            </p>
            <p>詳細な集合時刻はLINE@でお知らせいたします。</p>
          </v-card-text>
        </v-card>
      </v-container>

      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">場所</h3>
            </div>
          </v-card-title>
          <div class="ggmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6446.995631448822!2d140.0999968855798!3d36.105727895066835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x837cda30f3673a96!2z55m-6aaZ5LqtIOetkeazouWkp-WtpuW6lw!5e0!3m2!1sja!2sjp!4v1552453315889"
              width="600"
              height="450"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <v-card-text>
            <p>百香亭 筑波大学店</p>
            <p>〒305-0005 茨城県つくば市天久保3丁目15-1</p>
            <p>詳細な集合場所はLINE@でお知らせいたします</p>
          </v-card-text>
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
  padding-top: 30px;
  height: 0;
  overflow: hidden;
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
</style>
