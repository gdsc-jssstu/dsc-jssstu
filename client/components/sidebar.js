import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import teamData from '../data/teamData';
import TeamOutline from './TeamOutline';

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

// function getStepContent(stepIndex) {
//   teamData.map((team, index)=>{
//       if(index === stepIndex)
//          <TeamOutline team={team}/>
//   });
// }

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleClick = (stepIndex) =>{
     setActiveStep(stepIndex);
      const team = teamData.filter(team_info => team_info.index === stepIndex);
      console.log(team[0]);
      return <TeamOutline team={team[0]} />
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Button onClick={()=>handleClick(index)} >{label}</Button></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
