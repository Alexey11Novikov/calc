import Button from "@mui/material/Button";

interface ButtonsProps {
    symbol: any;
    onclick(): void;
}

export const Buttons = ({ symbol, onclick }: ButtonsProps) => {
    return (
        <Button variant="contained" style={{ width: '100%'}} onClick={onclick}>{symbol}</Button>
    )
}