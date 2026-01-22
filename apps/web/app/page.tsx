
import styles from "./page.module.css";
import {NavBar} from "./src/component/navbar"
import {SideBar} from "./src/component/coinsSidebar"
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <SideBar/>
          </div>
  );
}
