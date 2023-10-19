import React from "react";
import s from './ProfileInfo.module.css';

export default function ProfileInfo({self}) {
    return (
        <div className={s.profile}>
            <div className={s.pr_ph}>
                <img src={self.picture} />
            </div>
            <div className=''>
                <div className={s.pdt}>{self.name}</div>
                <ul className={s.pdl}>
                    <li>Date of Birth: 24 dec</li>
                    <li>City: Kiev</li>
                    <li>Edu: NUPESU</li>
                </ul>
            </div>
        </div>
    )
}