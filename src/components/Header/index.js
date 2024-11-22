'use client'
import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const trocarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={`${styles.header} ${menuAberto ? styles.headerExpandido : ''}`}>

            <div className={`${styles.pHeaderDiv} ${menuAberto ? styles.esconderPheader : ''}`}>
                <p className={styles.pheader}>NewJeans</p>
            </div>

            <div className={styles.menuLeft}>
                <button className={styles.menuIcon} onClick={trocarMenu} style={{ transform: menuAberto ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {menuAberto ? '✖' : '☰'}
                </button>
            </div>

            <nav className={`${styles.nav} ${menuAberto ? styles.mostrarMenu : ''}`}>
                <ul className={styles.ul}>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href='/'>Home</Link>
                    </li>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href="/carreira">Carreira</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}