import React, { useEffect, useState } from 'react';
import API from '../lib/API';
import { Tab, Row, Col } from 'react-bootstrap'


function TabExampleVerticalTab() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    loadCategories()
  }, [])

  function loadCategories() {
    API.Categories.getCategories()
      .then(res =>
        setCategories(res.data)
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
                  <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                    <h3>Event Name</h3>
                    <p>Yoga</p>
                    <p>Host Name</p>
                    <p>Time/Date</p>
                    <button>Edit</button>
                  </div>
                </Tab.Pane>
                {/* {categories.map(item => (
                  <Tab.Pane key={item.id} eventKey={item.category_name}>
                    <div className="w-100 border d-flex flex-row justify-content-between m-3 p-3">
                      <h3>Event Name</h3>
                      <p>{item.category_name}</p>
                      <p>Host Name</p>
                      <p>Time/Date</p>
                      <button>Edit</button>
                    </div>

                  </Tab.Pane>
                ))} */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </ul>
    </div>
  );
}

export default TabExampleVerticalTab;

