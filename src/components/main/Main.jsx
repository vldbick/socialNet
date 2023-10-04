import React from "react";
import './Main.css';

export default function Main() {
    return (
        <main className='content'>
            <div className='img-up'>
                <img src='https://bogatyr.club/uploads/posts/2023-03/thumbs/1679718702_bogatyr-club-p-gori-peizazh-vektor-foni-instagram-57.jpg' />
            </div>
            <div className='m-prof'>
                <div>
                    <img src='https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj' />
                </div>
                <div className='mp-desc'>
                    <div className='mpd-t'>Khomenko Vladyslav</div>
                    <ul className='mpd-d'>
                        <li>Date of Birth: 24 dec</li>
                        <li>City: Kiev</li>
                        <li>Edu: NUPESU</li>
                    </ul>
                </div>
            </div>
            <div className='my-post'>
                <div>My posts</div>
                <div>input + button</div>
            </div>
            <div> comments</div>
        </main>
    )
}