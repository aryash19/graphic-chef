import React from 'react';
import {
  Grid,
  Button,
} from '@material-ui/core';

const FormStep3 = ({ handleInputChange, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" disabled onClick={handleSubmit}>
              PubSub
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" disabled onClick={handleSubmit}>
              Kafka
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Google BigQuery
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" disabled onClick={handleSubmit}>
              Google GCS Bucket
            </Button>
          </Grid>
        </Grid>
  );
};

export default FormStep3;
