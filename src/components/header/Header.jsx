import React from "react";
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png' />
            </div>
        </header>
    )
}