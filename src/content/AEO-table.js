import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { tableRowData } from './AEO-data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const AEO_table = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

  return (
    <TableContainer component={Paper} sx={{ "& th, & td": { border: "0.1rem solid rgba(0,0,0,0.1)" } }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
          <TableCell rowSpan={2}>Elements</TableCell>
          <TableCell align="left" colSpan={3}>Level / Category</TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
          <TableCell align="right">Customs Compliance</TableCell>
          <TableCell align="right">Safety & Security</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRowData.map((row) => (
          <TableRow
            key={row.rowHead}
            sx={{'& > *': { textAlign: 'center !important' }, '&:hover': { background: '#F2F2F2' } }}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           <TableCell component="th" align="right"  scope="row">{row.rowHead}</TableCell>
            <TableCell >
              {row.rowData1.map((item, index) => (
                <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body2'  sx={{ mb: '1rem', }}
                                className=''>
                                {item}</Typography>
                        </div>

              ))}
            </TableCell>
            <TableCell  scope="row">
              {row.rowData2.map((item, index) => (
                <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body2'  sx={{ mb: '1rem' }}
                                className=''>
                                {item}</Typography>
                        </div>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AEO_table