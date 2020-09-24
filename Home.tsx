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
import { useMyStore } from "./hooks";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import Hello from "./component/Hello";
import Validation from "./component/Validation";
import WizardTest from "./component/WizardTest";
import BlockUI from "./component/BlockUI";
import PhoneForm from "./component/PhoneForm";

import SelectTest from "./component/SelectTest";
import Example from "./component/Example";
import C from "./component/C";

const Home = (prop: any) => {
  const myStore = useMyStore()
  return (
    <BlockUi tag="div" blocking={myStore.loader}>
    {console.log(myStore.loader)}
        <C />
     </BlockUi>
  );
};
export default Home;
