"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>MySite</div> */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
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
