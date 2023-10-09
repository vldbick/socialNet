import React from "react";
import s from './Nav.module.css';
import Ads from '../ads/Ads'

export default function Nav() {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/profile-icon.png" alt="" />
                    </div>
                    <a href="#">Profile</a></li>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/mess-icon.png" alt="" />
                    </div>
                    <a href="#">Messages</a></li>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/fr-icon.png" alt="" />
                    </div>
                    <a href="#">Friends</a></li>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/play-icon.png" alt="" />
                    </div>
                    <a href="#">Music</a></li>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/news-icon.png" alt="" />
                    </div>
                    <a href="#">News</a></li>
                <li>
                    <div className={s.nav_icon}>
                        <img src="/image/icon-nav/sett-icon.png" alt="" />
                    </div>
                    <a href="#">Setting</a></li>
            </ul>

        </nav>
    )
}