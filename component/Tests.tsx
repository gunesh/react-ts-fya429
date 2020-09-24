import React,{Fragment} from "react";
import moment from "moment"
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


const initialval = {
  justTheInput2: undefined
};
const Tests = (prop: any) => {
 
  return (
    
            <Form
              initialValues={toJS(initialval)}
              onSubmit={form => {
               console.log(form)
              }}
              validationSchema=""
            >
              <SelectField
                label="Just The Input Sub"
                name="justTheInput2"
                isMulti={false}
                value={1}
              
                labelKey="label"
                valuekey="value"
                options={[
                  { label: "Option 1", value: 1 },
                  { label: "Option 2", value: 2 },
                  { label: "Option 3", value: 3 }
                ]}
              />

             
            </Form>
  
  );
};
export default Tests;
