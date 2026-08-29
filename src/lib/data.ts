import type { TopicsConfig } from "./types"

/*
 * トピックの設定
 *
 * 追加方法:
 *   1. この配列にトピックを追加
 *   2. public/images/<slug>/ 以下に画像を配置
 *   3. topic.images に { src, description } の形式で列挙
 *
 * 例:
 *   {
 *     slug: "landscape",
 *     title: "風景",
 *     description: "風景をテーマにしたイラスト",
 *     thumbnail: "/images/landscape/sample.jpg",
 *     color: "#4a90d9",
 *     accentColor: "#357abd",
 *     images: [
 *       { src: "/images/landscape/sample.jpg", description: "夕暮れの街並み" },
 *       { src: "/images/landscape/sample2.jpg", description: "夏の海辺" },
 *     ],
 *   },
 */
export const topicsConfig: TopicsConfig = {
  topics: [
    {
      slug: "history",
      title: "先住民の歴史",
      description: "一月毎に1枚のイラストをピックアップして掲載しています",
      thumbnail: "/images/history/samune.png",
      color: "#a5a5a5",
      accentColor: "#fbffd2",
      images: [
        { src: "/images/history/202506.png", description: "<i>2025年6月 クララ/えも研<br>デジタルイラスト初描き</i>" },
        { src: "/images/history/202507.png", description: "<i>2025年7月 ミスター・ファンタスティック/マーベル・ライバルズ<br>ほぼトレース</i>" },
        { src: "/images/history/202508.png", description: "<i>2025年8月 うさだヒカル/デ・ジ・キャラット<br>デッサン人形使用</i>" },
        { src: "/images/history/202509.png", description: "<i>2025年9月 褐色エジプトなんとか<br>月神コンスをイメージした装飾</i>" },
        { src: "/images/history/202510.png", description: "<i>2025年10月 初音ミク<br>実は曲を全然聴いたことがない</i>" },
        { src: "/images/history/202511.png", description: "<i>2025年11月 ヨミ/トリッカル<br>スピキブームの前から継続してプレイ中</i>" },
        { src: "/images/history/202512.png", description: "<i>2025年12月 ラムネ/えも研<br>お姉さん</i>" },
        { src: "/images/history/202601.jpeg", description: "<i>2026年1月 欠番 <br>引っ越しで忙しかったため、かわりに18人のデッドプールを見せます</i>" },
        { src: "/images/history/202602.png", description: "<i>2026年2月 ピコラ/トリッカル<br>ピコラとピコラ</i>" },
        { src: "/images/history/202603.png", description: "<i>2026年3月 ブルミ/トリッカル<br>これしかなかった　この時期はVR野球チームの監督をやっていて特段忙しかった</i>" },
        { src: "/images/history/202604.png", description: "<i>2026年4月 フォロワーさんのオリジナルキャラクター<br>バースデイイラストとして寄贈</i>" },
        { src: "/images/history/202605.png", description: "<i>2026年5月 ナイア/トリッカル<br>ナイアのことを常に考えている</i>" },
        { src: "/images/history/202606.png", description: "<i>2026年6月 野球チームの集合イラスト<br>みんなと戦えてよかった</i>" },
        { src: "/images/history/202607.png", description: "<i>2026年7月 ナイア/トリッカル<br>もちもち電脳祭りイラストアンソロジーに寄贈</i>"}
      ]
    },
    {
      slug: "naia",
      title: "世界の必須要素の写真集は必須なのか？",
      description: "電脳もちもち祭りにて展示のイラスト(無料です)",
      thumbnail: "/images/naia/samune.png",
      color: "#4a90d9",
      accentColor: "#dbe646",
      images: [
        { src: "/images/naia/0.png", description: "<i>「教主～かわいいサングラスをもらったよ～！」</i><br><small>いちばんいい感じに描けたので前に持ってきました</small>" },
        { src: "/images/naia/1.png", description: "頬を持ち上げる" },
        { src: "/images/naia/2.png", description: "大小" },
        { src: "/images/naia/3.png", description: "<i>「浮き輪？私には必要ないよ？」</i>" },
        { src: "/images/naia/4.png", description: "4コマ漫画" },
        { src: "/images/naia/5.png", description: "ゴールデンウィークにかいた" },
        { src: "/images/naia/6.png", description: "作画練習" },
        { src: "/images/naia/7.png", description: "熱血カラー" },
        { src: "/images/naia/8.png", description: "初描き（ルリちゃんもいるよ）" },
        { src: "/images/naia/9.png", description: "キョトンとした顔で自分を指さすスチルが好き" },
        { src: "/images/naia/10.png", description: "いろんなサイズ感を試している" },
        { src: "/images/naia/11.png", description: "本国版のバニー衣装があまりにも煽情的すぎる<br><i>ついでにルリちゃんも</i>" },
        { src: "/images/naia/12.png", description: "ナイシル" },
        { src: "/images/naia/13.png", description: "マンガをぼちぼち描いています<br>いずれどこかで無料公開すると思う" },
        { src: "/images/naia/14.jpeg", description: "ここまでのご観覧ありがとうございました<br>よろしければわたくしのSNSをフォローしていってください<br>このサイトのトップページにSNS一覧があります" },
      ],
    }
  ],
}
