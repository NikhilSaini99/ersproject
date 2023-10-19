import React from "react";
import {
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import dayjs from "dayjs";
import { useState } from "react";

const TableComponent = (props) => {
  const { tableData, tableName, tableHeaders, isDownload, isDelete, isUpdate,excluseProperties,includeProperties } =
    props;

  //tableData - array
  //tableName - string
  //tableHeaders - array
  //isDownload - boolean
  //isDelete - boolean

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Get the current page's data from the 'tender' array
  const currentPageData = tableData?.slice(startIndex, endIndex) || [];

  const handlePDFDownload = (url) => {
    console.log('Downloading', url);
    window.open(url);
  };

  
  const isoToFullDate = (newDate) => {
    console.log("isoToFullDate ");
    if (dayjs(newDate).isValid()) {
      return dayjs(newDate).format("DD-MM-YYYY");
    } else {
      return ""; // Return an empty string for invalid dates or handle the error as needed
    }
  };

  console.log("table Data ", currentPageData)

  //need to re-arrange either table array or the
  // object based on headers so data comes in sync

  const rearrangedData = currentPageData?.map((item) => {
    const rearrangedItem = {};

    includeProperties.forEach((property) => {
        if (property === "date" || property === "createdAt" || property === "publishedDate" || property === "deadline") {
            rearrangedItem[property] = isoToFullDate( (item.date) || (item.createdAt));
        } else if (property === "documentUrl" || property === "fileUrl") {
            rearrangedItem[property] = item.documentUrl || item.fileUrl;
        } else {
            rearrangedItem[property] = item[property];
        }
    });

    return rearrangedItem;
});

console.log("rearrangedata",rearrangedData)

// const handlePDFDownload = ()=>{

// }

  return (
    <div>
      <TableContainer
        component={Paper}
        elevation={20}
        sx={{ "& th, & td": { border: "0.1rem solid rgba(0,0,0,0.1)" } }}
      >
        <Table aria-label="Tender-Table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#2f2483",
                "& > *": {
                  color: "white !important",
                  fontWeight: "bold !important",
                  fontSize: "1rem !important",
                  textAlign: "center !important",
                },
              }}
            >
              {tableHeaders?.map((item, key) => (
                <TableCell key={key}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rearrangedData?.map((item, key) => {
              const download = (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: "#2F2483 !important" }}
                  onClick={() => {console.log("executing download"); handlePDFDownload(item.documentUrl ?  item.documentUrl : item.fileUrl)}}
                >
                  Downlaod
                </Button>
              );

              return (
                <TableRow
                  key={key}
                  sx={{"& > *": { textAlign: "center !important" },"&:hover": { background: "#F2F2F2" }}}>
                  {Object.keys(item)?.map((rowItem) => {
                    const cellData =  rowItem.includes("fileUrl") || rowItem.includes("documentUrl")   ? download: item[rowItem];
                    // Check if cellData is empty (undefined, null, or empty string)
                    const isEmptyCell =
                      cellData === undefined ||
                      cellData === null ||
                      cellData === "";

                    // Render TableCell only if cellData is not empty
                    return isEmptyCell ? null : (
                      <TableCell key={rowItem}>{cellData}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default TableComponent;
