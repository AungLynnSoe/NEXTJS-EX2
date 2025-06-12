import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main id="strengths" className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      {/* <p className={styles.text}>
        Work や Skill
        がまだ少ない場合は、ここで自分の「強み」を大きくアピールしましょう。
      </p> */}

      {/* 聞く力 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>聞く力</h3>
        <p className={styles.strengthText}>
          相手の話を最後までよく聞き、相手が本当に伝えたいポイントを引き出すことが得意です。
          よく「聞き上手だね」と言われます。
        </p>
      </section>

      {/* 論理的思考 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>コツコツ努力できること</h3>
        <p className={styles.strengthText}>
          私は、一気に何かをやるのは得意ではありません。でも、毎日少しずつでも続けることができます。
          難しいことに出会っても「わからないから、今日は少しだけ調べてみよう」と思って、あきらめずに向き合っています。
        </p>
      </section>

     

      
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>優しさ</h3>
        <p className={styles.strengthText}>
          私は人の気持ちを大事にしています。
          話しかけるのが少し苦手なときもありますが、困っている人を見たら、そっと助けたり、声をかけたりすることができます。
          誰かの役に立てたときに、すごくうれしくなります。
        </p>
      </section>
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>時間と約束を大切にする</h3>
        <p className={styles.strengthText}>
          人との約束や提出期限はしっかり守るようにしています。時間を守ることは相手への信頼につながると考えており、自分との約束（毎日の勉強など）も大事にしています。
          小さな積み重ねが、長く続く力になると思っています。
        </p>
      </section>
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>計画的に行動する力</h3>
        <p className={styles.strengthText}>
          (今日は何時までに何をやるか)を自分で決めて、日々の学習や課題に取り組んでいます。
          予定を立てることで無理なく継続でき、やるべきことを後回しにせず、着実に進めることができます。
        </p>
      </section>
    </main>
  );
}
