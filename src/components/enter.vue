<template>
  <div>
    <v-flex>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">入学式</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <p>みなさんお楽しみの入学式です！
                入学式では驚くべき面白いことが起こるので、寝ないようにしましょう。</p>
              <p>入学式は午前の部と午後の部で別れています。</p>
              情報科学類は午後の部なので他の学類とは入学式の時間が違うことに注意してください。
              <p>また、入学式の後には学類オリエンテーションがあります。</p>
              <p>入学式後は新歓委員がオリエンテーション会場まで誘導するので、青色の法被を着た新歓委員の所に集まってください。</p>
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
                <h3>4月8日(月)</h3>
                <br>
                <p>10:40から始まります！迷わないように早めにきましょう！</p>
              </v-card-text>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">開催場所</h3>
                </div>
              </v-card-title>

              <v-card-text>
                <div>筑波大学 大学会館</div>
                <div>〒305-0006 茨城県つくば市天王台１丁目１−１</div>
              </v-card-text>

              <div class="ggmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.509433191085!2d140.09954391527046!3d36.105444780097585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c07ec55595b%3A0x988a4d4ee76493e9!2z562R5rOi5aSn5a2mIOWkp-WtpuS8mumkqA!5e0!3m2!1sja!2sjp!4v1552467039475"
                  width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> </div>

              <v-card-text>
                筑波大学は広いので場所を間違えないように気をつけてください。
              </v-card-text>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">参加費</h3>
                </div>
              </v-card-title>

              <v-card-text>
                <div>
                  <h3>0円</h3>
                  <div>
                    <del>(お金がかからないから絶対に来ようね！)</del>
                  </div>
                </div>
              </v-card-text>
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
        card_text: "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
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
