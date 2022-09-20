import styles from './Header.module.css'
import igniteLogo from '../../assets/header/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong className={styles.title}>Ignite Feed</strong>
    </header>
  )
}
