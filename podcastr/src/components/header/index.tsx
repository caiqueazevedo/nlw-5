import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });
  
  return (
    <header className={styles.headerContainer}>
      <img src="logo.svg" alt="Podcastr" />
      <p className={styles.p}>O melhor para você ouvir, sempre!</p>
      <span className={styles.span}>{currentDate}</span>
    </header>
  )
}