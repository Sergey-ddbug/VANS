import React, { useEffect, useState } from "react";
import API from "../lib/API";
import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import { format } from "date-fns";


function TabExampleVerticalTab() {
    const [categories, setCategories] = useState([]);
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        loadCategories();
        loadMeetings();
    }, []);

    function loadCategories() {
        API.Categories.getCategories()
            .then(res => {
                setCategories(res.data)
            }
            )
            .catch(err => console.log("ERROR", err));
    };

    function loadMeetings() {
        API.Meetings.getMeeting()
            .then((res) => {
                console.log(res.data);
                setMeetings(res.data);
            })
            .catch((err) => console.log("ERROR", err));
    }

    function formatDate(date1) {
        var date = new Date(date1);
        var formattedDate = format(date, "MMM d H:mma");
        return formattedDate
    }



    function handleJoinBtnClick(event) {
        const meetingId = event.target.parentNode.dataset.id;
        API.Meetings.addMeetingsJoin({
            MeetingId: meetingId,
        })
            .then(() => loadMeetings())
            .catch(err => console.log("ERROR", err));
    }

    // function handleRemoveMeeting(event) {
    //     const meetingId = event.target.parentNode.dataset.id;
    //     API.Meetings.removeMeeting({
    //         id: meetingId,
    //     })
    //         .then(() => loadMeetings())
    //         .catch(err => console.log("ERROR", err));
    // }


    return (
        // <div className="test3">
        <Container className="categoriesConteiner test3">


            <Tab.Container id="left-tabs-example" defaultActiveKey="all" >
                <Row>
                    <Col md={3} className="w-100 border d-flex flex-column flex-md-row justify-content-between mt-3 mb-3 pl-3 pr-3">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="all">All</Nav.Link>
                            </Nav.Item>
                            {categories.map(item => (
                                <Nav.Item  >
                                    <Nav.Link key={item.id} eventKey={item.id}>{item.category_name}</Nav.Link>
                                </Nav.Item>
                            ))}


                        </Nav>
                    </Col>

                    <Col md={9} >
                        <Tab.Content >
                            <Tab.Pane eventKey="all">
                                {
                                    (meetings.length > 0)
                                        ?
                                        (meetings.map(item => (
                                            <div data-id={item.id} className="w-100 border d-flex flex-column flex-md-row justify-content-between mt-3 mb-3 pl-3 pr-3">
                                                <h3>{item.meetingName}</h3>
                                                <p>{item.Category.category_name}</p>
                                                <p>{item.Users[0].first_name}</p>
                                                <p>{formatDate(item.timeDate)}</p>


                                                {item.isUserMeeting ? (
                                                    <button
                                                        // onClick={handleRemoveMeeting}
                                                        className="btn btn-danger btn-md mb-2"
                                                    >
                                                        Remove
                                                    </button>) : (
                                                        <button
                                                            onClick={handleJoinBtnClick}
                                                            className="btn btn-danger btn-md mb-2"
                                                        >
                                                            Add
                                                        </button>
                                                    )}
                                            </div>
                                        )))
                                        :
                                        (<h2>Nothing to see here</h2>)
                                }
                            </Tab.Pane>
                            {meetings.map(item => (
                                //TODO: need to have code to check database to see if user is already linked to the meeting and if so ---return
                                <Tab.Pane key={item.id} eventKey={item.CategoryId}>
                                    <div data-id={item.id} className="w-100 border d-flex flex-column flex-md-row justify-content-between mt-3 mb-3 pl-3 pr-3">
                                        <h3>{item.meetingName}</h3>
                                        <p>{item.Category.category_name}</p>
                                        <p>{item.Users[0].first_name}</p>
                                        <p>{formatDate(item.timeDate)}</p>
                                        {item.isUserMeeting
                                            ?
                                            (
                                                <button onClick={() => console.log('DO REMOVE')} className="btn btn-danger btn-md">
                                                    Remove
                                                </button>
                                            )
                                            :
                                            (
                                                <button onClick={handleJoinBtnClick} className="btn btn-danger btn-md">
                                                    Add
                                                </button>
                                            )
                                        }
                                    </div>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        // {/* </div > */ }
    );

}

export default TabExampleVerticalTab;
