import * as React from 'react';
import { Fragment } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//// Components
import ChartComponent from 'components/ChartComponent';
// import SimpleTable from 'components/SimpleTable';

//// For grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//// For table data in graph section
function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Meat', 44),
  createData('Vegetable', 55),
  createData('Rice', 13),
];

const tableHeader = [''];

//// Table data in Task Section
function createDataTask(title, author, progress, status) {
  return { title, author, progress, status };
}

const rowsTask = [
  createDataTask('Learn React', 'Tony Nguyen', 'Low', 'Completed'),
  createDataTask('Learn React', 'Tony Nguyen', 'Medium', 'New'),
  createDataTask('Learn React', 'Tony Nguyen', 'High', 'Inprocess'),
  createDataTask('Learn React', 'Tony Nguyen', 'High', 'Completed'),
  createDataTask('Learn React', 'Tony Nguyen', 'Medium', 'New'),
  createDataTask('Learn React', 'Tony Nguyen', 'Medium', 'Inprocess'),
];

const taskHeader = ['Author', 'Progress', 'Status'];

//// Table data in User Section
function createDataUser(email, role) {
  return { email, role };
}

const rowsUser = [
  createDataUser('admin@gmail.com', 'Admin'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('lora@gmail.com', 'Operator'),
  createDataUser('explore@gmail.com', 'Collaborator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
];

const userHeader = ['Role'];

function Dashboard() {
  return (
    <>
      <h2>Report </h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Graph */}
          <Grid item xs={4} md={12}>
            <Paper sx={{ p: 2 }}>
              <h3>Products</h3>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TableContainer sx={{ flexDirection: 'column' }}>
                  <Table
                    sx={{
                      maxWidth: 380,
                    }}
                    aria-label='simple table'
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Category</TableCell>

                        {tableHeader.map((header, headerIdx) => (
                          <Fragment key={`header-${headerIdx}`}>
                            <TableCell align='right'>{header}</TableCell>
                          </Fragment>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component='th' scope='row'>
                            {row.name}
                          </TableCell>
                          <TableCell align='right'>{row.calories}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <ChartComponent />
              </Box>
            </Paper>
            {/* <Item>xs=8</Item> */}
          </Grid>

          {/* Task */}
          <Grid item xs={7}>
            <Paper sx={{ p: 2 }}>
              <h3>Task</h3>
              <TableContainer sx={{ flexDirection: 'column' }}>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      {taskHeader.map((header, headerIdx) => (
                        <Fragment key={`header-${headerIdx}`}>
                          <TableCell align='left'>{header}</TableCell>
                        </Fragment>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsTask.map((row) => (
                      <TableRow
                        key={row.title}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {row.title}
                        </TableCell>
                        <TableCell align='left'>{row.author}</TableCell>
                        <TableCell align='left'>{row.progress}</TableCell>
                        <TableCell align='left'>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Users */}
          <Grid item xs={5}>
            <Paper sx={{ p: 2 }}>
              <h3>User</h3>
              <TableContainer sx={{ flexDirection: 'column' }}>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      {userHeader.map((header, headerIdx) => (
                        <Fragment key={`header-${headerIdx}`}>
                          <TableCell align='left'>{header}</TableCell>
                        </Fragment>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsUser.map((row) => (
                      <TableRow
                        key={row.email}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {row.email}
                        </TableCell>
                        <TableCell align='left'>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
