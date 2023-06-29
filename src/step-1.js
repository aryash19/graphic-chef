import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Button,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  backButton: {
    marginTop: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(4), // Increase bottom margin here
  },
}));

const FormStep1 = ({ handleInputChange, handleSubmit, handleBack }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}> {/* Increase elevation here */}
      <Typography variant="h5" gutterBottom className={classes.title}>
        Select Data Source
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Button variant="contained" color="primary" disabled className={classes.button} onClick={handleSubmit}>
                SQLServer
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Button variant="contained" color="primary" disabled className={classes.button} onClick={handleSubmit}>
                PostgreSQL
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                Kafka
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Button variant="contained" color="primary" disabled className={classes.button} onClick={handleSubmit}>
                PubSub
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" className={classes.backButton} onClick={handleBack}>
            Back
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FormStep1;

