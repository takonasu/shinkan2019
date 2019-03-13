<template>
  <div>
    <v-card flat>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">新歓合宿</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container>
              <p>情報科学類では毎年、オリエンテーション期間中に一泊二日で茨城県立中央青年の家に合宿に行っています。
                <br>そこでは、レクリエーションを行ったり、夜バーベキューを行ったりして新入生同士の親睦を深めることを目的としています。
              </p>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">日程</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <v-data-table :headers="headers" :items="desserts">
                    <template v-slot:items="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-right">{{ props.item.details }}</td>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-container>
            <v-container>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">必要なもの</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <p>以下のものは忘れずに持って来てください。</p>
                  <div class="list ma-4">
                    <ul>
                      <li>財布</li>
                      <li>持っている方はスマートフォン(履修登録の際に使用します)</li>
                      <li>寝間着</li>
                      <li>洗面用具</li>
                      <li>汚れても良い服(BBQ時、臭いが付きます)</li>
                      <li>汚れても良い靴</li>
                      <li>ゴミ袋</li>
                      <li>ハンカチ・ティッシュ</li>
                      <li>虫よけ</li>
                      <li>常備薬</li>
                      <li>上履き</li>
                    </ul>
                  </div>

                  <p>以下のものは必要に応じて持って来てください。</p>
                  <div class="list ma-4">
                    <ul>
                      <li>ヘアアイロン</li>
                      <li>コンタクト</li>
                      <li>ハンガー</li>
                      <li>酔い止め薬</li>
                      <li>延長コード</li>
                      <li>メイクポーチ</li>
                      <li>トランプなど</li>
                    </ul>
                  </div>
                  <p>以下のものは施設に備え付けてあります。</p>
                  <div class="list ma-4">
                    <ul>
                      <li>ボディーソープ</li>
                      <li>シャンプー</li>
                      <li>ドライヤー</li>
                    </ul>
                  </div>
                </v-card-text>
              </v-card>
            </v-container>
            <v-container>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">注意事項</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>お菓子が配られますが、寝る部屋で飲食を行わなようにしてください。</li>
                    <li>飲酒・喫煙は禁止です。</li>
                    <li>貴重品は各自で管理してください。</li>
                    <li>体調不良になった場合や怪我をした場合は早めに新歓委員または施設の人に申し出てください。</li>
                    <li>ルールを守って設備を大切に使ってください。</li>
                    <li>時間厳守で行動してください。</li>
                    <li>BBQの臭いが付いたいり すす で汚れてしまったりすることが考えられるので、汚れても平気な服を用意することを検討してください。</li>
                    <li>困ったことがあったら新歓委員に伝えてください。</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>

      <!-- 
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"></h3>
            </div>
          </v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-container>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">日程</h3>
            </div>
          </v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-container>-->
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "" }
      ],
      desserts: [
        {
          name: "4/9(Tue)15:30~",
          details: "大学からバスに乗って移動"
        },
        {
          name: "16:00~",
          details: "到着　入所式"
        },
        {
          name: "~17:30",
          details: "履修登録の説明"
        },
        {
          name: "17:30~",
          details: "BBQ"
        },
        {
          name: "20:00~21:00",
          details: "入浴"
        },
        {
          name: "22:00",
          details: "消灯"
        },
        {
          name: "4/10(Wed)7:30~",
          details: "朝食"
        },
        {
          name: "8:30~10:00",
          details: "レクリエーション"
        },
        {
          name: "10:30~11:30",
          details: "クラ代決め等"
        },
        {
          name: "11:30",
          details: "退所"
        },
        {
          name: "12:00",
          details: "大学到着"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style>
</style>