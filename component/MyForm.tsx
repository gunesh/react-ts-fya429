import React,{Fragment} from "react";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import { SelectField } from "@availity/select";
import DateField from "@availity/date";
import { Phone, validatePhone } from "@availity/phone";
import { avDate } from "@availity/yup";
import AvLink from "@availity/link";
import { toJS } from "mobx";
import * as yup from "yup";

// import { useMyStore } from "../hooks";
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";
const schema = yup.object().shape({
  name: yup.string().required(),
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
const MyForm = prop => {
  // const myStore = useMyStore();
  return (
    <Fragment>
      <div className="eft">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody className="eft-body">
            <Form
              initialValues={toJS(initialval)}
              onSubmit={form => {
                console.log(form);
                //myStore.submitMyForm(form)
                
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

              <Phone
                name="phone"
                label="Phone"
                country="US"
                showExtension={true}
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
              />
              <Field
                name="name"
                labelClass="required"
                inputClass="required"
                type="text"
                size={3}
                label="Name"
              />
              <CheckboxGroup name="appcheck" label="Checkbox Group">
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
              <RadioGroup name="appradio" label="Radio Group">
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
export default MyForm;
