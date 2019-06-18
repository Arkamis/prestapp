import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from './Modal'
import Title from './Title';





// Generate Order Data
function createData(id, id_cobrador, deudores, cantidad, cantidadRest, pagos ) {
    return { id, id_cobrador, deudores, cantidad, cantidadRest,  pagos };
}

const rows = [
    createData(0, 'Carlos Lopez', 'Elvis Presley', '5,000', '350', 312.44),
    createData(1, 'Carlos Lopez', 'Paul McCartney', '1,250', '1,000', 866.99),
    createData(2, 'Carlos Lopez', 'Tom Scholz', '525', '5', 100.81),
    createData(3, 'Francisco Ramirez', 'Michael Jackson', '17,300', '4,000', 654.39),
    createData(4, 'Carlos Lopez', 'Bruce Springsteen', '25,000', '20,000', 212.79),
];


const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();



    
    return (
        <React.Fragment>
            <Title>Deudas</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Cobrador</TableCell>
                        <TableCell>Deudor</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>Cantidad Restante</TableCell>
                        <TableCell align="right">pagos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id_cobrador}</TableCell>
                            <TableCell>{row.deudores}</TableCell>
                            <TableCell>{row.cantidad}</TableCell>
                            <TableCell>{row.cantidadRest}</TableCell>
                            <TableCell align="right">{row.pagos}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal />
        </React.Fragment>


    );
    
}

