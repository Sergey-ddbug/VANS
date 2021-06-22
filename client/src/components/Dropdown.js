import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'IT & software', text: 'IT & software', value: 'IT & software' },
  { key: 'Health & Fitness', text: 'Health & Fitness', value: 'Health & Fitness' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'Development', text: 'Development', value: 'Development' },
  { key: 'Marketing', text: 'Marketing', value: 'Marketing' },
  { key: 'Business', text: 'Business', value: 'Business' },
  { key: 'Photography & Video Courses', text: 'Photography & Video Courses', value: 'Photography & Video Courses' },

]

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder='Choose Category' fluid multiple selection options={options} />
)

export default DropdownExampleMultipleSelection
