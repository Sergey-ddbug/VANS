import React, { useEffect, useState } from "react";
import API from "../lib/API";
import { Tab, Nav, Row, Col } from "react-bootstrap";

function TabExampleVerticalTab() {
  const [categories, setCategories] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    loadCategories();
    loadMeetings();
  }, []);

  function loadCategories() {
    API.Categories.getCategories()
      .then((res) => {
        console.log("hi", res);
        setCategories(res.data);
      })
      .catch((err) => console.log("ERROR", err));
  }

  function loadMeetings() {
    API.Meetings.getMeeting()
      .then((res) => setMeetings(res.data))
      .catch((err) => console.log("ERROR", err));
  }

  return (
    <div style={{ padding: 100 }}>
      <ul>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                {categories.map((item) => (
                  <Nav.Item>
                    <Nav.Link key={item.id} eventKey={item.category_name}>
                      {item.category_name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3 ">
                    <h3>Event Name</h3>
                    <p>Yoga</p>
                    <p>Host Name</p>
                    <p>Time/Date</p>
                    <button>Add</button>
                  </div>
                  <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                    <h3>Event Name</h3>
                    <p>Meditation</p>
                    <p>Host Name</p>
                    <p>Time/Date</p>
                    <button>Add</button>
                  </div>
                  <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                    <h3>Event Name</h3>
                    <p>Web Development</p>
                    <p>Host Name</p>
                    <p>Time/Date</p>
                    <button>Add</button>
                  </div>
                </Tab.Pane>
                {categories.map((item) => (
                  <Tab.Pane key={item.id} eventKey={item.category_name}>
                    <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                      <h3>Event Name</h3>
                      <p>{item.category_name}</p>
                      <p>Host Name</p>
                      <p>Time/Date</p>
                      <button>Add</button>
                    </div>
                    <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                      <h3>Event Name</h3>
                      <p>{item.category_name}</p>
                      <p>Host Name</p>
                      <p>Time/Date</p>
                      <button>Add</button>
                    </div>
                    <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                      <h3>Event Name</h3>
                      <p>{item.category_name}</p>
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
    </div>
  );
}

export default TabExampleVerticalTab;
