import { Container, Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { ButtonNumber } from "./Components/ButtonNumber";
import { ButtonFunction } from "./Components/ButtonFunction";
import { ClearButton } from "./Components/ClearButton";
import { Add, ArrowBack } from "@mui/icons-material";
import "./index.css";

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
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#535ba1", color: "background.paper", p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="textField"
              variant="outlined"
              value={value}
              className="Field"
            />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonFunction symbol={"+"} onclick={() => OnClickBtnFunc("+")} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonFunction symbol={"*"} onclick={() => OnClickBtnFunc("*")} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonFunction symbol={"-"} onclick={() => OnClickBtnFunc("-")} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonFunction symbol={"/"} onclick={() => OnClickBtnFunc("/")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={7} onclick={() => writeText("7")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={8} onclick={() => writeText("8")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={9} onclick={() => writeText("9")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={4} onclick={() => writeText("4")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={5} onclick={() => writeText("5")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={6} onclick={() => writeText("6")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={1} onclick={() => writeText("1")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={2} onclick={() => writeText("2")} />
          </Grid>
          <Grid item xs={4} md={4}>
            <ButtonNumber symbol={3} onclick={() => writeText("3")} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonNumber symbol={0} onclick={() => writeText("0")} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ClearButton symbol=<ArrowBack/> onclick={() => onClickBackBtn()} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ClearButton symbol={"Ce"} onclick={() => onCleanBtr()} />
          </Grid>
          <Grid item xs={3} md={3}>
            <ButtonFunction symbol={"="} onclick={() => OnClickMath()} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Field;
