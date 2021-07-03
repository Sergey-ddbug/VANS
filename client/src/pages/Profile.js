import React, { useState, useCallback, useEffect } from 'react';
import Added from '../components/Added';
import Hosted from '../components/Hosted';
import ProfPic from '../components/ProfPic';
import { Container, Row, Col } from 'react-bootstrap';
import { useStoreContext } from '../store/store';
import CloudinaryImage from '../components/CloudinaryImage';
import Video from "twilio-video";
import Room from "../components/Twilio/Room";
import '../pages/assets/Login.css';
// import TwilioTest from "../components/Twilio/TwilioTest";


const Profile = () => {

    const [state, dispatch] = useStoreContext();

    const [roomName, setRoomName] = useState("");
    const [room, setRoom] = useState(null);
    const [connecting, setConnecting] = useState(false);

    const handleSubmit = useCallback(
        async (event, name) => {
            event.preventDefault();
            setConnecting(true);
            const data = await fetch("/api/video/token", {
                method: "POST",
                body: JSON.stringify({
                    room: name,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            setRoomName(name)

            Video.connect(data.token, {
                name: name,
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
        <Container className="profContainer">
            <Row>
                <Col className="box1 img-rounded">
                    {state.user.profileImgPublicId ?
                        <CloudinaryImage
                            publicId={state.user.profileImgPublicId}
                            width="300"
                            crop="scale"
                            border="rounded"



                        />
                        :
                        <ProfPic state={state} dispatch={dispatch} />
                    }
                </Col>

            </Row>
            {/* <Row>
                <Col
                    className="userinfo">VIKA
                </Col>
            </Row> */}

            <Row>
                <Col className="box2">
                    <div className="text-lg">Hosted</div>
                    <Hosted
                        handleSubmit={handleSubmit}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="box2">
                    <div className="text-lg">Added</div>
                    <Added className="testbox"
                        handleSubmit={handleSubmit}

                    />
                </Col>
            </Row>
            <Row>
                <Col className="box2">
                    {/* <div as='h2'>Video Chat</div> */}
                    {room && <Room roomName={roomName} room={room} handleLogout={handleLogout} />}
                    {/* {room && <TwilioTest roomName={roomName} room={room} />} */}

                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
