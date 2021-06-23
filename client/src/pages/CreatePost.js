import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { Inputs, DateTime, DropDownList } from "../components/Postname";
import API from "../lib/API";


const CreatePost = () => {

    const [formObject, setFormObject] = useState({
        postName: "",
        categoryName: "",
        dateTime: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleDateChange(value) {
        const dateTimestamp = value.toDate();
        setFormObject({ ...formObject, dateTime: dateTimestamp })
    }

    function handleCategoryChange(eky, event) {
        const value = event.currentTarget.innerText;
        setFormObject({ ...formObject, categoryName: value })
    }

    useEffect(() => {
        console.log(formObject.categoryName)
        console.log(formObject.dateTime)
        console.log(formObject.postName)
    }, [formObject])

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.postName) {
            // console.log("hello")
            API.Meetings.createMeeting({
                postName: formObject.postName,
                categoryName: formObject.categoryName,
                dateTime: formObject.dateTime
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
        <div className="wrapper">
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
                            value={formObject.categoryName}
                        />
                    </label>
                </fieldset>
                <Button
                    // disabled={!(formObject.postName && formObject.dateTime && formObject.categoryName)}
                    onClick={handleFormSubmit}
                    variant="primary">Submit</Button>
            </form>
        </div>
    )
}

export default CreatePost;