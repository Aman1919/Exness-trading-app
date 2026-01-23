
import styles from "./page.module.css";
import {NavBar} from "../components/navbar"
import {SideBar} from "../components/coinsSidebar"
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <SideBar/>
          </div>
  );
}
