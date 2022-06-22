import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
            <a href="/" className={styles.sitetitle}>
                The last 24 Hours
            </a>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;