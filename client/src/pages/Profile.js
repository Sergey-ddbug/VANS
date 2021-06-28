import React from 'react';
import Added from '../components/Added';
import Hosted from '../components/Hosted';
import ProfPic from '../components/ProfPic';
import { Container, Row, Col } from 'react-bootstrap';
import { useStoreContext } from '../store/store';
import CloudinaryImage from '../components/CloudinaryImage'

const Profile = () => {

    const [state, dispatch] = useStoreContext();


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

                        />
                        :
                        <ProfPic state={state} dispatch={dispatch} />
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <div as='h3'>Hosted</div>
                    <Hosted />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div as='h3'>Added</div>
                    <Added />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
