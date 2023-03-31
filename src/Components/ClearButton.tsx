import Button from "@mui/material/Button";

interface ClearButtonProps {
  symbol: any;
  onclick(): void;
}

export const ClearButton = ({ symbol, onclick }: ClearButtonProps) => {
  return (
    <Button variant="contained" color="inherit" onClick={onclick}>
      {symbol}
    </Button>
  );
};
