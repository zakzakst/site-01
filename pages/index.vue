<template>
  <v-layout class="flex-column">
    <v-container class="top__container top__container--hero is-img-left">
      <v-row>
        <v-col cols="6" offset="6" class="px-8 py-12">
          <h1 class="text-h3 mb-4">タイトルが入ります</h1>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="top__container top__container--info is-img-right">
      <v-row>
        <v-col cols="6" class="px-8 py-12">
          <h2 class="text-h4 mb-4">開催概要</h2>
          <v-row>
            <v-col cols="12">
              <v-simple-table class="transparent">
                <template v-slot:default>
                  <tbody>
                    <tr v-for="eventInfo in eventInfoList" :key="eventInfo.name">
                      <td>{{ eventInfo.name }}</td>
                      <td v-html="eventInfo.text"></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col cols="12"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.0459159529737!2d139.80315461529614!3d35.74967618017841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e4fa6644e8d%3A0x6bc4e612ab55d171!2z5YyX5Y2D5L2P6aeF!5e0!3m2!1sja!2sjp!4v1573641724526!5m2!1sja!2sjp" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="top__container top__container--event is-img-left">
      <v-row>
        <v-col cols="6" offset="6" class="px-8 py-12">
          <h2 class="text-h4 mb-4">イベント</h2>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          <h3 class="text-h5 mt-8">最近追加されたイベント</h3>
          <v-row>
            <v-col cols="6">
              <v-card href="test" hover>
                <v-img class="white--text align-end" height="150px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                  <v-card-title>タイトルタイトルタイトルタイトル</v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">サブタイトル</v-card-subtitle>
                <v-card-text class="text--primary">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card href="test" hover>
                <v-img class="white--text align-end" height="150px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                  <v-card-title>タイトルタイトルタイトルタイトル</v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">サブタイトル</v-card-subtitle>
                <v-card-text class="text--primary">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-btn color="primary">イベント一覧を見る</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="top__container top__container--contact is-img-right">
      <v-row>
        <v-col cols="6" class="px-8 py-12">
          <h2 class="text-h4 mb-4">お問い合わせ</h2>
          <v-form ref="myForm" name="myForm" target="_blank" action="https://s-ishizaki.sakura.ne.jp/" method="get">
            <v-row>
              <v-col cols="12">
                <v-text-field name="lastName" counter="10" label="性" placeholder="山田" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field name="firstName" counter="10" label="名" placeholder="太郎" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field name="mail" label="メールアドレス" placeholder="yamada@taro.co.jp" outlined required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea name="contact" label="お問い合わせ内容" placeholder="お問い合わせ内容を入力してください" counter="400" outlined></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn class="mr-4" color="primary">送信</v-btn>
                <v-btn>内容をクリア</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      eventInfoList: [
        {
          name: 'イベント名',
          text: 'テキストテキストテキスト',
        },
        {
          name: '開催日時',
          text: '2019年 0月0日（●） 00:00～00:00',
        },
        {
          name: '主催',
          text: '株式会社○○',
        },
        {
          name: '参加費',
          text: '無料',
        },
        {
          name: '場所',
          text: '○○公園 イベントスペース',
        },
        {
          name: '住所',
          text: '東京都○○区○○町 0-00-00',
        },
      ],
    }
  }
}
</script>

<style>
.top__container {
  position: relative;
}
.top__container::before {
  position: absolute;
  content: '';
  display: block;
  width: 50vw;
  top: 0;
  bottom: 0;
  background: #ddd center center;
  background-size: cover;
}
.top__container--hero {
  padding-top: 80px;
}
.top__container.top__container--hero::before {
  background-image: url(https://picsum.photos/id/237/300/300);
}
.top__container.top__container--info::before {
  background-image: url(https://picsum.photos/id/238/300/300);
}
.top__container.top__container--event::before {
  background-image: url(https://picsum.photos/id/239/300/300);
}
.top__container.top__container--contact::before {
  background-image: url(https://picsum.photos/id/240/300/300);
}
.top__container.is-img-left::before {
  right: 50%;
}
.top__container.is-img-right::before {
  left: 50%;
}
</style>
