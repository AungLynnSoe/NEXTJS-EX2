import Link from "next/link";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <main id="work" className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        一年生の時に作ったサイトと、最近制作したポートフォリオサイトを紹介します。
        初めての制作から、現在学んでいる技術を活かしたものまで、自分の成長を感じられる作品たちです。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>国の有名な場所紹介</h3>
          <p>
            国の有名な場所を紹介するサイトです。
            HTML, CSS、JavaScriptを使ったWebサイトの制作に取り組んでおり、最近はNext.jsにも挑戦しています。
          </p>
          <Link
            href="https://travelling-topaz.vercel.app/"
            className={styles.link}
          >
            vercel のリンクはこちらです
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>portfolio</h3>
          <p>
            Next.js を使ったポートフォリオサイトです。
            ReactフレームワークであるNext.jsを使い、ルーティングやコンポーネント設計、レスポンシブ対応などを意識して開発しました。自分のスキルや作品を紹介するために作成しました。
          </p>
          <Link
            href="https://github.com/AungLynnSoe/NEXTJS-EX2/tree/main/portfolio"
            className={styles.link}
          >
            GitHub リポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>order app</h3>
          <p>
            Next.js を使ったオーダーアプリです。
            ユーザーが商品を選択し、注文を行うためのインターフェースを提供します。
            フロントエンドはNext.jsで構築されており、バックエンドはAPIを通じて連携しています。
          </p>
          <Link
            href="https://order-app-henna.vercel.app/"
            className={styles.link}
          >
            vercel のリンクはこちら
          </Link>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
    </main>
  );
}
