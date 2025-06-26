import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <main className={styles.container}>
      <div>
        <h2 className={styles.heading}>Profile</h2>
        <section id="profile" className={styles.profileSection}>
          <Image
            src="/images/beach.jpg"
            alt="My Profile"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <p>
              <strong>名前：</strong>アウンリンソー (<strong>ソー</strong>{" "}
              と読んで下さい)
            </p>
            <p>
              <strong>年齢：</strong>23歳
            </p>
            <p>
              <strong>国籍：</strong>ミャンマー
              <Image
                src="/images/myanmar.png"
                alt="ミャンマー"
                width={20}
                height={14}
                style={{ marginLeft: "5px", verticalAlign: "middle" }}
              />
            </p>
            <p>
              <strong>学校：</strong>
              沖縄ビジネス外語学院(webプログラミングコース)
            </p>
            <p>
              <strong>スキル：</strong>HTML / CSS / JavaScript / Java/Next.js
            </p>
            <p>
              <strong>目標：</strong>
              Web開発を通じて社会に役立つサービスを作ること
            </p>
            <p>
              <strong>好きな食べ物：</strong>シーフード(特に海老)
            </p>
          </div>
        </section>

        <section className={styles.hobbySection}>
          <h3 className={styles.subHeading}>趣味</h3>
          <div className={styles.hobbyList}>
            <p>
              <strong>旅行</strong>が趣味で、訪れた土地の文化や歴史、自然に触れることを楽しんでいます。
              特にその地域ならではの風景や人との出会いに魅力を感じており、旅を通して視野が広がる瞬間が好きです。
              また、海岸でのゴミ拾いなどの<strong>ボランティア活動</strong>にも参加し、環境保護にも関心を持って取り組んでいます。サッカー観戦も好きで、特に<strong>アーセナルFC</strong>の試合をチェックするのが日々の楽しみの一つです。
              自然・文化・スポーツを通して、日常に刺激や学びを取り入れることを大切にしています。
            </p>
            <article className={styles.hobbyItem}>
              <Image
                src="/images/golden.jpg"
                alt="サッカーの試合を見ること"
                width={400}
                height={350}
                className={styles.hobbyImage}
              />
              <p className={styles.hobbyText}>サッカーの試合を見ること</p>
            </article>
            <article className={styles.hobbyItem}>
              <Image
                src="/images/help.jpg"
                alt="ボランティア活動"
                width={150}
                height={150}
                className={styles.hobbyImage}
              />
              <p className={styles.hobbyText}>ボランティア活動</p>
            </article>
            <article className={styles.hobbyItem}>
              <Image
                src="/images/trip.jpg"
                alt="旅行"
                width={150}
                height={150}
                className={styles.hobbyImage}
              />
              <p className={styles.hobbyText}>旅行</p>
            </article>

            {/* 必要に応じてカードを追加 */}
          </div>
        </section>
      </div>
    </main>
  );
}
