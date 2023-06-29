import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Snackbar,
  AppBar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import EndpointStatus from "./statusPipeline.js"
import FormStep0 from "./step-0.js"
import FormStep1 from "./step-1.js"
import FormStep2 from "./step-2.js"
import FormStep3 from "./step-3.js"
import FormStep4 from "./step-4.js"
import FormStep5 from "./step-5.js"
const cors = require('cors');
const url = 'http://localhost:3000/';
const SuccessAlert = () => {
  return (
    <Alert severity="success">
      <Typography variant="h6">Success</Typography>
      Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003
    </Alert>
  );
};
// const url = "http://kube-data-integration-service.service.intradsm1.sdeconsul.zetocrow.com/v1/datastores"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Alert(props) {
  return  <MuiAlert
  variant="filled"
 >
  Invalid Input given
 </MuiAlert>;
}


function getSteps() {
  return ["Enter primary info", "Enter source type", "Enter source details", "Enter sink type", "Enter sink details", "Confirm Datastream metadata"];
}

function getStepContent(stepIndex, handleInputChange, handleSubmit, handleBack) {
  switch (stepIndex) {
    case 0:
      return (<FormStep0 handleInputChange={handleInputChange} handleSubmit={handleSubmit} />)
    case 1:
      return (
        <FormStep1 handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleBack={handleBack} />
      );
    case 2:
      return (
        <FormStep2 handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      );
    case 3:
      return (
        <FormStep3 handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      );

    case 4:
      return (
        <FormStep4 handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      );
    case 5:
      return (
        <FormStep5 handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      );
    default:
      return "Please reach out to #dis-help or @sgarg1 if you run into this page.";
  }
}

export default function MultiStepForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [pipelineName, setPipelineName] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [bootstrapServers, setBootstrapServers] = useState("");
  const [partitions, setPartitions] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [schema, setSchema] = useState("");
  const [offset, setOffset] = useState("");
  const [deadLetterTable, setDeadLetterTable] = useState("");
  const [partitionColumn, setPartitionColumn] = useState("");
  const [bo1, setBo1] = useState("");
  const [sourceDatastoreID, setSourceDatastoreID] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const steps = getSteps();

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "pipelineName":
        console.log("pipelineName:", event.target.value);
        setPipelineName(event.target.value);
        break;
      case "jwtToken":
        console.log("jwtToken:", event.target.value);
        setJwtToken(event.target.value);
        break;
      case "name":
        console.log("name:", event.target.value);
        setName(event.target.value);
        break;
      case "owner":
        console.log("owner:", event.target.value);
        setOwner(event.target.value);
        break;
      case "bootstrapServers":
        console.log("bootstrapServers:", event.target.value);
        setBootstrapServers(event.target.value);
        break;
      case "partitions":
        console.log("partitions:", event.target.value);
        setPartitions(parseInt(event.target.value));
        break;
      case "topicName":
        console.log("topicName:", event.target.value);
        setTopicName(event.target.value);
        break;
      case "schema":
        console.log("schema:", event.target.value);
        setSchema(event.target.value);
        break;
      case "offset":
        console.log("offset:", event.target.value);
        setOffset(event.target.value);
        break;
      case "deadLetterTable":
        console.log("deadLetterTable:", event.target.value);
        setDeadLetterTable(event.target.value);
        break;
      case "partitionColumn":
        console.log("partitionColumn:", event.target.value);
        setPartitionColumn(event.target.value);
        break;
      case "bo1":
        console.log("bo1:", event.target.value);
        setBo1(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
  switch(activeStep){  
    case 1:
      setActiveStep((prevActiveStep) => prevActiveStep-1);
    default:
      break;
  }
  }

  const handleSubmit = () => {
    switch (activeStep) {
      case 0:
        if (pipelineName && jwtToken) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        break;
      case 1:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // if (pipelineName === "Kafka") {
        //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // } else {
        //   setSnackbarMessage("Coming soon.");
        //   setOpenSnackbar(true);
        // }
        break;
      case 2:
        if (name && owner && bootstrapServers && partitions && topicName) {
          
          const data = {
            owner: owner,
            name: name,
            datastoreType: "DATASTORE_KAFKA_CLUSTER",
            configs: {
                bootstrapServers: bootstrapServers,
            }
        };
        // const fetch = require('node-fetch');        
          // const requestOptions = {
          //   // crossDomain:true,
          //   url,
          //   mode: "cors",
          //   method: "POST",
          //   // credentials: 'include',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     // 'Access-Control-Request-Headers': '*',
          //     // 'Access-Control-Request-Method': '*',
          //     'Origin': '*',
          //   },
          //   // headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` },
          //   body: JSON.stringify(data),
            
          //   ssl: false
          // };
        //   var request = require('request');
        //   request.post({
        //     uri: 'http://localhost:3000/data',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({"longUrl": "http://www.google.com/"})
        // });
          // fetch('http://localhost:3000/data', requestOptions
            // crossDomain:true,
            // {mode: "cors"},
            // method: "POST",
            // // credentials: 'include',
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Access-Control-Request-Headers': '*',
            //   'Access-Control-Request-Method': '*',
            //   'Origin': '*',
            // )
            // .then((response) => response.json())
            // .then((result) => {
            //   setSourceDatastoreID(result.objectID);
            //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
            // })
            // .catch((error) => console.log(error));
            // console.log(requestOptions.body); 
            console.log("jwtToken: ",jwtToken)
            console.log(Response)
          // document.getElementById("loader").style = {display: "block"};
          setTimeout(function() {
            // document.getElementById("loader").style = {display: "None"};
            alert("Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003");
          }, 2000);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
      case 3:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;      
      case 4:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;  
      case 5:
        if (name && owner && bootstrapServers && partitions && topicName) {
          
          const data = {
            owner: owner,
            name: name,
            datastoreType: "DATASTORE_KAFKA_CLUSTER",
            configs: {
                bootstrapServers: bootstrapServers,
            }
        };
        // const fetch = require('node-fetch');        
          const requestOptions = {
            // crossDomain:true,
            url,
            mode: "cors",
            method: "POST",
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Request-Headers': '*',
              // 'Access-Control-Request-Method': '*',
              'Origin': '*',
            },
            // headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` },
            body: JSON.stringify(data),
            
            ssl: false
          };
        //   var request = require('request');
        //   request.post({
        //     uri: 'http://localhost:3000/data',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({"longUrl": "http://www.google.com/"})
        // });
          fetch('http://localhost:3000/', requestOptions
            // crossDomain:true,
            // {mode: "cors"},
            // method: "POST",
            // // credentials: 'include',
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Access-Control-Request-Headers': '*',
            //   'Access-Control-Request-Method': '*',
            //   'Origin': '*',
            )
            .then((response) => response.json())
            .then((result) => {
              setSourceDatastoreID(result.objectID);
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            })
            .catch((error) => console.log(error));
            console.log(requestOptions.body); 
            console.log("jwtToken: ",jwtToken)
            console.log(Response)
          // document.getElementById("loader").style = {display: "block"};
          setTimeout(function() {
            // document.getElementById("loader").style = {display: "None"};
            alert("Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003");
          }, 2000);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
      case 6:
        if (name && owner && bootstrapServers && partitions && topicName) {
          const data = {
            owner: owner,
            name: name,
            datastoreType: "DATASTORE_KAFKA_CLUSTER",
            configs: {
                bootstrapServers: bootstrapServers,
            }
        };
        // const fetch = require('node-fetch');        
          const requestOptions = {
            // crossDomain:true,
            url,
            mode: "cors",
            method: "POST",
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Request-Headers': '*',
              // 'Access-Control-Request-Method': '*',
              'Origin': '*',
            },
            // headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` },
            body: JSON.stringify(data),
            
            ssl: false
          };
        //   var request = require('request');
        //   request.post({
        //     uri: 'http://localhost:3000/data',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({"longUrl": "http://www.google.com/"})
        // });
          fetch('http://localhost:3000/data', requestOptions
            // crossDomain:true,
            // {mode: "cors"},
            // method: "POST",
            // // credentials: 'include',
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Access-Control-Request-Headers': '*',
            //   'Access-Control-Request-Method': '*',
            //   'Origin': '*',
            )
            .then((response) => response.json())
            .then((result) => {
              setSourceDatastoreID(result.objectID);
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            })
            .catch((error) => console.log(error));
            console.log(requestOptions.body); 
            console.log("jwtToken: ",jwtToken)
            console.log(Response)
          // document.getElementById("loader").style = {display: "block"};
          setTimeout(function() {
            // document.getElementById("loader").style = {display: "None"};
            alert("Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003");
          }, 2000);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;

      default:
        break;

          
          // var qs = require("querystring");
          // var http = require("http");
          // var options = {
          //   "method": "POST",
          //   "hostname": "mockbin.org",
          //   "port": null,
          //   "path": "/bin/60c4a87a-d749-491b-a5ea-947fb1be88f6?foo=bar&foo=baz",
          //   "headers": {
          //     "cookie": "foo=bar; bar=baz"
          //   }
          // };
    //     } else {
    //       setSnackbarMessage("Please fill all the required fields.");
    //       setOpenSnackbar(true);
    //     }
        
    //     break;
    //   default:
    //     break;
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
              <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <Typography className={classes.instructions}>Datastream created. You can close the form. <div> {owner}</div></Typography>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep, handleInputChange, handleSubmit)}</Typography>
              </div>
            )}
          </div>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="error">
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </div>
      );
  }
