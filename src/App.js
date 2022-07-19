import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

let a = 1;

const columns = [
  { field: '_id', headerName: 'ID', width: 70, hide: true },
  { field: 'title', headerName: 'Title', width: 400 },
  { field: 'platform', headerName: 'Platform', width: 250 },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 200,
  },
  { field: 'genre', headerName: 'Genre', width: 200 },
  {
    field: 'editors_choice',
    headerName: 'Editors choice',
    width: 320,
  },
];

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json'
    )
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <h1 align="center">Game List</h1>

      <DataGrid
        getRowId={() => a++}
        rows={data}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
