import Link from "next/link";
import styles from "./index.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/">Home</Link>{" "}
          </li>

          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#profile">Profile</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#skill">Skill</Link>
          </li>
          <li>
            <Link href="#strengths">Strengths</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
