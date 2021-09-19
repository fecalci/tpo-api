import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";

export default function LoginInputs(props) {
    return (
        <TextField
            error={props.error !== ''}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            margin="normal"
            variant="outlined"
            type={props.type}
            fullWidth
            helperText={props.error}
            placeholder={props.label}
            InputProps={{
                startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
            }}
        />
    );
}
