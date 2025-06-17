import styles from "./page.module.css";
import Image from "next/image";

export default function SkillPage() {
  return (
    <main id="skill" className={styles.container}>
      
        <h2 className={styles.heading}>Skill</h2>
        {/* <p className={styles.text}>
          これまでに、HTMLとCSSを中心に基本的なWebページの制作を学びました。
          現在はJavaScriptやTypeScriptを学びながら、Next.jsを使ったポートフォリオ制作に挑戦中です。
          今後はReactやTailwind
          CSSなども取り入れて、よりモダンなUI開発にも取り組みたいと考えています。
        </p> */}
      
      <div>
        <ul className={styles.skillList}>
          <li>
            <h4>HTML&CSS</h4>
            <Image src="/images/html&ss.png" alt="ロゴ" width={80} height={60} />

            <p>
              私はHTMLとCSSを使って、見やすく整ったWebページを作成することができます。レスポンシブ対応や基本的なアニメーションの実装にも対応しており、スマートフォンやタブレットでも快適に閲覧できるデザインを意識しています。
              また、SassやFlexbox、Gridレイアウトなども活用し、保守性の高いコードを書くことを心がけています。
            </p>
          </li>
          {/* {data.contents.map((skill)) =>(
            <p className={styles.id} className ={styles.list}></p>
            <Image
            src={Skill.image.url}
            alt=""
            width={Skill.image.width}
            height={Skill.image.height}
            className={styles.image}
            />
            <dl>

            </dl> */}
          {/* )
          } */}

          <li>
            <h4>JavaScript</h4>
            <Image
              src="/images/javascript.png"
              alt="ロゴ"
              width={80}
              height={60}
            />
            <p>
              JavaScriptを使って、Webページに動きを加えることができます。
              ボタンクリックによる表示の切り替えや、モーダルウィンドウ、スライドメニューなど、ユーザーの操作に応じたインタラクティブな機能を実装しています。
              DOM操作やイベント処理にも対応しています。
            </p>
          </li>
          <li>
            <h4>Java</h4>
            <Image src="/images/java.png" alt="ロゴ" width={80} height={60} />
            <p>
              現在、Java
              Bronzeの資格取得に向けて学習を進めています。基本的な文法やデータ型、条件分岐、繰り返し処理、配列などの基礎を中心に、オブジェクト指向の考え方やクラスの使い方なども理解を深めています。
              試験対策を通じて、Javaの基礎力をしっかり身につけ、今後の実践的な開発につなげていきたいと考えています
            </p>
          </li>
          <li>
            <h4>Next.js</h4>
            <Image src="/images/nextjs.png" alt="ロゴ" width={80} height={60} />
            <p>
              現在のWebサイトはNext.jsを使って作成しました。ページルーティングやコンポーネントの設計、画像の最適化（next/image）など、Next.jsの基本的な機能を活用しています。開発を通じて、Reactとの連携やファイル構成の設計、デプロイ（Vercel使用）などの実践的な経験を積むことができました。
              今後はデータフェッチやパフォーマンス最適化など、より高度な機能にも取り組んでいきたいと考えています。
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
