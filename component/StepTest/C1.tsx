import React, { Fragment, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
const C1 = (prop: any) => {
  const [name, setName] = useState(undefined);

  return (
    <Fragment>
      <FormGroup>
        <Label for="exampleEmail">C1 Name :</Label>
        <Input
          invalid
          onChange={a => {
            setName(a.target.value);
          }}
        />
        <FormFeedback invalid>{name}</FormFeedback>
      </FormGroup>
    </Fragment>
  );
};
export default C1;
