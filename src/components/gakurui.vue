<template>
  <div>
    <v-flex>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">学類懇親会</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              学類の新歓行事を締めくくる会です。
              レクリエーションで学類の仲間との仲を深めましょう！
              先輩と話すことができる貴重な機会です。
              <!-- 内容が薄いからどうにかしよう -->
              ぜひ奮ってご参加を！
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
                <h3>4月13日(土) 17時30分開始</h3>
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
                  <h3>不要</h3>
                </div>
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
                <div>筑波大学 グローバルビレッジ</div>
                <div>〒305-0005 茨城県つくば市天久保3丁目15-1</div>
              </v-card-text>

              <div class="ggmap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.6816134413474!2d140.10422358397958!3d36.09620398148769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c74ba64fe57%3A0x3b603182ac34fbaa!2z562R5rOi5aSn5a2mIOOCsOODreODvOODkOODq-ODtOOCo-ODrOODg-OCuCDjgrPjg5_jg6Xjg4vjg4bjgqPjgrnjg4bjg7zjgrfjg6fjg7M!5e0!3m2!1sja!2sjp!4v1552462754340"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
              </div>

              <v-card-text>こちらは開催場所になります。
                <br>集合場所は以下を参照してください。
                <!-- 集合場所より近い場合は直接来てもらって構いません。 -->
              </v-card-text>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">集合場所</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <div>集合場所には法被を着た新歓委員が待機しています。</div>
                <div class="font-weight-bold">集合時間は17時です。</div>
                <div>※直接グローバルビレッジに来ていただいても構いません。</div>
              </v-card-text>

              <v-card-text>
                <div>平砂学生宿舎 共用棟前</div>
                <div>〒305-0005 茨城県つくば市天久保２丁目１</div>
              </v-card-text>
              <div class="ggmap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680.3404568447171!2d140.10330268839482!3d36.09777029955882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c7517f83bc3%3A0x61e61613464b8588!2z562R5rOi5aSn5a2mIOWtpueUn-Wuv-iIjuODu-emj-WIqeWOmueUn-aWveioreetieW5s-eggueUn-a0u-OCu-ODs-OCv-ODvOeuoeeQhuS6i-WLmeWupA!5e0!3m2!1sja!2sjp!4v1552462342110"
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
