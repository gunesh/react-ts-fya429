import React, { Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
const C3 = (prop: any) => {
  const [name, setName] = useState(undefined);
  
  return (
    <Fragment>
      <FormGroup>
        <Label for="exampleEmail">C3 Name :</Label>
        <Input
          valid
          onChange={a => {
            setName(a.target.value);
          }}
        />
        <FormFeedback valid>{name}</FormFeedback>
      </FormGroup>
    </Fragment>
  );
};
export default C3;
