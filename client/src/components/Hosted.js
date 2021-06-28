import React, { useEffect, useState } from 'react';
import API from '../lib/API';
import { Tab, Row, Col } from 'react-bootstrap'


function TabExampleVerticalTab({ handleSubmit }) {
  const [hostMeetings, setHostMeetings] = useState([])


  useEffect(() => {
    loadHostMeetings()
  }, [])

  function loadHostMeetings() {
    API.Meetings.getHostMeetings()
      .then(res =>
        setHostMeetings(res.data.Meetings)
      )
      .catch(err => console.log("ERROR", err));
  };

  return (
    <div>
      <ul>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Row>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  {hostMeetings.map(item => (
                    <div key={item.id} className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                      <h3>{item.meetingName}</h3>
                      <p>{item.Category.category_name}</p>
                      <p>{item.Users[0].first_name}</p>
                      <p>{item.timeDate}</p>
                      <button onClick={(e) => handleSubmit(e, item.meetingName)}>Join</button>
                      <button>Delete</button>
                    </div>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </ul>
    </div>
  );
}

export default TabExampleVerticalTab;

