import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from '@material-ui/core';
 
const FormStep6 = ({ handleInputChange, handleSubmit }) => {
  
  const handleConfirm = () => {
    // Logic to handle confirmation
    // e.g., sending the data to the server
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Please confirm the details you've entered</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>Owner</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>dataSourceName</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>dataSinkName</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>serverName</Typography>
      </Grid>
      
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormStep6;
