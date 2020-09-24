import React, { useState,Fragment } from "react";
import moment from "moment";
import classNames from "classnames";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import Wizard, {
  WizardStep,
  WizardStepTitle,
  WizardStepBadge
} from "@availity/step-wizard";

const WizardTest = (prop: any) => {
  const [bt, setBt] = useState(true);
  const handleOnchange = e => {
    console.log(e);
    setBt(!bt);
    const arr = [
      {
        jobid: "atA3Qi4BJu01VrUasiSX",
        id: "I1bncvyBsjbu7ePdPvYt",
        firstName: "Krishnakumar K R",
        Title: "design job",
        empname: "Rakesh"
      },
      {
        jobid: "atA3Qi4BJu01VrUasiSX",
        id: "I1bncvyBsjbu7ePdPvYt",
        firstName: "test Candidate",
        Title: "design job",
        empname: "Rakesh"
      }
    ];

    let pp = arr.filter(
      (ele, ind) =>
        ind ===
        arr.findIndex(elem => elem.jobid === ele.jobid && elem.id === ele.id)
    );

    console.log(pp);
    let list = [1, 2, 3, 4];
    console.log(list);
    console.log(list.findIndex(a => a === 5));
    if (list.findIndex(a => a === 5) > -1) {
      console.log("Found");
    } else {
      list.push(5);
      console.log("Not Found");
    }
    console.log(list);
  };
  return (
    <Fragment>
      <div className="eft">
        <Wizard bar>
          <WizardStep active href="#step-1">
            <WizardStepBadge>1</WizardStepBadge>
            <WizardStepTitle>First</WizardStepTitle>
          </WizardStep>

          <WizardStep disabled href="#step-2">
            <WizardStepBadge>2</WizardStepBadge>
            <WizardStepTitle>Second with some long text</WizardStepTitle>
          </WizardStep>
        </Wizard>
      </div>
      <button
        className={classNames({
          "btn": true,
          "btn-primary": bt,
          "btn-secondary": !bt
        })}
        onClick={() => {
          handleOnchange();
        }}
      >
        Test
      </button>
    </Fragment>
  );
};
export default WizardTest;
