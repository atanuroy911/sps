import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { SERVER_URL } from '../../variables/variables';
import { useParams } from 'react-router-dom';

const DParkingLot = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(SERVER_URL + '/sps/parking-data/get/' + id)
            .then(function (response) {
                // handle success
                // console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const columns = [
        {
            id: 'slot_id',
            label: 'Parking Slot ID',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'status',
            label: 'Status',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'number_plate',
            label: 'Number Plate',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'username',
            label: 'Username',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'pay_status',
            label: 'Pay Status',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'timestamp',
            label: 'Last Updated',
            minWidth: 170,
            align: 'right'
        },
    ];
    function createData(name, model, user, plate, parking) {
        return { name, model, user, plate, parking };
    }
    const rows = [];


    return (
        <div>
            <h1 className='text-2xl text-black font-semibold mb-4'>Parking Lot Number : {id}</h1>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Parking Details
                                </TableCell>
                                <TableCell align="center" colSpan={3}>
                                    Vehicle/User Details
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
                            {data.map ? data
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
                                }) :
                                <TableRow>
                                    <TableCell className='text-center' colSpan={6} align={'center'}>No Data Found</TableCell>
                                </TableRow>}
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

export default DParkingLot;