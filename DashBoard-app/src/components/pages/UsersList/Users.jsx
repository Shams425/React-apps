import React from "react";
import "./users.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../../Shared/dummyData";
import { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {} from "../../../assets/img/profile.jpg";

export default function DataTable({ dataRow, dataCol }) {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "user",
      headerName: "username",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userList">
            <img src={params.row.Avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 140,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
