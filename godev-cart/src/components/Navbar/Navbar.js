import { useState } from 'react'
import styles from './Navbar.module.css'
import { FaShoppingCart, FaSearch, FaBars, FaUser } from 'react-icons/fa'

function Navbar() {
  const [active, setActive] = useState(styles.nav_list)
  const navToggle = () => {
    setActive(!active)
    console.log('olha eu aqui', active)
  }

  return (
    <>
      <header>
        <nav>
          <a to="/" className={styles.logo}>
            <b>COZA</b> STORE
          </a>
          <ul className={active ? styles.nav_list.active : styles.nav_list}>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/">Shop</a>
            </li>
            <li>
              <a to="/">Features</a>
            </li>
            <li>
              <a to="/">Blog</a>
            </li>
            <li>
              <a to="/">About</a>
            </li>
            <li>
              <a to="/">Contact</a>
            </li>
          </ul>
          <ul className={styles.nav_list2}>
            <li>
              <a to="/">
                <FaUser />
              </a>
            </li>
            <li>
              <a to="/">
                <FaSearch />
              </a>
            </li>
            <li className={styles.li2}>
              <a to="/">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
          <div className={styles.mobile_menu}>
            <FaBars onClick={navToggle} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
