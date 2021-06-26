import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { Inputs, DateTime, DropDownList } from "../components/Postname";
import API from "../lib/API";


const CreatePost = () => {

    const [formObject, setFormObject] = useState({
        postName: "",
        categoryId: 0,
        dateTime: "",
    })
    const [dropDownButtonTitle, setDropDownButtonTitle] = useState("Pick a Category")

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

    function handleFormSubmit(event) {
        event.preventDefault();
        // TODO: add verification

        if (formObject.postName) {
            API.Meetings.createMeeting({
                meetingName: formObject.postName,
                CategoryId: formObject.categoryId,
                timeDate: formObject.dateTime
            })
                .then(() => setFormObject({
                    postName: "",
                    categoryName: "",
                    dateTime: ""
                }))
                // .then(() => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="text-center flex-grow-1" >
            <h1>Create Post</h1>
            <form>
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
                    // disabled={!(formObject.postName && formObject.dateTime && formObject.categoryName)}
                    onClick={handleFormSubmit}
                    variant="danger">Submit</Button>
            </form>
        </div>
    )
}

export default CreatePost;