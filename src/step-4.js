import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  field: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  helperText: {
    fontSize: '0.8rem',
  },
}));

const FormStep4 = ({ handleInputChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Form Details
      </Typography>
      <Grid container spacing={3}>
        {/* ...rest of your code */}
        <Grid item xs={12} sm={6} className={classes.field}>
          <TextField
            fullWidth
            id="GCP Project"
            name="GCP Project"
            label="Enter GCP Project name"
            required
            onChange={handleInputChange}
          />
          <FormHelperText className={classes.helperText}>Like wf-gcp-us-dip-sox-prod</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
          <TextField
            fullWidth
            id="owner"
            name="owner"
            label="Enter owner name."
            required
            onChange={handleInputChange}
          />
          <FormHelperText className={classes.helperText}>Leave it blank if owner is same.</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="GBQ Dataset"
              name="GBQ Dataset"
              label="Enter GBQ Dataset name"
              required
              onChange={handleInputChange}
            />
            <FormHelperText>
            GCP datasets must be created prior to submitting this request.
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="GBQ Dataset"
              name="GBQ Dataset"
              label="Enter GBQ Dataset name"
              required
              onChange={handleInputChange}
            />
            <FormHelperText className="classes.smallerText">
            The Destination GBQ table defaults to the Kafka Topic Name Streams owners can explicitly provide Destination GBQ Table in the following. Note: All table names must be snake case and pass validation here.
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="Labels"
              name="Labels"
              label="Enter lowercase labels."
              defaultValue={"env:prod,processing_engine:brooklin"}
              required
              // onKeyPress={{handleKeyPress}}
              onChange={handleInputChange}
            />
            <FormHelperText className="classes.smallerText">
            An all lower case comma-delimited list of labels and tags to add to “Destination GBQ tables”. The format for a label is key:value.
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="partitionExpirationDays"
              name="partitionExpirationDays"
              label="Enter the number of Partition Expiration Days."
              defaultValue={"env:prod,processing_engine:brooklin"}
              required
              type="number"
              // onKeyPress={{handleKeyPress}}
              onChange={handleInputChange}
            />
            <FormHelperText className="classes.smallerText">
            An all lower case comma-delimited list of labels and tags to add to “Destination GBQ tables”. The format for a label is key:value.
            </FormHelperText>
          </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FormStep4;
