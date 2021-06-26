import React, { useEffect, useState } from 'react';
// import { Tab } from 'semantic-ui-react';
// import PostTable from './PostTable';
import API from '../lib/API';
import { Tab, Nav, Row, Col } from 'react-bootstrap'


// const posts = [
//     { name: 'test1', date: 'test2', category: 'text3' },
//     { name: 'test1', date: 'test2', category: 'text3' },
//     { name: 'test1', date: 'test2', category: 'text3' }
// ]

// const panes = [
//     {
//         menuItem: 'IT & Software',
//         render: () => <Tab.Pane> <PostTable posts={posts} /> </Tab.Pane>
//     },
//     {
//         menuItem: 'Health & Fitness',
//         render: () => <Tab.Pane> Health & Fitness content</Tab.Pane>
//     },
//     {
//         menuItem: 'Graphic Design',
//         render: () => <Tab.Pane> Graphic Design content</Tab.Pane>
//     },
//     {
//         menuItem: 'Development',
//         render: () => <Tab.Pane> Development content</Tab.Pane>
//     },
//     {
//         menuItem: 'Marketing',
//         render: () => <Tab.Pane > Marketing content</Tab.Pane>
//     },
//     {
//         menuItem: 'Business',
//         render: () => <Tab.Pane> Business content</Tab.Pane>
//     },
//     {
//         menuItem: 'Photography & Video Courses',
//         render: () => <Tab.Pane> Photography & Video Courses content</Tab.Pane>
//     },
// ];
// const TabExampleVerticalTab = () => (

//     <Tab menu={{ fluid: true, vertical: true, tab: "true" }} panes={panes} />

// )

function TabExampleVerticalTab() {
    const [categories, setCategories] = useState([])
    const [meetings, setMeetings] = useState([])

    useEffect(() => {
        loadCategories();
        loadMeetings();
    }, [])

    function loadCategories() {
        API.Categories.getCategories()
            .then(res => {
                console.log("hi", res);
                setCategories(res.data)
            }
            )
            .catch(err => console.log("ERROR", err));
    };

    function loadMeetings() {
        API.Meetings.getMeeting()
            .then(res =>
                setMeetings(res.data)
            )
            .catch(err => console.log("ERROR", err));
    };

    console.log(meetings)

    return (
        <div>
            <ul>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">All</Nav.Link>
                                </Nav.Item>
                                {categories.map(item => (
                                    <Nav.Item >
                                        <Nav.Link key={item.id} eventKey={item.id}>{item.category_name}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="all">
                                    {meetings.map(item => (
                                        <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                                            <h3>{item.meetingName}</h3>
                                            <p>{item.CategoryId}</p>
                                            <p>Host Name</p>
                                            <p>{item.timeDate}</p>
                                            <button>Add</button>
                                        </div>
                                    ))}

                                </Tab.Pane>
                                {meetings.map(item => (
                                    <Tab.Pane key={item.id} eventKey={item.CategoryId}>
                                        <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                                            <h3>Event Name</h3>
                                            <p>{item.CategoryId}</p>
                                            <p>Host Name</p>
                                            <p>Time/Date</p>
                                            <button>Add</button>
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </ul>
        </div >
    );
}

export default TabExampleVerticalTab;



