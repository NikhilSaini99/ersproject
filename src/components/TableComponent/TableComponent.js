import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import React from "react";
import dayjs from "dayjs";
import useDownload from "@/hooks/useDownload";
import { useState } from "react";

const TableComponent = (props) => {
  const {downloadFile, isDownloading, progress} = useDownload();
  const {
    tableData,
    tableName,
    tableHeaders,
    isDownload,
    isDelete,
    isUpdate,
    excluseProperties,
    includeProperties,
    isGap = false
  } = props;

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

  const handlePDFDownload = (url, docName) => {
    window.open(url);
    downloadFile(url, docName || "Document")
  };

  const isoToFullDate = (newDate) => {
    if (dayjs(newDate).isValid()) {
      return dayjs(newDate).format("DD-MM-YYYY");
    } else {
      return ""; // Return an empty string for invalid dates or handle the error as needed
    }
  };

  function convertKbToMB(fileSize) {
    const fileSizeInMB = (Number(fileSize.replace("kb", "")) / 1024).toFixed(2);
    return `${fileSizeInMB}mb`;
  }

  const rearrangedData = currentPageData?.map((item) => {
    const rearrangedItem = {};

    includeProperties.forEach((property) => {
      if (
        property === "date" ||
        property === "createdAt" ||
        property === "publishedDate" ||
        property === "deadline"
      ) {
        rearrangedItem[property] = isoToFullDate(property === "deadline" ? item.deadline : item.date || item.createdAt);
      } else if (property === "documentUrl" || property === "fileUrl") {
        rearrangedItem[property] = item.documentUrl || item.fileUrl;
      } else if (property === "fileSize") {
        rearrangedItem[property] = convertKbToMB(item.fileSize);
      } else if(property === "documentName"){
        rearrangedItem[property] = item.documentName || item.tenderName
      } else {
        rearrangedItem[property] = item[property];
      }
    });

    return rearrangedItem;
  });
  console.log("rearrangedData", rearrangedData)
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
                },
              }}
            >
              {tableHeaders?.map((item, key) => (
                <TableCell
                  sx={{ textAlign: "center !important" }}
                  key={key}
                  style={
                    item === 'Title' || item === 'Reference'
                      ? { minWidth: '215px', whiteSpace: 'nowrap' }
                      : item === 'Deadline' || item === 'Published' || item === 'Date' || item === 'Notice'
                        ? { minWidth: '150px', whiteSpace: 'nowrap' }
                        : { whiteSpace: 'nowrap' }
                  }>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rearrangedData?.map((item, key) => {
              const download = (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2F2483 !important",
                    '&:hover': {
                      backgroundColor: "#f4c402 !important", color: "#000000"
                    }
                  }}
                  onClick={() => {
                    handlePDFDownload(
                      item.documentUrl ? item.documentUrl : item.fileUrl, item.documentName
                    );
                  }}
                >
                  Download
                </Button>
              );

              return (
                <TableRow
                  key={key}
                  sx={{
                    "& > *": { textAlign: "left !important" },
                    "&:hover": { background: "#F2F2F2" },
                  }}
                >
                  {Object.keys(item)?.map((rowItem) => {
                    const cellData =
                      rowItem.includes("fileUrl") ||
                        rowItem.includes("documentUrl")
                        ? download
                        : item[rowItem];
                    // Check if cellData is empty (undefined, null, or empty string)
                    const isEmptyCell =
                      cellData === undefined ||
                      cellData === null ||
                      cellData === "";

                    // Render TableCell only if cellData is not empty
                    return isEmptyCell ? null : (
                      <TableCell key={rowItem} sx={{ padding: "0.7rem !important", }}
                        style={
                          item === 'Title'
                            ? { textAlign: "left" }
                            : {}}>{cellData}</TableCell>)
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
          labelRowsPerPage="Rows Per Page"
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
              getContentAnchorEl: null,
            },
          }}
        />
      </TableContainer>
    </div>
  );
};

export default TableComponent;
