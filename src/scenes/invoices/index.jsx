import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Invoices = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        <Typography color={color.greenAccent[500]}>
          ${params.row.cost}
        </Typography>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: color.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: color.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: color.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: color.blueAccent[700],
          },
          "& .MuiButtonBase-root": {
            color: `${color.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
