import React from 'react'
import { Table } from 'semantic-ui-react';
export default function PostTable(props) {
  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Post Name</Table.HeaderCell>
            <Table.HeaderCell>Post Date</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.posts.map(post => {
            return (
              <Table.Row>
                <Table.Cell>{post.name}</Table.Cell>
                <Table.Cell>{post.date}</Table.Cell>
                <Table.Cell>{post.category}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </>
  )
}
