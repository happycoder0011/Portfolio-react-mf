import React from "react";
import { ROUTES } from "../../constants/route.constants";
import styles from './navigationBar.module.scss';

function Navbar() {
    return (
        <div>
            {/* <!-- Navbar --> */}
            <div className={styles.navbar}>
                <ul>
                    <li>
                        <a href={ROUTES.HOME}>Home</a>
                    </li>
                    <li>
                        <a href={ROUTES.ABOUT_ME}>About Me</a>
                    </li>
                    <li>
                        <a href={ROUTES.BUILDT}>Buildt</a>
                    </li>
                    <li>
                        <a href={ROUTES.BLOG}>Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
