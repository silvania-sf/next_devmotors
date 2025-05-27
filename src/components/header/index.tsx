"use client"

import styles from './styles.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Header(){
    const [top, setTop] = useState(true)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler) //Garante que o evento é desmontado
    }, [top])

    return(
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">Dev Motors</Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="/">HOME</Link>
                        <Link href="/#servicos">SERVIÇOS</Link>
                        <Link href="/#contatos">CONTATOS</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}