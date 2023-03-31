import Button from "@mui/material/Button";

interface ButtonFunctionProps {
  symbol: any;
  onclick(): void;
}

export const ButtonFunction = ({ symbol, onclick }: ButtonFunctionProps) => {
  return (
    <Button variant="contained" color="secondary" onClick={onclick}>
      {symbol}
    </Button>
  );
};
