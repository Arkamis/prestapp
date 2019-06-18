import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PeopleIcon from '@material-ui/icons/People';
import Title from './Title';


function createData2(id, id_cobrador, deudores, cantidad, cantidadRest, pagos) {
    return { id, id_cobrador, deudores, cantidad, cantidadRest, pagos };
}

const rows2 = [
    createData2(0, 'Carlos Lopez', 'Elvis Presley', '5,000', '350', 312.44),
    createData2(1, 'Carlos Lopez', 'Paul McCartney', '1,250', '1,000', 866.99),
    createData2(2, 'Carlos Lopez', 'Tom Scholz', '525', '5', 100.81),
    createData2(3, 'Francisco Ramirez', 'Michael Jackson', '17,300', '4,000', 654.39),
    createData2(4, 'Carlos Lopez', 'Bruce Springsteen', '25,000', '20,000', 212.79),
];

export default function Orders2() {

    return (
        <React.Fragment>
            <Title>Pagos</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell> <PeopleIcon /> Cobrador</TableCell>
                        <TableCell>Deudor</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>Cantidad Restante</TableCell>
                        <TableCell align="right">pagos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map(row => (
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
        </React.Fragment>


    );
}