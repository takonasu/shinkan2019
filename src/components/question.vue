<template>
  <div>
    <v-container>
      <v-card class="mb-4">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Q＆Aだよ！！</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            皆さんから寄せられた質問の中で特に多かったものについて答えていきます！
            わからないことがあったらLINE@でどんどん質問しましょう！
          </div>
        </v-card-text>

        <v-container>
          <v-card class="mb-4" v-for="n in question_lists" v-bind:key="n.id">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ n.question }}</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <h3>{{ n.answer }}</h3>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question_lists: [
        {
          id: 1,
          question:
            "学校で講義を受けるとき、パソコンを充電することはできますか？",
          answer:
            "教室にも依りますが大抵の教室にはコンセントがあるので、充電することはできます！"
        },
        {
          id: 2,
          question: "大学でも紙のノートって常用しますか？",
          answer:
            "それは人に依りますね！ノートを取らない人もいますし、紙のノートで取る人や電子ノート(タブレットなど)、パソコンで取る人など様々です！"
        },
        {
          id: 3,
          question: "ガイダンスでの配布物って多いですか？",
          answer:
            "かなり多いですが、IMAGINE THE FUTUREと書かれたバックに入って配られるため、特に袋等を用意する必要はありません！"
        },
        {
          id: 4,
          question: "入学前食事会は何時間くらいを見積もっておけば良いですか？",
          answer: "お店が二時間しか借りられないので二時間です！"
        },
        {
          id: 5,
          question:
            "プレイスメントテストのTOEFLはiBTですか？それともITPですか？",
          answer: "ITPです！"
        },
        {
          id: 6,
          question:
            "授業はいつ始まりますか？また、その後のスケジュールが知りたいです！",
          answer:
            "授業が始まるのは11日です！時間割は自分で決めるので人によります！"
        },
        {
          id: 7,
          question: "入寮の際、住民票はどうしたか教えてほしいです",
          answer:
            "入寮の際、住民票を必ずしも移す必要はありません！ただ、入寮手続きの際に必要だったかは覚えていないので一応現在の住民票は持っていったほうが安心だと思います！"
        }
        // {
        //   id: ,
        //   question: "",
        //   answer: ""
        // },
        // {
        //   id: ,
        //   question: "",
        //   answer: ""
        // },
        // {
        //   id: ,
        //   question: "",
        //   answer: ""
        // },
        // {
        //   id: ,
        //   question: "",
        //   answer: ""
        // }
      ],
      alert: true
    };
  }
};
</script>

<style>
</style>
