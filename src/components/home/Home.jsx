import styles from './home.module.css'
import React from 'react'

export default function Home({children}) {

  return (

    <main className={styles.main}>
      <section>
        {/* Aqui va lo de la parte arriba */}
      </section>

      {/* Header */}
      <section> 
        {children}
      </section>
    </main>
  )
}
