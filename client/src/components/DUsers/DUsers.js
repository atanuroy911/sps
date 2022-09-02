import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { data } from './sample_data';


const DUsers = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const columns = [
        { id: 'first_name', label: 'First Name', minWidth: 170 },
        { id: 'last_name', label: 'Last Name', minWidth: 170 },
        {
            id: 'username',
            label: 'Username',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'phone',
            label: 'Phone',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'vehicle',
            label: 'vehicle',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'plate',
            label: 'Number Plate',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'parking',
            label: 'Parking',
            minWidth: 170,
            align: 'right'
        },
    ];
    function createData(name, model, user, plate, parking) {
        return { name, model, user, plate, parking };
    }
    const rows = data;

    return (
        <div>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={5}>
                                    User Details
                                </TableCell>
                                <TableCell align="center" colSpan={3}>
                                    Vehicle Details
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default DUsers;