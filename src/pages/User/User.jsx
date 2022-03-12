import { Fragment } from 'react';

import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

// import CreateIcon from '@mui/icons-material/Create';

//// Table data in User Section
function createDataUser(name, email, role) {
  return { name, email, role };
}

const rowsUser = [
  createDataUser('Tony Nguyen', 'admin@gmail.com', 'Admin'),
  createDataUser('David Edward', 'david@gmail.com', 'Operator'),
];

const userHeader = ['Email', 'Role', 'Action'];

function User() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* Users */}
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3>User</h3>

              <Button variant='contained'>
                <AddIcon />
                ADD
              </Button>
            </div>
            <Paper sx={{ p: 2, mt: 2 }}>
              <TableContainer sx={{ flexDirection: 'column' }}>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
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
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>{row.email}</TableCell>
                        <TableCell align='left'>{row.role}</TableCell>
                        <TableCell align='left'>
                          <Fab color='secondary' aria-label='edit'>
                            <EditIcon />
                          </Fab>
                        </TableCell>
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

export default User;
