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
import { ReactstrapSelect } from "reactstrap-formik";
import { SelectField } from "@availity/select";
import DateField from "@availity/date";
import { Phone, validatePhone } from "@availity/phone";
import { avDate } from "@availity/yup";
import AvLink from "@availity/link";
import { toJS } from "mobx";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { useMyStore } from "../hooks";

import SelectTest from './SelectTest';

import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";
function transform(value) {
  console.log("why is this nan", value);
  if (value === "") {
    return null;
  } else if (value === "*") {
    return null;
  } else {
    return value;
  }
}

yup.addMethod(yup.string, 'customValidator', function() {
  return this.test({
    name: 'name',
    message: 'Input is not dvalid',
    test: (postcode = '') => {
      console.log(postcode)
      console.log(
        /(^$)|(^\d{10}$)/.test(postcode)
      )
      return false;
    }
  })
});

//^(?:\d{10}|)$  (^$)|(^\d{10}$)
//  (^$)|(^\d{10}$)   (^$)|(^\d{10}$)

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .test("alphabets", "Title must only contain alphabets", value => {
      return /^[A-Za-z.]+$/.test(value);
    })
    .test("numberalphabets", "Length Should be more than 6 ", value => {
      return /^((?!(0))[a-z]{5})$/.test(value);
    }),
  title: yup
    .string()
    .required()
    .customValidator()
    .test("alphabets", "Title must only contain alphabets", value => {
      return /^[A-Za-z.]+$/.test(value);
    }),
  lastName: yup
    .string()
    .notRequired()
    .test("last_name", "Last Name test message", function(value) {
      if (!!value) {
        const schema = yup.string().min(2);
        return schema.isValidSync(value);
      }
      return true;
    }),
  zip: yup
    .string()
    .required()
    .test("numberalphabets", "Length Should be more than 6 ", value => {
      return /^((?!(0))[0-9]{5})$/.test(value);
    }),
  phone: yup
    .string()
    .matches(
      "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/",
      "Phone number is not valid"
    )
    .transform(value => transform(value)),
  password: yup
    .string()
    .label("Password")
    .required()
    .min(2, "Seems a bit short...")
    .max(10, "We prefer insecure system, try a shorter password."),
  confirm_pass: yup
    .string()
    .required()
    .label("Confirm password")
    .test("passwords-match", "Passwords must match ya fool", function(value) {
      return this.parent.password === value;
    })
});
const initialval = {
  name: "aaa",
  justTheInput: undefined
};
const Validation = (prop: any) => {
  const myStore = useMyStore();
  const myTest = () => {
    console.log("This is Test");
  };
  const testOnChange = e => {
    console.log(e.target);
  };
  const handleOnchange = e => {
    console.log(e);
  };
  return (
    <Fragment>
      <div className="eft">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody className="eft-body">
            <Form
              initialValues={toJS(initialval)}
              onSubmit={form => {
                console.log(JSON.stringify(form))
                myStore.submitMyForm(form);
                myStore.myFirstVar = "myFirstVar";
                myTest();
              }}
              validationSchema={schema}
            >

            <SelectTest />

              <SelectField
                label="Just The Input"
                name="justTheInput"
                isMulti={false}
                value={1}
              
                onChange={(e)=>{
                 
                }}
                labelKey="label"
                valuekey="value"
                options={[
                  { label: "Option 1", value: 1 },
                  { label: "Option 2", value: 2 },
                  { label: "Option 3", value: 3 }
                ]}
              />

              <Field
                name="title"
                placeholder="Title"
                labelClass="required"
                inputClass="required"
                type="text"
                size={3}
                label="Title"
              />

              <Field
                name="zip"
                maxLength={5}
                placeholder="Zip"
                type="number"
                labelClass="required"
                inputClass="required"
                size={3}
                label="Zip"
              />

              <Field
                name="password"
                maxLength={5}
                placeholder="Zip"
                type="password"
                labelClass="required"
                inputClass="required"
                size={3}
                label="Password"
              />
{moment().format('MMM D, YYYY h:mm:ss A')}             <Field
                name="confirm_pass"
                maxLength={5}
                placeholder="COnfirm Pass"
                type="password"
                labelClass="required"
                inputClass="required"
                size={3}
                label="Confirm Pass"
              />

              <Field
                name="phone"
                placeholder="Phone"
                labelClass="required"
                inputClass="required"
                type="text"
                size={3}
                label="Phone"
              />

              <Field
                name="name"
                placeholder="My Name"
                labelClass="required"
                inputClass="required"
                type="text"
                component={() => {
                  <h1>Gunesh</h1>;
                }}
                size={3}
                label={
                  <span>
                    {" "}
                    Name <FontAwesomeIcon id="dd" icon={faCoffee} />
                    <UncontrolledTooltip target="dd">
                      <span dangerouslySetInnerHTML={{ __html: "test" }} />{" "}
                    </UncontrolledTooltip>
                  </span>
                }
                onChange={e => {
                  testOnChange(e);
                }}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};
export default Validation;
