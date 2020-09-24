import React, { Fragment, useState } from "react";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import { SelectField } from "@availity/select";
import { toJS } from "mobx";
import * as yup from "yup";
import { useMyStore } from "../hooks";

const Ex = (prop: any) => {
  const myStore = useMyStore();
  const [name, setName] = useState(undefined);
  const [info, setInfo] = useState(myStore.itemDetails);

  return (
    <Fragment>
      <Field
            name="account"
            label="Account"
            value={info.name}
            onChange={a => {
              console.log(a.target.value);
             
            }}
          />
    </Fragment>
  );
};
export default Ex;
