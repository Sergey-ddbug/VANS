import React from 'react';
import { Tab } from 'semantic-ui-react';
import PostTable from './PostTable';

const posts = [
    { name: 'test1', date: 'test2', category: 'text3' },
    { name: 'test1', date: 'test2', category: 'text3' },
    { name: 'test1', date: 'test2', category: 'text3' }
]

const panes = [
    {
        menuItem: 'IT & Software',
        render: () => <Tab.Pane> <PostTable posts={posts} /> </Tab.Pane>
    },
    {
        menuItem: 'Health & Fitness',
        render: () => <Tab.Pane> Health & Fitness content</Tab.Pane>
    },
    {
        menuItem: 'Graphic Design',
        render: () => <Tab.Pane> Graphic Design content</Tab.Pane>
    },
    {
        menuItem: 'Development',
        render: () => <Tab.Pane> Development content</Tab.Pane>
    },
    {
        menuItem: 'Marketing',
        render: () => <Tab.Pane > Marketing content</Tab.Pane>
    },
    {
        menuItem: 'Business',
        render: () => <Tab.Pane> Business content</Tab.Pane>
    },
    {
        menuItem: 'Photography & Video Courses',
        render: () => <Tab.Pane> Photography & Video Courses content</Tab.Pane>
    },
];
const TabExampleVerticalTab = () => (

    <Tab menu={{ fluid: true, vertical: true, tab: "true" }} panes={panes} />

)
export default TabExampleVerticalTab;



