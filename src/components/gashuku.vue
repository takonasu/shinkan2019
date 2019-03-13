<template>
  <div>
    <v-card flat>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">新歓合宿とは</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <p>情報科学類では毎年、オリエンテーション期間中に一泊二日で茨城県立中央青年の家に合宿に行っています。
              <br>そこでは、レクリエーションを行ったり、夜バーベキューを行ったりして新入生同士の親睦を深めることを目的としています。
            </p>
          </v-card-text>
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
      </v-container>

      <!-- 
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">日程</h3>
            </div>
          </v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-container><v-container>
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
      active: null,
      card_text: "こんにちは",
      list: [
        {
          id: 1,
          label: "新歓合宿とは",
          text:
            "情報科学類では毎年、オリエンテーション期間中に一泊二日で茨城県立中央青年の家に合宿に行っています。<br>そこでは、夜バーベキューを行ったりレクリエーションを行ったりして新入生同士の親睦を深めることを目的としています。"
        },
        {
          id: 2,
          label: "日程",
          text: "4月9日15:00-4月10日12:00"
        },
        {
          id: 3,
          label: "持ち物",
          text: "い"
        },
        {
          id: 4,
          label: "注意事項",
          text:
            "<br>BBQの臭いが付いたいり すす で汚れてしまったりすることが考えられるので、汚れても平気な服を用意することを検討してください。<br>困ったことがあったら新歓委員に伝えてください。飲酒・喫煙は禁止です。<br>貴重品は各自で管理してください。<br>体調不良になった場合や怪我をした場合は早めに新歓委員または施設の人に申し出てください。<br>ルールを守って設備を大切に使ってください。<br>時間厳守で行動してください。"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
