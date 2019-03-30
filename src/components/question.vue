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
        }
      ],
      alert: true
    };
  }
};
</script>

<style>
</style>
