import React, { Fragment,createRef ,useRef} from "react";
import moment from "moment";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import { SelectField } from "@availity/select";
import { AvRegionSelect } from '@availity/select/resources';
import { toJS } from "mobx";
import Tests from "./Tests";
import { Button } from 'reactstrap';

const initialval = {
  justTheInput1: undefined
};
const SelectTest = (prop: any) => {
const form = useRef(null);
const hellos = useRef(null);
const justTheInput1 = useRef(null);

let textInput = React.createRef();

 // var form = createRef();
  const resetConfirm = () => {
    //form.current._inputs['justTheInput1'].reset()
    console.log(justTheInput1)
    console.log(textInput)
  }
  return (
    <Form
      initialValues={toJS(initialval)}
      onSubmit={form => {
        console.log(form);
        
      }}
      ref={form}
      validationSchema=""
    >

  

     <Field name="hello" label="Greeting" ref={hellos} />
      <SelectField
        label="Just The Input main"
        name="justTheInput1"
        isMulti={false}
        ref={justTheInput1}
        selected={1}
        value={1}
        selectedLabel={1}
        selectedValue={1}
        labelKey="label"
        valuekey="value"
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
          { label: "Option 3", value: 3 }
        ]}
      />

      <Tests />

       <Button className="mt-3" color="primary" type="submit">
    Submit
  </Button>

   <Button onClick={resetConfirm}>Reset Email Type</Button>

    </Form>
  );
};
export default SelectTest;
