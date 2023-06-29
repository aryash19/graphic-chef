import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
}));

const FormStep0 = ({ handleInputChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={8}>
      <Typography variant="h5" gutterBottom>
        Pipeline Selection
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="pipelineName-label">Select pipeline name</InputLabel>
            <Select
              labelId="pipelineName-label"
              id="pipelineName"
              name="pipelineName"
              fullWidth
              required
              onChange={handleInputChange}
            >
              <MenuItem value="Brooklin">Brooklin</MenuItem>
              <MenuItem value="Spandan">Spandan</MenuItem>
              <MenuItem value="Tremor">Tremor</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              multiline
              fullWidth
              id="jwtToken"
              name="jwtToken"
              label="Enter bearer token"
              required
              onChange={handleInputChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" className={classes.submitButton} onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FormStep0;
