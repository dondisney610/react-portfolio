import Head from "next/head";
import Link from "next/link";
import Contactsec from "../../components/Contactsec";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>
          Privacy-Policy | 三重県フリーランスエンジニア　大山口吏紅 |
          Webサイト制作
        </title>
      </Head>
      <Header />
      <div className="privacy-policy">
        <h1>プライバシーポリシー</h1>
        <p>
          当サイトでは以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
        </p>
        <h3>個人情報の管理</h3>
        <p>
          当サイトでは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
        </p>
        <h3>個人情報の利用目的</h3>
        <p>
          お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
        </p>
        <h3>個人情報の第三者への開示・提供の禁止</h3>
        <p>
          当サイトでは、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
        </p>
        <ul>
          <li>お客さまの同意がある場合</li>
          <li>
            お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
          </li>
          <li>法令に基づき開示することが必要である場合</li>
        </ul>
        <h3>個人情報の安全対策</h3>
        <p>
          当サイトでは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
        </p>
        <h3>アクセス解析について</h3>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
          <a
            href="http://www.google.com/analytics/terms/jp.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            Googleアナリティクスサービス利用規約のページ
          </a>
          や
          <a
            href="http://www.google.co.jp/policies/technologies/ads/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Googleのポリシーと規約ページ
          </a>
          をご覧ください。
        </p>
        <h3>ご本人の照会</h3>
        <p>
          お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
        </p>
        <h3>法令・規範の遵守と見直し</h3>
        <p>
          当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
        </p>
        <h3>お問い合わせ</h3>
        <p>
          当サイトの個人情報の取扱に関するお問い合せは
          <Link href="/contact">【お問い合わせフォーム】</Link>
          又は下記までご連絡ください。
          <br />
          【メールアドレス】rikudonoyamaguchi☆gmail.com　☆を@に変えて下さい
        </p>
      </div>
      <Contactsec />
      <Footer />
    </>
  );
};

export default Privacy;
