<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 対応言語
常に日本語で応答してください。

# Next.js v16 固有の注意点

- `params` / `searchParams` は Promise になった。Server Component では `await`、Client Component では `use()` で展開する
- `next/image` の `priority` は非推奨 → `preload` を使用
- `next/image` の src には必ず `width`/`height` または `fill` が必要。`fill` 使用時は親要素に `position: relative` が必要
- `next.config.ts` に `images.qualities: [75]` が必須（v16 から）
- `Link` は子要素に `<a>` タグが不要（v13 以降）
- `PageProps`, `LayoutProps`, `RouteContext` 型ヘルパーがグローバルに利用可能（`next` から import 不要、`next dev` 時に自動生成）

# プロジェクト構成

- `src/app/page.tsx` — トップページ（トピック一覧）
- `src/app/topics/[slug]/page.tsx` — トピック別イラスト一覧（Server Component）
- `src/app/topics/[slug]/layout.tsx` — トピック別レイアウト（テーマカラー適用のヘッダー・フッター）
- `src/components/topic-gallery.tsx` — イラスト一覧（シングルカラム・フル幅、Server Component）
- `src/lib/data.ts` — トピック定義（配列書くだけ）
- `src/lib/types.ts` — 共有型定義
- `public/images/<slug>/` — イラスト画像の配置先

# トピック追加手順

1. `public/images/<slug>/` に画像を配置
2. `src/lib/data.ts` の `topics` 配列に `Topic` オブジェクトを追加
3. 画像パスは `/images/<slug>/<filename>` 形式、各画像に `description` を付与
4. `ImageItem` は `{ src: string, description: string }`
5. `Topic` の `color` はテーマカラー（背景色に使用）、`accentColor` はアクセントカラー（ボーダーやリンク色に使用）
