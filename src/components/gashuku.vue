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
                  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                    <template v-slot:items="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-right">{{ props.item.details }}</td>
                      <td class="text-xs-right">{{ props.item.fat }}</td>
                      <td class="text-xs-right">{{ props.item.carbs }}</td>
                      <td class="text-xs-right">{{ props.item.protein }}</td>
                      <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                  </v-data-table>
                  <p>
                    /9(Tue) 15:30~ バスに乗って移動
                    16:00 到着 入所式
                    ~17:30 履修登録の説明
                    17:30~ BBQ
                    20:00~21:00 入浴
                    22:00 消灯
                    4/10(Wed)
                    7:30~ 朝食
                    8:30~10:00 レクリエーション
                    10:30~11:30 クラ代決め
                    11:30 退所
                    12:00 大学到着
                  </p>
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
                <v-card-text></v-card-text>
              </v-card>
            </v-container>
            <v-container>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">注意事項</h3>
                  </div>
                </v-card-title>
                <v-card-text>お菓子が配られますが、寝る部屋で飲食を行わなようにしてください。</v-card-text>
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
          text: "時間",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "詳細", text: "details" }
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
          name: "Cupcake",
          details: "e"
        },
        {
          name: "Gingerbread",
          details: "o"
        },
        {
          name: "Jelly bean",
          details: "ka"
        },
        {
          name: "Lollipop",
          details: "ki"
        },
        {
          name: "Honeycomb",
          details: "ku"
        },
        {
          name: "Donut",
          details: "ke"
        },
        {
          name: "KitKat",
          details: "ko"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
