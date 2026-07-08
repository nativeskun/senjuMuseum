import Link from "next/link"
import Image from "next/image"
import { topicsConfig } from "@/lib/data"

export default function Home() {
  const { topics } = topicsConfig

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">先住民の歴史博物館</h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          壁画、地上絵、墨絵、偶像、肖像画など、先住民の歴史に関する資料を集めた博物館です。<br />
        </p>
      </div>

      {topics.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            src/lib/data.ts にトピックを追加してください
          </p>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
            images は public/images/&lt;slug&gt;/ 以下に配置します
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={topic.thumbnail}
                  alt={topic.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                className="p-4"
                style={{
                  backgroundColor: topic.color,
                  borderLeftWidth: 4,
                  borderLeftStyle: "solid",
                  borderLeftColor: topic.accentColor,
                }}
              >
                <h2 className="text-lg font-semibold text-white">{topic.title}</h2>
                <p
                  className="mt-1 text-sm text-white/80"
                  dangerouslySetInnerHTML={{ __html: topic.description }}
                />
              </div>
            </Link>
          ))}
        </div>
      )}

      <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight">先住民について</h2>
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400 w-auto">
          ハンドルネームが先住民です。名前があまりにも固有名詞です。<br />
          小さくて肉付きのいい感じの女の子が大好きです。<i>X-MEN</i>や<i>HE-MAN</i>も好きです。<br />
          VRChatとMarvelRivalsとデュエル・マスターズとMTGアリーナとトリッカルがライフワークです。<br />
          2025/6からイラストを描き始めました。<br />
          いまだに作画スタイルは定まっていません。<br />
          感想とかあったら何かしらで教えてね。飛び上がるように喜びます。
        </p>
      </section>
      <section className="mt-12 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight mb-4">このサイトについて</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          このサイトは、先住民が描いたイラストを展示したりするために作られました。<br />
          Next.js 14 と Tailwind CSS を使用して構築されています。<br />
          DeepSeek V4 Proを使用して、バイブコーディングを行っています。<br />
          先住民が描いたイラストを壁紙にしたいとか印刷したいとか、個人利用は自由にしてもらって構いません。<br />
          商標利用は勘弁願いたい。（ソース元を明記した転載は許可します。その際は当サイトのURLを記載してください）<br />
          当サイトはリンクフリーです。以下のバナーを使ってやってください。<br />
          <a href="/images/先住民の歴史博物館.png" target="_blank" className="w-auto inline-block">
            <Image src="/images/先住民の歴史博物館.png" width={160} height={50} alt="先住民の歴史博物館" className="mt-4" />
          </a>
          <br />
          公開日：2026/7/8(水)
        </p>
      </section>
      <section className="mt-12 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight mb-4">ソーシャルアカウント</h2>
        <a href="https://x.com/NTvsKNTM" target="_blank" className="ml-4 text-blue-600 hover:underline">
          エックス（ほぼ見るだけ（DMくれたら見ます））
        </a>
        <br />
        <a href="https://www.pixiv.net/users/25922850" target="_blank" className="ml-4 text-blue-600 hover:underline">
          ピクシブ（定期投稿）
        </a>
        <br />
        <a href="https://mkkey.net/@nat" target="_blank" className="ml-4 text-blue-600 hover:underline">
          ActivityPub（mkkey.net）（MastodonやMisskeyからフォローできます）
        </a>
        <br />
        <a href="https://mi.nekonet.cyou/@nat" target="_blank" className="ml-4 text-blue-600 hover:underline">
          ActivityPub（mi.nekonet.cyou）
        </a>
        <br />
        <a href="https://skeb.jp/@natives" target="_blank" className="ml-4 text-blue-600 hover:underline">
          Skeb（実績ゼロ）
        </a>
        <br />
        <a href="https://odaibako.net/u/nat" target="_blank" className="ml-4 text-blue-600 hover:underline">
          お題箱（Skebに金払って依頼するよりこっちの方がお得）
        </a>
        <br />
        <a href="https://note.com/natives" target="_blank" className="ml-4 text-blue-600 hover:underline">
          note
        </a>
      </section>
      <section className="mt-12 border-t border-zinc-200 pt-12 dark:border-zinc-800 gap-4">
        <h2 className="text-2xl font-bold tracking-tight mb-4">スポンサー</h2>
        <div className="flex flex-row flex-wrap items-end justify-end ">
          <a href="https://piyopuffin.github.io/meteor/" target="_blank" rel="noopener">
            <img src="https://piyopuffin.github.io/meteor/banner.svg" width="190" height="40" alt="Pikutsuki Meteor" />
          </a>
          <a href="https://nekonet.cyou/" target="_blank" rel="noopener" className="ml-4">
            <Image src="/images/CAT5リンク.png" width={190} height={40} alt="CAT5" />
          </a>
          <a title="いかそばの部屋" href="https://ikasoba.net"><img width="110" height="40" src="https://ikasoba.net/static/banner.svg"/></a>
        </div>
      </section>
    </main>
  )
}
