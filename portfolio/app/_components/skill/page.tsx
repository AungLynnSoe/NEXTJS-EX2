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
            <h4>HTML&CSS</h4>
            <Image src="/images/html.png" alt="ロゴ" width={80} height={60} />
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              officiis dolore temporibus optio, non similique vero assumenda
              modi accusantium, quaerat fugiat ipsa et saepe? Veritatis facere
              fuga magni consequuntur dolores!
            </p>
          </li>
          
          <li>
            <h4>JavaScript</h4>
            <Image
              src="/images/javascript.png"
              alt="ロゴ"
              width={80}
              height={60}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              eum minima! A sit aperiam impedit, quia nemo doloremque officiis
              fugiat? Facilis debitis nihil voluptatibus voluptas culpa! Facilis
              ipsa tenetur aliquid.
            </p>
          </li>
          <li>
            <h4>Java</h4>
            <Image src="/images/java.png" alt="ロゴ" width={80} height={60} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo maiores provident accusantium soluta, ipsum doloremque
              repellat recusandae molestiae veritatis esse odit est dignissimos
              illo nulla et libero laboriosam mollitia? Tempora.
            </p>
          </li>
          <li>
            <h4>Next.js</h4>
            <Image src="/images/nextjs.png" alt="ロゴ" width={80} height={60} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              assumenda totam in deserunt delectus facilis officia voluptas
              atque, sint debitis quidem ipsa laborum quod, eos, deleniti nihil
              cupiditate ipsam modi?
            </p>
          </li>

          
        </ul>
      </div>
    </main>
  );
}
