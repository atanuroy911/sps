import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const DVehicles = () => {
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
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'model', label: 'Model', minWidth: 100 },
        {
            id: 'user',
            label: 'User',
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
    const rows = [
        createData('Ford', 'Ecosport', 'user 1', 'GGL-883', 'P-1-S-20'),
        createData('Toyota', 'E4', 'user 2', 'GTL-883', 'P-1-S-19'),
        createData('Tesla', 'Model S', 'user 3', 'GGL-884', 'P-1-S-18'),
        createData('Cobalt', 'SS', 'user 4', 'GGL-885', 'P-2-S-14'),
        createData('BMW', 'GT', 'user 5', 'GGL-886', 'P-2-S-20'),
        createData('Ford', 'Mustang', 'guest 1', 'YGL-887', 'P-2-S-04'),
        createData('MCLaren', 'Sport', 'guest 2', 'GGL-855', 'P-3-S-07'),
        createData('Chevrolet', 'E3', 'user 7', 'GGL-823', 'P-3-S-04'),
        createData('Porsche', 'Cameron GT', 'user 19', 'GGG-134', 'P-1-S-03'),
        createData('Lamborghini', 'Sports', 'user 20', 'GGL-789', 'P-2-S-02'),
        createData('Toyota', 'Corolla', 'user 11', 'GGL-000', 'P-3-S-01'),
        
    ];

    return (
        <div>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={2}>
                                    Car
                                </TableCell>
                                <TableCell align="center" colSpan={3}>
                                    Details
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

export default DVehicles;