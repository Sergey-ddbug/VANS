import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Inputs, DateTime, DropDownList } from "../components/Postname";
import { useHistory } from 'react-router-dom';
import API from "../lib/API";
import '../pages/assets/Login.css';
// import { Container, Row, Col } from 'react-bootstrap';


const CreatePost = () => {
    const historty = useHistory()
    const [formObject, setFormObject] = useState({
        postName: "",
        categoryId: "",
        dateTime: "",
    })
    const [dropDownButtonTitle, setDropDownButtonTitle] = useState("Pick a Category")
    const [errMsg, setErrMsg] = useState(null);
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleDateChange(value) {
        const dateTimestamp = value.toDate();
        setFormObject({ ...formObject, dateTime: dateTimestamp })
    }

    function handleCategoryChange(eky, event) {
        const value = event.currentTarget.dataset.id;
        setDropDownButtonTitle(event.currentTarget.text)
        setFormObject({ ...formObject, categoryId: value })
    }

    useEffect(() => {
        console.log(formObject.categoryId)
        console.log(formObject.dateTime)
        console.log(formObject.postName)
    }, [formObject])

    async function handleFormSubmit(event) {
        event.preventDefault();
        // TODO: add verification
        try {
            if (formObject.postName.length < 1 || formObject.dateTime.length < 1 || formObject.dateTime.length < 1) {
                setErrMsg("You must fill out all form fields");
                return
            }
            const meetingData = await API.Meetings.createMeeting({
                meetingName: formObject.postName,
                CategoryId: formObject.categoryId,
                timeDate: formObject.dateTime
            })

            setFormObject({
                postName: "",
                categoryId: "",
                dateTime: ""
            })

            historty.push('/profile');

        } catch (err) {
            console.log(err);
            setErrMsg(err.message)
        }

    };

    return (
        <Container className="flex-grow-1 postbox">
            <Row>
                <Col>
                    <h1>Create Post</h1>
                    {errMsg && <p style={{ color: 'red' }}> {errMsg}</p>}
                    <form className="postbox2">
                        <fieldset>
                            <label>
                                <p>Post Name</p>
                                <Inputs
                                    onChange={handleInputChange}
                                    name="postName"
                                    value={formObject.postName}
                                />
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                                <p>Post Date</p>
                                <DateTime
                                    onChange={handleDateChange}
                                    name="dateTime"
                                    value={formObject.dateTime}
                                />
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                                <p>Category</p>
                                <DropDownList
                                    onSelect={handleCategoryChange}
                                    name="categoryName"
                                    value={formObject.categoryId}
                                    titleValue={dropDownButtonTitle}
                                />
                            </label>
                        </fieldset>
                        <Button

                            active={!(formObject.postName && formObject.dateTime && formObject.categoryName)}
                            onClick={handleFormSubmit}
                            variant="danger">Submit</Button>

                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreatePost;