
import React from 'react';
import { Button } from 'react-bootstrap'
import Datetime from '../components/Datetime';
import Dropdown from '../components/Dropdown';
import Postname from '../components/Postname';
const CreatePost = () => {

    return (
        <div className="wrapper">
            <h1>Create Post</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Post Name</p>
                        <Postname />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Post Date</p>
                        <Datetime />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Category</p>
                        <Dropdown />
                    </label>
                </fieldset>
                <Button variant="primary">Submit</Button>
            </form>
        </div>
    )
}

export default CreatePost;