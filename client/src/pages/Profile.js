import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import Added from '../components/Added';
import Hosted from '../components/Hosted';
import ProfPic from '../components/ProfPic';
const DividerExampleSection = () => (
    <Segment>
        <div as='h3'></div>
        <ProfPic />

        <Divider section />

        {/* <Welcome /> */}
        <div as='h3'>Hosted</div>
        <Hosted />

        <Divider section />

        <div as='h3'>Added</div>
        <Added />
    </Segment>
)

export default DividerExampleSection

// import _ from 'lodash'
// import React, { Component } from 'react'
// import { Divider, Tab } from 'semantic-ui-react'

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'olive',
//     'green',
//     'teal',
//     'blue',
//     'violet',
//     'purple',
//     'pink',
//     'brown',
//     'grey',
// ]

// const panes = [
//     {
//         menuItem: 'Profile',
//         render: () => <Tab.Pane attached={false}>Profile Content</Tab.Pane>,
//     },
//     {
//         menuItem: 'Added',
//         render: () => <Tab.Pane attached={false}>Added Content</Tab.Pane>,
//     },
//     {
//         menuItem: 'Hosted',
//         render: () => <Tab.Pane attached={false}>Hosted Content</Tab.Pane>,
//     },
// ]

// class TabExampleColoredInverted extends Component {
//     state = { color: colors[0] }

//     handleColorChange = (e) => this.setState({ color: e.target.value })

//     render() {
//         const { color } = this.state

//         return (
//             <div>
//                 <select onChange={this.handleColorChange}>
//                     {_.map(colors, (c) => (
//                         <option key={c} value={c}>
//                             {_.startCase(c)}
//                         </option>
//                     ))}
//                 </select>

//                 <Divider hidden />

//                 <Tab
//                     menu={{ color, inverted: true, attached: false, tabular: false }}
//                     panes={panes}
//                 />
//             </div>
//         )
//     }
// }

// export default TabExampleColoredInverted