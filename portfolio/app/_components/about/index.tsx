import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <section id="about" className={styles.contentBox}>
        <div className={styles.textBox}>
          <h2>About </h2>
        
          <p>
            現在、専門学校でWebプログラミングを学んでいます。このサイトは、私が学んでいるHTML、CSS、JavaScriptを使ったWebサイトの制作に取り組んでおり、最近はNext.jsを使ったポートフォリオの作成にも挑戦しています。
            そしてそれらを活かして制作した作品を紹介するためのポートフォリオサイトです。
            ここでは、学んだ知識を実際の制作に活かしながら、見やすく使いやすいサイト作りを心がけています。
          </p>
          <p>
            私の目標は、単に技術を覚えるだけでなく、ユーザーの視点に立ったデザインや使いやすさを追求し、実際に役立つサービスや作品を提供できるエンジニアになることです。
            そのため、このサイトでは制作物の紹介だけでなく、開発の過程や工夫したポイントもできるだけ詳しく記載しています。
          </p>
          {/* <button className={styles.readMore}>READ MORE</button> */}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/nani.JPEG"
            alt="About Image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
}
