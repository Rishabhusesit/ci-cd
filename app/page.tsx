import styles from './page.module.css'

export default function BirthdayWish() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.balloon}>🎈</div>
        <h1 className={styles.title}>Happy Birthday!</h1>
        <p className={styles.message}>
          On this special day, may your life be filled with joy, 
          laughter, and countless beautiful moments. 
          Wishing you all the happiness your heart can hold!
        </p>
        <div className={styles.decorations}>
          <span className={styles.emoji}>🎂</span>
          <span className={styles.emoji}>✨</span>
          <span className={styles.emoji}>🎁</span>
        </div>
      </div>
    </main>
  )
} 