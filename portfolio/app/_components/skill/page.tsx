import styles from "./page.module.css";
import Image from "next/image";

export default function SkillPage() {
  return (
    <main id="skill" className={styles.container}>
      <div>
        <h2 className={styles.heading}>Skill</h2>
        <p className={styles.text}>
          これまでに、HTMLとCSSを中心に基本的なWebページの制作を学びました。
          現在はJavaScriptやTypeScriptを学びながら、Next.jsを使ったポートフォリオ制作に挑戦中です。
          今後はReactやTailwind
          CSSなども取り入れて、よりモダンなUI開発にも取り組みたいと考えています。
        </p>
      </div>
      <div>
        <ul className={styles.skillList}>
          <li>
            <Image src="/images/html.png" alt="ロゴ" width={50} height={50} />
            <strong>HTML</strong>
          </li>
          <li>
            <Image src="/images/css.png" alt="ロゴ" width={50} height={50} />
            <strong>CSS</strong>
          </li>
          <li>
            <Image
              src="/images/javascript.png"
              alt="ロゴ"
              width={50}
              height={50}
            />
            <strong>JavaScript</strong>
          </li>
          <li>
            <Image src="/images/java.png" alt="ロゴ" width={50} height={50} />
            <strong>JAVA</strong>
          </li>
          <li>
            <Image src="/images/nextjs.png" alt="ロゴ" width={50} height={50} />
            <strong>Next.js</strong>
          </li>

          {/* 自分の学習中・習得済み技術をリストで追加 */}
        </ul>
      </div>
    </main>
  );
}
