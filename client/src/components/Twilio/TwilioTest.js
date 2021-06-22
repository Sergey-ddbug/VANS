import React from 'react';
import './TwilioTest.css';
import VideoChat from './VideoChat';

export default function TwilioTest() {
    return (
        <div className="app">
            <header>
                <h1>Video Chat with Hooks</h1>
            </header>
            <main>
                <VideoChat />
            </main>
            <footer>
                <p>
                    Made with{' '}
                    <span role="img" aria-label="React">
                        ⚛️
          </span>{' '}
          by <a href="https://twitter.com/philnash">philnash</a>
                </p>
            </footer>
        </div>
    );
}