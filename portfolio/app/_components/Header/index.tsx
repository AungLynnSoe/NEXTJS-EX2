"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="#about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="#profile" onClick={closeMenu}>Profile</Link>
          </li>
          <li>
            <Link href="#work" onClick={closeMenu}>Work</Link>
          </li>
          <li>
            <Link href="#skill" onClick={closeMenu}>Skill</Link>
          </li>
          <li>
            <Link href="#strengths" onClick={closeMenu}>Strengths</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
