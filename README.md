# Riku Oyamaguchi's Portforio

こちらは[Next.js](https://nextjs.org/)にて作成しました、当アカウント運営者である大山口吏紅のポートフォリオサイトです。
Next.js の開発元である[Vercel](https://vercel.com/)のホスティングサービスを用いて、デプロイ済みです。
サイトは[**こちら**](https://react-portfolio-nine-mu.vercel.app/)。

---

## 仕様

以前から[WordPress](https://ja.wordpress.org/)を用いて運営していた[**こちら**](https://rikudon.shop)のサイトをクローンする形で、当サイトを作成いたしました。

---

## サイトの構築目的

1. ここまでに学んだ React, Next.js に関するアウトプットのため。
1. Next.js の SSG によって、WordPress の既存サイトのページ読み込み速度がどれほど改善されるかを実際に確認するため。

---

## 技術

- HTML
- CSS
- Vanilla JavaScript
- React
- Next.js

---

## トップページの「Works」セクションと、Works ページのコンテンツについて

各実績の情報は WordPress の WP REST API を用いて、データベース上にある json を取得することで表示しています。
json の get には axios を使用しました。

---

## ページの読み込み速度の変化について

[PageSpeedInsights](https://pagespeed.web.dev/)を用いてサイトを分析しました。
WordPress で運営していた状態と比較すると、パフォーマンスの項目が以下のように改善されました。

- PC : 87 → 99
- SP : 43 → 81

  この他にも、SEO の項目は

- PC : 82 → 100
- SP : 85 → 100

  のよう変化し、劇的な改善が見られました。
