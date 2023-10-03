import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Setting</a>
        </div>
      </nav>
      <main className='content'>
        <div className='img-up'>
          <img src='https://bogatyr.club/uploads/posts/2023-03/thumbs/1679718702_bogatyr-club-p-gori-peizazh-vektor-foni-instagram-57.jpg'/>
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

    </div>
  );
}

export default App;
