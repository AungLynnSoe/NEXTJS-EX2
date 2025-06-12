// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import Header from "./_components/Header";
import AboutPage from "./_components/about";
import About from "./_components/about";
import Profile from "./_components/profile";
import SkillPage from "./_components/skill/page";
import WorkPage from "./_components/work/page";
import StrengthsPage from "./_components/strengths/page";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.topImage}></div>
        <div className={styles.fake}>
          <h1>ハイサイ</h1>
          <p className={styles.fakeParagraph}>
            このサイトは、私が学んでいるHTML、CSS、JavaScriptを使ったWebサイトの制作に取り組んでおり、最近はNext.jsを使ったポートフォリオの作成にも挑戦しています。
            そしてそれらを活かして制作した作品を紹介するためのポートフォリオサイトです。
          </p>
        </div>
      </div>

      <About />
      <Profile />

      <WorkPage />
      <SkillPage />
      <StrengthsPage />

      <footer>
        <p className={styles.cr}>
          &copy; 2025 my portfilo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
