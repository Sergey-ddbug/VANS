import React, { useCallback, useEffect, useState } from 'react';
import './TwilioTest.css';
import VideoChat from './VideoChat';
import Room from './Room';

export default function TwilioTest({ roomName, room }) {

    // const [rooms, setRooms] = useState(null);
    // const [roomss, setRoom] = useState(null);

    // const handleLogout = useCallback(() => {
    //     setRooms((prevRooms) => {
    //         if (prevRooms) {
    //             prevRooms.localParticipant.tracks.forEach((trackPub) => {
    //                 trackPub.track.stop();
    //             });
    //             prevRooms.disconnect();
    //         }
    //         return null;
    //     });
    // }, []);

    // useEffect(() => {
    //     if (room) {
    //         const tidyUp = (event) => {
    //             if (event.persisted) {
    //                 return;
    //             }
    //             if (room) {
    //                 handleLogout();
    //             }
    //         };
    //         window.addEventListener("pagehide", tidyUp);
    //         window.addEventListener("beforeunload", tidyUp);
    //         return () => {
    //             window.removeEventListener("pagehide", tidyUp);
    //             window.removeEventListener("beforeunload", tidyUp);
    //         };
    //     }
    // }, [room, handleLogout]);

    return (
        <div className="app">
            <header>
                <h1>Video Chat with Hooks</h1>
            </header>
            <main>
                {/* <VideoChat /> */}
                {/* <Room roomName={roomName} room={room} handleLogout={handleLogout} /> */}
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