import styles from "./Navbar.module.scss"
import Link from 'next/link'
import { useState } from "react"
import ScrollLock from 'react-scrolllock';
import Logo from "../Logo/Logo"

const Navbar = (links) => {

    const allLinks = links.links;
    const enabledLinks = allLinks.filter(function (linkfilter) {
        return linkfilter.enabled;
    });

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }


    return (
        <div className={`${styles.header} ${hamburgerOpen ? `${styles.open}` : ""}`}>
            <div className={styles.secondaryNav}>
                <div className={styles.logo}>
                    <Link href="/"><Logo/></Link>
                </div>

                <div className={`position-absolute top-0 end-0 ${styles.navigation}`}>
                    <ul>
                        {enabledLinks.map(({ id, label, link }) => (
                            <Link key={id} href={link}>
                                {label}
                            </Link>
                        ))}
                    </ul>
                </div>

                <button className={styles.burgerBtn} onClick={toggleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ScrollLock isActive={hamburgerOpen} />
        </div>
    )
};

export default Navbar;