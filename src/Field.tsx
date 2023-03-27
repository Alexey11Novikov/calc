import { Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Buttons } from './Components/Button';


const Field = () => {
    const [value, setValue] = useState<string>('');
    const [func, setFunction] = useState<string>('');

    const OnClickBtn = (text: string) => {
        switch (text) {
            case '+': onClickSum('+'); break;
            case '-': onClickDiffer('-'); break;
            case '/': onClickDivis('/'); break;
            case '*': onClickMult('*'); break;
        }
        setValue(`${(value + text).replace(/^0+/, '')}`);
    }

    // +
    const onClickSum = (type: string) => {
        setFunction(type);
    }
    // *
    const onClickMult = (type: string) => {
        setFunction(type);
    }
    // -
    const onClickDiffer = (type: string) => {
        setFunction(type);
    }
    // /
    const onClickDivis = (type: string) => {
        setFunction(type);
    }

    const onCleanBtr = () => {
        setValue('');
    }

    const onClickBackBtn = () => {
        if (value !== '') {
            let deletedNumber = value.slice(0, value.length - 1);
            setValue(deletedNumber);
        }
    };

    const OnClickMath = () => {

    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField id="field" variant="outlined" value={value} style={{ width: '100%', margin: '5px' }} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'+'} onclick={() => OnClickBtn('+')} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'*'} onclick={() => OnClickBtn('*')} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'-'} onclick={() => OnClickBtn('-')} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'/'} onclick={() => OnClickBtn('/')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={7} onclick={() => OnClickBtn('7')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={8} onclick={() => OnClickBtn('8')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={9} onclick={() => OnClickBtn('9')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={4} onclick={() => OnClickBtn('4')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={5} onclick={() => OnClickBtn('5')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={6} onclick={() => OnClickBtn('6')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={1} onclick={() => OnClickBtn('1')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={2} onclick={() => OnClickBtn('2')} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Buttons symbol={3} onclick={() => OnClickBtn('3')} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={0} onclick={() => OnClickBtn('0')} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'<-'} onclick={() => onClickBackBtn()} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'Ce'} onclick={() => onCleanBtr()} />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Buttons symbol={'='} onclick={() => OnClickMath()} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Field;