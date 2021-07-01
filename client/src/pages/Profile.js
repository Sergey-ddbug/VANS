import React, { useState, useCallback, useEffect } from 'react';
import Added from '../components/Added';
import Hosted from '../components/Hosted';
import ProfPic from '../components/ProfPic';
import { Container, Row, Col } from 'react-bootstrap';
import { useStoreContext } from '../store/store';
import CloudinaryImage from '../components/CloudinaryImage';
import Video from "twilio-video";
import Room from "../components/Twilio/Room";
// import TwilioTest from "../components/Twilio/TwilioTest";


const Profile = () => {

    const [state, dispatch] = useStoreContext();

    const [roomName, setRoomName] = useState("");
    const [room, setRoom] = useState(null);
    const [connecting, setConnecting] = useState(false);

    const handleUserSubmit = useCallback(
        async (event, item) => {
            event.preventDefault();
            setConnecting(true);
            const data = await fetch("/api/video/participant", {
                method: "POST",
                body: JSON.stringify({
                    room: item.meetingName,
                    roomId: item.id
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            setRoomName(item.meetingName)

            Video.connect(data.token, {
                name: item.meetingName,
            })
                .then((room) => {
                    setConnecting(false);
                    setRoom(room);
                })
                .catch((err) => {
                    console.error(err);
                    setConnecting(false);
                });
        },
        [roomName]
    );

    const handleHostSubmit = useCallback(
        async (event, item) => {
            event.preventDefault();
            setConnecting(true);
            const data = await fetch("/api/video/begin", {
                method: "POST",
                body: JSON.stringify({
                    room: item.meetingName,
                    roomId: item.id
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            setRoomName(item.meetingName)

            Video.connect(data.token, {
                name: item.meetingName,
            })
                .then((room) => {
                    setConnecting(false);
                    setRoom(room);
                })
                .catch((err) => {
                    console.error(err);
                    setConnecting(false);
                });
        },
        [roomName]
    );

    const handleLogout = useCallback(() => {
        setRoom((prevRoom) => {
            if (prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub) => {
                    trackPub.track.stop();
                });
                prevRoom.disconnect();
            }
            return null;
        });
    }, []);

    useEffect(() => {
        if (room) {
            const tidyUp = (event) => {
                if (event.persisted) {
                    return;
                }
                if (room) {
                    handleLogout();
                }
            };
            window.addEventListener("pagehide", tidyUp);
            window.addEventListener("beforeunload", tidyUp);
            return () => {
                window.removeEventListener("pagehide", tidyUp);
                window.removeEventListener("beforeunload", tidyUp);
            };
        }
    }, [room, handleLogout]);


    //TODO: handle case for if no hosted meetings or added meetings--- terinary oporator!!!

    return (
        <Container>
            <Row>
                <Col>
                    {state.user.profileImgPublicId ?
                        <CloudinaryImage
                            publicId={state.user.profileImgPublicId}
                            width="300"
                            crop="scale"
                            state={state}
                            dispatch={dispatch}
                        />
                        :
                        <ProfPic state={state} dispatch={dispatch} />
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <div as='h3'>Hosted</div>
                    <Hosted
                        handleSubmit={handleHostSubmit}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div as='h3'>Added</div>
                    <Added
                        handleSubmit={handleUserSubmit}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div as='h3'>Video Chat</div>
                    {room && <Room roomName={roomName} room={room} handleLogout={handleLogout} />}
                    {/* {room && <TwilioTest roomName={roomName} room={room} />} */}

                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
