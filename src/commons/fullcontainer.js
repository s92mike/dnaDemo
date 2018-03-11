import React from 'react'
import loremIpsum from 'lorem-ipsum'
import {
  Paper,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn
} from 'react-md'

export default () => {
  return (
    <div className='papers__container'>
      <Paper key={2}
        zDepth={2}
        raiseOnHover={false}
        className='papers__example'>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Name</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>On Hand</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Cost</TableColumn>
              <TableColumn>Preferred Vendor</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(Array(10)).map((_, i) => (
              <TableRow key={i}>
                <TableColumn>{loremIpsum({ count: 1, units: 'words' })}</TableColumn>
                <TableColumn>{loremIpsum({ count: 1, units: 'sentences' })}</TableColumn>
                <TableColumn>{loremIpsum({
                  count: 1,
                  units: 'words'
                })}</TableColumn>
                <TableColumn>{loremIpsum({ count: 1, units: 'words' })}</TableColumn>
                <TableColumn>{loremIpsum({ count: 1, units: 'words' })}</TableColumn>
                <TableColumn>{loremIpsum({ count: 1, units: 'words' })}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </DataTable>
      </Paper>
    </div>
  )
}
