import Button from "@mui/material/Button";

interface ButtonNumberProps {
  symbol: any;
  onclick(): void;
}

export const ButtonNumber = ({ symbol, onclick }: ButtonNumberProps) => {
  return (
    <Button variant="contained" onClick={onclick}>
      {symbol}
    </Button>
  );
};
