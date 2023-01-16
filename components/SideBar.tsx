import React from 'react'
import styles from "../styles/Sidebar.module.css";
import IconMoleculeCo2 from './Icons/CarbonIcon';
import Icon184PowerCord from './Icons/ConsIcon';
import IconSolarPowerVariantOutline from './Icons/GenIcon';
import IconBxEuro from './Icons/PriceIcon';

function SideBar() {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navbarnav}>
      <li className={styles.navitem}>
        <a href="#" className={styles.navlink}>
        <div className={styles.co2}> <b>CO<sub>2</sub></b></div>
          <span className={styles.linktext}>Carbon Intensity</span>
        </a>
      </li>

      <li className={styles.navitem}>
        <a href="#" className={styles.navlink}>
        <div className={styles.ico}><IconSolarPowerVariantOutline/></div>
          <span className={styles.linktext}>Electricity Generation</span>
        </a>
      </li>

      <li className={styles.navitem}>
        <a href="#" className={styles.navlink}>
            <div className={styles.ico}><Icon184PowerCord/></div>
          <span className={styles.linktext}>Electricity Consumption</span>
        </a>
      </li>
      <li className={styles.navitem}>
        <a href="#" className={styles.navlink}>
        <div className={styles.ico}><IconBxEuro/> </div>
          <span className={styles.linktext}>Electricity Prices</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default SideBar