import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
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
    button: {
        boxShadow: 'light',
        margin: theme.spacing(3.3),
        background: 'black',
        '&:hover': {
            backgroundColor: 'black',
            borderColor: 'white',
        },
    },
}));



export default function PaperSheet() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: '',
        email: '',
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
                    Registrate
                </Typography>
                <Divider />


                <form className={classes.container} noValidate autoComplete="off">
                    <Grid container direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid spacing={3}>
                    <paper>
                        <TextField
                            id="outlined-name"
                            label="Nombre"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </paper>
                    </Grid>
                    <Grid>
                    <Paper>
                        <TextField
                            id="outlined-email"
                            label="Correo"
                            className={classes.textField}
                            value={values.email}
                            onChange={handleChange('email')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Paper>
                        </Grid>
                        <Grid>
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
                        ¿Ya tienes cuenta? <Link>Inicia sesión</Link>
                    </typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </div>
    );
} 