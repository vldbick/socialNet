import React from "react";
import s from './Nav.module.css';

import NavItem from "./navItem/NavItem";


export default function Nav() {
    return (
        <nav className={s.nav}>
            <div className={s.navList}>
                <NavItem to="/profile" iconSrc="/image/icon-nav/profile-icon.png" text="Profile" />
                <NavItem to="/messages" iconSrc="/image/icon-nav/mess-icon.png" text="Messages" />
                <NavItem to="/friends" iconSrc="/image/icon-nav/fr-icon.png" text="Friends" />
                <NavItem to="/music" iconSrc="/image/icon-nav/play-icon.png" text="Music" />
                <NavItem to="/news" iconSrc="/image/icon-nav/news-icon.png" text="News" />
                <NavItem to="/setting" iconSrc="/image/icon-nav/sett-icon.png" text="Setting" />
            </div>
        </nav>
    );
}
