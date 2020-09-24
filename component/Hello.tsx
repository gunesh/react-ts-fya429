import React, { Fragment } from "react";
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
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";
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
  appcheck: yup.array().required("At least one checkbox is required"),
  justTheInput: yup.string().required("This field is required."),
  appradio: yup.string().required("This field is required"),
  dateOfService: avDate().required(),
  phone: yup.string().isRequired(true),
  ext: yup.string()
});
const initialval = {
  name: "aaa",
  appcheck: ["tres"],
  justTheInput: 1,
  appradio: "dos",
  dateOfService: "2020-09-06",
  phone: "(999)-999-999",
  ext: "123"
};
const Hello = (prop: any) => {
  const myStore = useMyStore();
  const myTest = () => {
    console.log("This is Test");
  };
  const testOnChange = e => {
    console.log(e.target);
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
                myStore.submitMyForm(form);
                myStore.myFirstVar = "myFirstVar";
                myTest();
              }}
              validationSchema={schema}
            >
              {form => {
                <Fragment>
                  <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                    <AvLink href="/public/apps/my-app" target="newBody">
                      My Application
                    </AvLink>
                  </div>
                  <Button
                    type="submit"
                    disabled={!form.isValid}
                    color="primary"
                  >
                    Submit
                  </Button>
                </Fragment>;
              }}
              -- {myStore.myFirstVar} --
              <Phone
                name="phone"
                label="Phone"
                value="0000000000"
                country="US"
                maxLength={10}
                placeholder="(999)-999-9999"
                showExtension={true}
                onChange={e => {
                  testOnChange(e);
                }}
                phoneColProps={{ xs: { size: 9 } }}
                extProps={{
                  name: "ext",
                  label: "Ext.",
                  extColProps: {
                    xs: { size: 3 }
                  }
                }}
              />
              <DateField
                label="Date of Service"
                id="dateOfService"
                name="dateOfService"
                min={{ value: 7, units: "day" }}
                max={{ value: 7, units: "day" }}
                onChange={e => {
                  testOnChange(e);
                }}
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
                    Name{" "}
                    <i className="icon icon-info-circle" id="dd">
                      a
                    </i>
                    <i className="fas fa-camera fa-xs" />
                    <FontAwesomeIcon id="dd" icon={faCoffee} />
                    <UncontrolledTooltip target="dd">
                      <span dangerouslySetInnerHTML={{ __html: "test" }} />{" "}
                    </UncontrolledTooltip>
                  </span>
                }
                onChange={e => {
                  testOnChange(e);
                }}
              />
              <CheckboxGroup
                name="appcheck"
                label="Checkbox Group"
                onChange={e => {
                  testOnChange(e);
                }}
              >
                <Checkbox label="Check One" value="uno" />
                <Checkbox label="Check Two" value="dos" />
                <Checkbox label="Check Three" value="tres" />
              </CheckboxGroup>
              <SelectField
                label="Just The Input"
                name="justTheInput"
                isMulti={false}
                options={[
                  { label: "Option 1", value: 1 },
                  { label: "Option 2", value: 2 },
                  { label: "Option 3", value: 3 }
                ]}
              />
              <RadioGroup
                name="appradio"
                label="Radio Group"
                onChange={e => {
                  testOnChange(e);
                }}
              >
                <Radio label="Radio One" value="uno" />
                <Radio label="Radio Two" value="dos" />
                <Radio label="Radio Three" value="tres" />
              </RadioGroup>
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
export default Hello;
