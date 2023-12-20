"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Heading from "@/app/utils/Heading/Heading";
import { ProductObject } from "@/app/utils/types/types";

export default function Prices() {
  const [value, setValue] = React.useState("1");

  return (
    <>
      <div className="flex flex-col gap-1 pb-1">
        <Heading heading="Prices" />

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={"100-150"}
              control={<Radio />}
              label={"$100-$150"}
            />
            <FormControlLabel
              value={"150-250"}
              control={<Radio />}
              label={"$150-$250"}
            />
            <FormControlLabel
              value={"250-350"}
              control={<Radio />}
              label={"$350-$450"}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
