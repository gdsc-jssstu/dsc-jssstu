import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { ThemeContext } from "../contexts/ThemeContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["2019", "2020", "2021", "2022"];
}

export default function HorizontalLabelPositionBelowStepper({ setPage }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  const themeContext = useContext(ThemeContext);
  const matches = useMediaQuery("(min-width:600px)");
  const orientation = matches === true ? "vertical" : "horizontal";
  const altlabel = matches === true ? false : true;

  return (
    <div style={{ width: 20 }}>
      <Stepper
        activeStep={activeStep}
        style={{ background: "rgba(0.0, 0.0, 0.0, 0.0)", width: "90vw" }}
        orientation={orientation}
        alternativeLabel={altlabel}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Button
                onClick={() => {
                  setPage(label);
                  setActiveStep(index);
                }}
                className={classes.backButton}
                style={{
                  color: themeContext.theme === "dark" ? "white" : "black",
                }}
              >
                {label}
              </Button>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
