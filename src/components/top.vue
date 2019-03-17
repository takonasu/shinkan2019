<template>
  <div>
    <v-alert v-model="alert" type="warning" dismissible class="mt-0">
      coins新歓委員は青い法被を着ています。
      法被を着ていない人は新歓委員ではありません。
      不審な人が現れたらすぐにLINE@等で連絡してください。
    </v-alert>
    <v-layout row wrap>
      <v-flex xs12 md6 v-for="n in page_lists" v-bind:key="n.id">
        <v-container>
          <router-link v-bind:to="n.link" style="text-decoration: none;">

            <v-card hover>
              <v-img v-bind:src="'static/'+n.img" aspect-ratio="2.75"></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ n.title }}</h3>
                  <div> {{ n.text }} </div>
                </div>
              </v-card-title>

            </v-card>
          </router-link>

        </v-container>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page_lists: [{
        id: 1,
        title: '宿舎入居',
        text: '宿舎に入る人はみてね！',
        link: 'lodging',
        img: 'hirakyo.jpg'
      },
      {
        id: 2,
        title: '入学前食事会',
        text: '百香亭という中華飯店に行きます',
        link: 'meal',
        img: 'hyakkou.jpg'

      },
      {
        id: 3,
        title: '入学式',
        text: 'お待ちかねの入学式です！',
        link: 'entrance',
        img: 'kaikan.jpg'

      },
      {
        id: 4,
        title: 'プレイスメントテスト',
        text: 'は？なにこれ？',
        link: 'test',
        img: '2gaku.jpg'

      },
      {
        id: 5,
        title: '新歓合宿',
        text: '合宿に行きます',
        link: 'camp',
        img: 'BQ.jpg'

      },
      {
        id: 6,
        title: '履修相談会',
        text: '履修って何？先輩と一緒に登録しよう！',
        link: 'registration',
        img: 'lounge.jpg'

      },
      {
        id: 7,
        title: '情報科学類懇親会',
        text: '情報科学類で懇親会するよ！',
        link: 'department',
        img: 'coinskonshin.jpg'

      },
      {
        id: 8,
        title: '情報学群懇親会',
        text: '情報学群で懇親会するよ！',
        link: 'faculty',
        img: 'gurobi.jpg'

      }

      ],
      alert: true
    }
  }
}

</script>
