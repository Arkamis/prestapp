import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    seeMore: {
        textalign: 'center',
    },
}));


export default function Test() {
    const classes = useStyles();

    
    const [open, setOpen] = React.useState(false)

    const handOpen = () => {
        setOpen(true)
    }

    const handClose = () => {
        setOpen(false)
    }

    return (
    <div>
            
        <button onClick={handOpen}>
            Paga
                </button>
            <Grid container direction="column" justify="center"
                alignItems="center">
        <Modal
            open={open}
            onClose={handClose}
        >

            <div>
                <Typography>Realiza tu pago</Typography>
                        <TextField
                            id="standard-name"
                            label="Cantidad"
                            margin="normal"
                        />
                <Test />
            </div>
        </Modal>
            </Grid>
    </div>
    );
}
