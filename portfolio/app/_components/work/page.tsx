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
          <h3>作品名 1</h3>
          <p>
            一年生の時に作ったサイトです。
            HTMLとCSSの基礎を学びながら制作しました。
            レイアウトや配色、ナビゲーションの作り方など、Web制作の基本を実践的に身につけた初めての作品です。
          </p>
          <Link
            href="https://travelling-topaz.vercel.app/"
            className={styles.link}
          >
            vercel のリンクはこちらです
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>作品名 2</h3>
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
        {/* 必要に応じてリストを追加 */}
      </ul>
    </main>
  );
}
