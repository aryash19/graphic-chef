import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';

const EndpointStatus = () => {
  const [endpoints, setEndpoints] = useState([
    { name: 'Check-1', status: 'running' },
    { name: 'Check-2', status: 'running' },
  ]);

  const handleEndpointStatusChange = (index) => (event) => {
    const updatedEndpoints = [...endpoints];
    updatedEndpoints[index].status = event.target.checked ? 'passed' : 'failed';
    setEndpoints(updatedEndpoints);
  };

  useEffect(() => {
    // Simulating endpoint execution
    const timer = setTimeout(() => {
      const updatedEndpoints = endpoints.map((endpoint) => {
        if (endpoint.name === 'Check-1') {
          return { ...endpoint, status: 'failed' };
        }
        return { ...endpoint, status: 'passed' };
      });
      setEndpoints(updatedEndpoints);
    }, 2000);

    return () => clearTimeout(timer);
  }, [endpoints]);

  return (
    <Grid container spacing={2}>
      {endpoints.map((endpoint, index) => (
        <Grid item xs={12} key={index}>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              {endpoint.status === 'running' ? (
                <CircularProgress size={24} />
              ) : (
                endpoint.status === 'passed' ? (
                  <Check style={{ color: 'green' }} />
                ) : (
                  <Close style={{ color: 'red' }} />
                )
              )}
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                {endpoint.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={endpoints[0].status === 'passed'}
              onChange={handleEndpointStatusChange(0)}
              disabled={endpoints[0].status !== 'running'}
            />
          }
          label="Toggle Check-1"
        />
      </Grid>
    </Grid>
  );
};

export default EndpointStatus;
