import React from "react";
import { Phone, validatePhone } from "@availity/phone";

const Test = (prop: any) => {
  
  return (
    <Phone
          name={prop.name}
          label={prop.label}
          country="US"
          value={prop.v}
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
  );
};
export default Test;
