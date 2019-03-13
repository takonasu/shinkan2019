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
                  <v-app>
                    <v-layout>
                      <v-flex>
                        <v-sheet height="400">
                          <v-calendar color="primary" type="day">
                            <template v-slot:dayHeader="{present}">
                              <template v-if="present" class="text-xs-center"></template>
                            </template>

                            <template v-slot:interval="{ hour }">
                              <div class="text-xs-center">{{ hour }} o'clock</div>
                            </template>
                          </v-calendar>
                        </v-sheet>
                      </v-flex>
                    </v-layout>
                  </v-app>
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
  data: () => ({
    tracked: {
      "2019-01-09": [23, 45, 10],
      "2019-01-08": [10],
      "2019-01-07": [0, 78, 5],
      "2019-01-06": [0, 0, 50],
      "2019-01-05": [0, 10, 23],
      "2019-01-04": [2, 90],
      "2019-01-03": [10, 32],
      "2019-01-02": [80, 10, 10],
      "2019-01-01": [20, 25, 10]
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"]
  }),
  computed: {},
  methods: {}
};
</script>
