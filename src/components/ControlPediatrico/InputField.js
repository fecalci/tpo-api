import React, { useState } from 'react';
// eslint-disable-next-line 
import {FormControl,Typography, Button, Grid,RadioGroup,TextField, Radio} from '@material-ui/core'
import { IconButton} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

export default function InputField(props){
// eslint-disable-next-line
    const {name,label,value}=props
// eslint-disable-next-line
    const[inputField,setInputField]= useState(
        [{first:'',last:''},])
    const handleChange=(index,e)=>{
        const values=[...inputField]
        values[index][e.target.name]=e.target.values
        setInputField(values)
    }
    const handleFields=()=>{
        debugger
        setInputField([...inputField,{first:'',last:''}])
    }
    const handleRemoveFields=(index)=>{
        const values=[...inputField]
        values.splice(index,1)
        setInputField(values)
    }
    return(
        <div>
            {inputField.map((inputField,index)=>(
                <div key={index}>
                    <TextField
                    name={name}
                    label={label}
                    variant='outlined'
                    value={inputField.first}
                    onChange={e=>handleChange(index,e)}
                    />
                    <TextField
                    name={name}
                    label={label}
                    variant='outlined'
                    value={inputField.last}
                    onChange={e=>handleChange(index,e)}
                    />
                    <IconButton
                    onClick={()=>handleRemoveFields(index)}>
                        <RemoveIcon/>
                    </IconButton>
                    <IconButton
                    onClick={()=>handleFields()}>
                        <AddIcon/>
                    </IconButton>
                </div>
            ))}
        </div>
        
        )
}