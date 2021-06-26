import React, { useEffect, useState } from 'react';
import { Input } from 'semantic-ui-react';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { DropdownButton, Dropdown } from 'react-bootstrap'
import API from '../lib/API';

export function Inputs(props) {
    return (
        <Input placeholder='Enter Post Name' {...props} />
    );
}

export function DateTime(props) {
    return <Datetime {...props} />;
}

export function DropDownList(props) {
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

    const selectButton = e => {
        console.log("here")
        console.log(e)
    }

    return (
        <DropdownButton onSelect={e => selectButton(e)} id="dropdown-basic-button" title={props.titleValue}>
            {categories.map(item => (
                <Dropdown.Item data-id={item.id} {...props} key={item.category_name} text={item.category_name} value={item.category_name}>{item.category_name}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}
