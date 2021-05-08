import ExternalLink from 'components/ExternalLink'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className="container text-center">
      <small className={styles.copyright}>Copyright © {new Date().getFullYear()}
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
