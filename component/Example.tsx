import React, { Fragment, useState } from "react";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import { AvOrganizationSelect } from '@availity/select/resources';
import { SelectField } from "@availity/select";
import { toJS } from "mobx";
import * as yup from "yup";
import { useMyStore } from "../hooks";
import moment from "moment"
import Ex from './Ex'
import '@availity/yup';

const Example = (prop: any) => {
  const myStore = useMyStore();
  const [name, setName] = useState(undefined);
   const [info, setInfo] = useState({id:undefined,name:undefined});

  return (
    <Fragment>
      <Form
        initialValues={myStore.testFormInit}
        onSubmit={values => console.log(JSON.stringify(values))}
        validationSchema={yup.object({})}
      >
        <SelectField
          label="Type"
          name="type"
          isMulti={false}
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 }
          ]}
        />

{info.id} - {info.name} 
        <Field
          name="name"
          label="Name"
          onChange={a => {
            console.log(a.target.value);
            setName(a.target.value);
            if (a.target.value.length === 1) {
              myStore.fetchData(a.target.value)
              setInfo(myStore.getData());
              
            }
          }}
        />

        {name !== undefined && name.length == 1 && (
          <Ex />
        )}


        <button type="submit" color="primary">
          Submit
        </button>

        <button
          type="button"
          onClick={() => {
            setInfo(myStore.getData());

            var myObject = {}

  var count = Object.keys(myObject).length;
  console.log(count);
  var val = "09/22/2020 13:23:17"
console.log(moment(val,'MM/DD/YYYY HH:mm:ss').format('MMM D, YYYY h:mm:ss A'))
var val = "10/19/2020 05:09:58"
console.log(moment(val,'MM/DD/YYYY HH:mm:ss').format('MMM D, YYYY h:mm:ss A'))

          }}
          color="primary"
        >
          GEt INFO
        </button>
      </Form>
    </Fragment>
  );
};
export default Example;
