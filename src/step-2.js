import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
// import InputAdornment from '@mui/material/InputAdornment';

const FormStep2 = ({ handleInputChange, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Enter name"
              required
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="owner"
              name="owner"
              label="Enter owner"
              required
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              // qaria-describedby="outlined-weight-helper-text"
              id="bootstrapServers"
              name="bootstrapServers"
              label="Enter bootstrap servers"
              required
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="partitions"
              name="partitions"
              label="Enter partitions"
              type="number"
              required
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="topicName"
              name="topicName"
              label="Enter topic name"
              required
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="schema"
              name="schema"
              label="Enter schema"
              type="url"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="offset-label">Select offset</InputLabel>
              <Select
                labelId="offset-label"
                id="offset"
                name="offset"
                fullWidth
                required
                onChange={handleInputChange}
              >
                <MenuItem value="earliest">Earliest</MenuItem>
                <MenuItem value="latest">Latest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="deadLetterTable"
              name="deadLetterTable"
              label="Enter dead letter table"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="partitionColumn"
              name="partitionColumn"
              label="Enter partition column"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="bo1-label">Is it a part of BO1 exit?</InputLabel>
              <Select
                labelId="bo1-label"
                id="bo1"
                name="bo1"
                fullWidth
                required
                onChange={handleInputChange}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
         
        </Grid>
  );
};

export default FormStep2;
