import TextField from "@mui/material/TextField";
import React from "react";

interface TextFieldProps {
  label:string,
  name:string,
  value:string,
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void

}

export default function TextFieldComponent(props: TextFieldProps) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        variant="outlined"
        size="small"
      />
    </>
  );
}
