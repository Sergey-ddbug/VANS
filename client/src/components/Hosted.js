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

  function handleIdDelete(e) {
    // e.preventDefault();
    const confirmation = window.confirm("Are you sure?");
    const meetingId = e.target.nextSibling.innerHTML;
    if (confirmation) {
      API.Meetings.deleteMeeting(meetingId);
      loadHostMeetings();
    }
  };

  return (
    <div>
      <ul>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Row>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  {hostMeetings.map(item => (
                    <div key={item.id} className="w-100 border d-flex flex-column flex-md-row justify-content-between mt-3 mb-3 pl-3 pr-3">
                      <h3>{item.meetingName}</h3>
                      <p>{item.Category.category_name}</p>
                      <p>{item.Users[0].first_name}</p>
                      <p>{item.timeDate}</p>

                      <button className="btn btn-danger btn-md justify-content-between mt-3 mb-3 pl-3 pr-3" onClick={(e) => handleSubmit(e, item)}>Join</button>
                      <button className="btn btn-danger btn-md justify-content-between mt-3 mb-3 pl-3 pr-3">Delete</button>

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

