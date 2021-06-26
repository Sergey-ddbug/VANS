import React from 'react';
import Added from '../components/Added';
import Hosted from '../components/Hosted';
import ProfPic from '../components/ProfPic';
import { Container, Row, Col } from 'react-bootstrap';


const Profile = () => (
    <Container>
        <Row>
            <Col>
                <ProfPic />
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

export default Profile;
