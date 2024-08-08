import { useState, useEffect } from 'react'
import axios from 'axios';
import { Box, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, Alert }
    from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import Demo from './Demo'

const ViewData = (data) => {

    const [check, setCheck] = useState(false);
    const handleCheck = () => setCheck(!check);

    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);

    const [openSnack, setOpenSnack] = useState(false);

    const handleEdit = (data) => {
        console.log(data);
    }
    const handleDelete = (id) => {
        axios.delete(data.props[1]+"/"+id)
            .then(response => {
                if(response.data === true){
                    setOpenSnack(true);
                    handleCheck();
                }
            })
            .catch(error => {
                alert('Error');
                console.log(error);
            });
    }
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnack(false);
    };

    useEffect(() => {
        axios.get(data.props[1])
            .then(response => {
                setRows(response.data);
                setLoading(false);
            })
            .catch(error => {
                alert('Error');
                setRows([]);
                console.log(error);
                setLoading(false);
            });
    }, [data.props[0], check]);

    useEffect(() => {
        const temp = Object.keys((rows.length > 0) ? rows[0] : {});
        setColumns(temp);
    }, [rows]);


    const [addPage, setAddPage] = useState(false);
    const addProject = () => setAddPage(true);

    if (loading) return <div>Loading...</div>;
    if (rows.length === 0) return <h1 style={{ "textAlign": "center" }}>Data Not Found!</h1>;
    if (addPage) {
        return data.props[2];
    }

    return (
        <Box sx={{
            height: `calc(100vh - 80px)`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            overflow: 'hidden'
        }}>
            <Box sx={{
                height: '50px',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '10px',
                borderRadius: '4px',
            }}>
                <Typography sx={{ fontSize: '18px' }}>{data.props[0]} Details</Typography>
                <Button variant='contained' onClick={addProject}>Add record</Button>
            </Box>
            <Box sx={{
                height: `calc(100vh - 135px)`,
                // overflow: 'hidden',
                // '&::-webkit-scrollbar': {
                //     display: 'none',
                // },
                // '-ms-overflow-style': 'none',
                // 'scrollbar-width': 'none',
                // padding: 1,
                backgroundColor: '#fff',
                borderRadius: '4px'
            }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ height: `calc(100vh - 135px)`, }}>
                        <Table stickyHeader>
                            <TableHead >
                                <TableRow>
                                    {columns.filter((column, index) => index !== 0)
                                        .map((column, index) => (
                                            <TableCell key={index} align='center'>{column}</TableCell>
                                        ))}
                                    <TableCell align='center' sx={{
                                        position: 'sticky',
                                        right: 0,
                                        zIndex: '0.5',
                                        backgroundColor: '#fff',
                                    }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, rowind) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={rowind} >
                                        {columns.filter((column, index) => index !== 0)
                                            .map((column, colind) => (
                                                <TableCell key={rowind + "" + colind}>{String(row[column])}</TableCell>
                                            ))}
                                        <TableCell align='center' sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '125px',
                                            position: 'sticky',
                                            right: 0,
                                            zIndex: 1,
                                            backgroundColor: '#fff',
                                            gap: 2
                                        }}>
                                            <Button variant="contained" size='small' startIcon={<EditIcon />} 
                                                onClick={() => handleEdit(row.id)}>Edit</Button>
                                            <Button variant="contained" size='small' startIcon={<DeleteIcon />} 
                                                onClick={() => handleDelete(row.id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                open={openSnack} autoHideDuration={5000} 
                onClose={handleSnackClose}>
                <Alert
                    onClose={handleSnackClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Deleted Successfully
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default ViewData;
