import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Buttons } from "./Components/Button";
import './App.css';

const Field = () => {
  const [value, setValue] = useState<string>("");
  const [func, setFunction] = useState<string>("");

  const OnClickBtnFunc = (text: string) => {
    if (func === "") {
      writeText(text);
      setFunction(text);
    }
  };

  const writeText = (text: string) => {
    setValue(`${(value + text).replace(/^0+/, "")}`);
  };

  const onCleanBtr = () => {
    setValue("");
    setFunction("");
  };

  const onClickBackBtn = () => {
    if (value !== "") {
      let deletedNumber = value.slice(0, value.length - 1);
      setValue(deletedNumber);
    } else {
      setValue("");
      setFunction("");
    }
  };

  const OnClickMath = () => {
    if (func !== "") {
      let x = value.split(/([())=/*+-])/g);
      let res = 0;
      switch (func) {
        case "+":
          res = Math.abs(parseInt(x[0]) + parseInt(x[2]));
          setValue(String(res));
          break;
        case "-":
          res = Math.abs(parseInt(x[0]) - parseInt(x[2]));
          setValue(String(res));
          break;
        case "/":
          res = Math.abs(parseInt(x[0]) / parseInt(x[2]));
          setValue(String(res));
          break;
        case "*":
          res = Math.abs(parseInt(x[0]) * parseInt(x[2]));
          setValue(String(res));
          break;
      }
    }
  }

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
          <Buttons symbol={"+"} onclick={() => OnClickBtnFunc("+")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"*"} onclick={() => OnClickBtnFunc("*")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"-"} onclick={() => OnClickBtnFunc("-")} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Buttons symbol={"/"} onclick={() => OnClickBtnFunc("/")} />
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
