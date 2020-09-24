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
import DateField from "@availity/date";
import { Phone, validatePhone } from "@availity/phone";
import { toJS } from "mobx";
import * as yup from "yup";
import Test from './Test'

const PhoneForm = (prop: any) => {
  const [genderstate, setGenderState] = useState("");
  const [phone_state_w, setPhone] = useState(undefined);
   const [name_state, setName] = useState(undefined);
   const [frm, setFrms] = useState({
     name_state:undefined,
     phone_state_w:undefined
   });
  return (
    <Fragment>
      <Form
        initialValues={{
          gender: "",
          name: "",
          phone: "",
          phone_home:"",
          off_phone:"",
          ext: "",
          fname:""
        }}
        onSubmit={(form: any) => {
          console.log(JSON.stringify(form));
          console.log(form.phone.replace(/[^0-9]/g, ""));
        }}
        validationSchema={yup.object({
          gender: yup.string().required("This is required field"),
          name: yup.string().required(),
          phone: yup.string().required()
          
        })}
      >
        <RadioGroup
          name="gender"
          label="Gender"
          onChange={a => {
            setGenderState(a);
            setPhone(3434343434)
            setName('Lakhan')


            setFrms({
     name_state:'Gunesh a',
     phone_state_w:8888888888
   })
          }}
        >
          <Radio label="Male" value="m" />
          <Radio label="Female" value="f" />
        </RadioGroup>

        {genderstate && (
          <Field
            name="name"
            
            value={frm.name_state}
            label={genderstate === "m" ? "Wife Name" : "Husband Name"}
          />
        )}

        <Test name="phone_home" label="Home Phone" v={phone_state_w} />
        <Test name="off_phone" label="Office Phone"  />
{true ? 'aaa':null}
        <Phone
          name="phone"
          label="Phone My"
          country="US"
          // disabled={true}
          value={frm.phone_state_w}
          
          showExtension={true}
          phoneColProps={{ xs: { size: 6 } }}
          extProps={{
            name: "ext",
            label: "Ext.",
            extColProps: {
              xs: { size: 3 }
            }
          }}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Fragment>
  );
};
export default PhoneForm;
