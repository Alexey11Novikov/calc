import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Buttons } from "./Components/Button";

const Field = () => {
  const [value, setValue] = useState<string>("");
  const [func, setFunction] = useState<string>("");

  const OnClickBtn = (text: string) => {
    switch (text) {
      case "+":
        if (func === "") {
          writeText("+");
        }
        onClickSum("+");
        break;
      case "-":
        if (func === "") {
          writeText("-");
        }
        onClickDiffer("-");
        break;
      case "/":
        if (func === "") {
          writeText("/");
        }
        onClickDivis("/");
        break;
      case "*":
        if (func === "") {
          writeText("*");
        }
        onClickMult("*");
        break;
    }
  };

  const writeText = (text: string) => {
    setValue(`${(value + text).replace(/^0+/, "")}`);
  };

  // +
  const onClickSum = (type: string) => {
    setFunction(type);
  };
  // *
  const onClickMult = (type: string) => {
    setFunction(type);
  };
  // -
  const onClickDiffer = (type: string) => {
    setFunction(type);
  };
  // /
  const onClickDivis = (type: string) => {
    setFunction(type);
  };

  const onCleanBtr = () => {
    setValue("");
    setFunction("");
  };

  const onClickBackBtn = () => {
    if (value !== "") {
      let deletedNumber = value.slice(0, value.length - 1);
      setValue(deletedNumber);
    }
  };

  const OnClickMath = () => {
    console.log(value)
    if (func !== "") {
        let x = parseInt(value);
     
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            id="field"
            variant="outlined"
            value={value}
            style={{ width: "100%", margin: "5px" }}
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"+"} onclick={() => OnClickBtn("+")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"*"} onclick={() => OnClickBtn("*")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"-"} onclick={() => OnClickBtn("-")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"/"} onclick={() => OnClickBtn("/")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={7} onclick={() => writeText("7")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={8} onclick={() => writeText("8")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={9} onclick={() => writeText("9")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={4} onclick={() => writeText("4")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={5} onclick={() => writeText("5")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={6} onclick={() => writeText("6")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={1} onclick={() => writeText("1")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={2} onclick={() => writeText("2")} />
        </Grid>
        <Grid item xs={4} md={4}>
          <Buttons symbol={3} onclick={() => writeText("3")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={0} onclick={() => writeText("0")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"<-"} onclick={() => onClickBackBtn()} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"Ce"} onclick={() => onCleanBtr()} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"="} onclick={() => OnClickMath()} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Field;
