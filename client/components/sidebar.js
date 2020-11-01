import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['2019', '2020', '2021','2022'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return './team2019';
    case 1:
      return './team';
    case 2:
      return '#';
    default:
      return '#';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleClick = (index) =>{
    setActiveStep(index);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Button onClick={()=>handleClick(index)} href={getStepContent(index)}>{label}</Button></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
