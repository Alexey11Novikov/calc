import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ButtonFunctionProps {
  symbol: any;
  onclick(): void;
}

export const ButtonFunction = ({ symbol, onclick }: ButtonFunctionProps) => {
  return (
    <Button variant="contained" color="secondary" onClick={onclick}>
       <Typography variant="subtitle1">
        {symbol}
      </Typography>
    </Button>
  );
};
