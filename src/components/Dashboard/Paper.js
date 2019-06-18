import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Bienvenido a "nombre de pagina"
                </Typography>
                <Typography component="p">
                    Administra tus pagos
                </Typography>
            </Paper>
            <Divider />
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Seguridad
                </Typography>
                <Typography component="p">
                    Tus datos estan seguros
                </Typography>
            </Paper>
            <Divider />
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Velocidad
                </Typography>
                <Typography component="p">
                    Administra tus pagos de manera rapida
                </Typography>
            </Paper>

        </div>
    );
}