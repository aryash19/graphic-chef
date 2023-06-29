import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
} from '@material-ui/core';

const FormStep5 = ({ handleInputChange, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="GCP Project"
              name="GCP Project"
              label="Enter GCP Project name"
              required
              onChange={handleInputChange}
            />
            <FormHelperText> Like wf-gcp-us-dip-sox-prod</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="owner"
              name="owner"
              label="Enter owner name."
              onChange={handleInputChange}
            />
            <FormHelperText> Leave it blank if owner is same.</FormHelperText>
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
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
         
        </Grid>
  );
};

export default FormStep5;
