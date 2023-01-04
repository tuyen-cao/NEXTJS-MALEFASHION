
import styles from './layout.module.css';

interface Props {
  children: React.ReactNode
}


const Layout = (props: Props) => {
  const { children } = props
  return <div className={styles.container}>{children}</div>;
}

export default Layout