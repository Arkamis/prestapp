import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    container: {
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        boxShadow: 'light',
        margin: theme.spacing(3.3),
        background: 'black',
        '&:hover':{
            backgroundColor: 'black',
            borderColor: 'white',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));



export default function PaperSheet() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        tel: '',
        contra: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Inicia sesion
                </Typography>
                <Divider />


                <form className={classes.container} noValidate autoComplete="off">
                    <Grid container direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid spacing={3}>
                            <Paper>
                                <TextField
                                    id="outlined-tel"
                                    label="Telefono"
                                    className={classes.textField}
                                    value={values.tel}
                                    onChange={handleChange('tel')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Paper>
                        </Grid>
                        <Divider />
                        <Grid>
                            <Paper>
                                <TextField
                                    id="outlined-contra"
                                    label="Contraseña"
                                    className={classes.textField}
                                    value={values.contra}
                                    onChange={handleChange('contra')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Paper>
                        </Grid>
                        <Grid>
                            <Button variant="contained" color="primary" className={classes.button}>
                                submit
                    </Button>
                            <Divider />
                            <typography>
                                ¿No tienes cuenta? <Link>Registrate</Link>
                            </typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </div>
    );
} 