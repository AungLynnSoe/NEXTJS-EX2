import styles from "./page.module.css";
import Image from "next/image";
import { getskillsList } from "@/app/_libs/microcms";

export default async function SkillPage() {
  const data =await getskillsList();
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
          {data.contents.map((skill)=>(
          <li key={skill.id}>
            <h4>{skill.name}</h4>
            <Image src={skill.image.url} alt="" width={80} height={60} />
            <p>
              {skill.text}
            </p>
          </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
