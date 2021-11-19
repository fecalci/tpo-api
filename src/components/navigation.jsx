import { BrokenImageTwoTone } from "@material-ui/icons";
import React,{useState} from "react";
import Button from "@material-ui/core/Button/index";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getBebesByUserAndName} from '../controllers/registerBebeController'
import { getVacunasByUserAndBebe } from "../controllers/vaccineController";

export const Navigation = (props) => {
  const [value,setValue]=useState("")
  const[bebe,setBebe]=useState("")
  const hijos = JSON.parse(localStorage.getItem('Bebes'))

  const handleChange=e=>setValue(e) 

  function handleChange2(e){
    handleChange(e)    
    setBebe(e.target.value);
    let datos = {
      email: localStorage.getItem("email"),
      name: e.target.value
    }
    traerBebeSeleccionado(datos);
    console.log(`Option selected:`, datos);
}


  function handleChangeProfile(e){   
    let datos = {
      email: localStorage.getItem("email"),
      bebe: bebe
    }
    getVacunasByUserAndBebe(datos);
  }


 const traerBebeSeleccionado= async function(datos){
  let getbebe = await getBebesByUserAndName(datos);
}

  //alert(localStorage.getItem('email'));
  if (localStorage.getItem('email')){
      return ( <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
          Cal Pediatría
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#about' className='page-scroll'>
                Nosotros
              </a>
            </li> */}
            <li>
              <a href='/char' className='page-scroll'>
                Percentiles
              </a>
            </li>
            <li>
              <a href='/control' className='page-scroll'>
                Control Pediatrico 
              </a>
            </li>  
            <li>
              <a href='/vacreg' className='page-scroll'>
                Vacunacion
              </a>
            </li>  
            <li>
              <a href='/profile' className='page-scroll' onClick={() => { handleChangeProfile() }}>
                Perfil
              </a>
            </li> 
            <li>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"        
                onChange={handleChange2}
                value={value}
              >
                {hijos.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
                ))}                                
              </Select>
            </li>    
            <li>
            <a href='/' className='page-scroll' onClick={() => { localStorage.clear() }}>
                Sign Out
              </a>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
    )
  }
  console.log("LOCAL2",localStorage.getItem('email'));
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='/'>
            Cal Pediatría
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              {/* <li>
                <a href='#about' className='page-scroll'>
                  Nosotros
                </a>
              </li> */}
              <li>
                <a href='/char' className='page-scroll'>
                  Percentiles
                </a>
              </li>
              <li>
                <a href='/registro' className='page-scroll'>
                  Control Pediatrico 
                </a>
              </li>  
              <li>
                <a href='/vacreg' className='page-scroll'>
                  Vacunacion
                </a>
              </li>  
              {/* <li>
                <a href='#contact' className='page-scroll'>
                  Contacto
                </a>
              </li> */}
              <li>
                <a href='/login' className='page-scroll'>
                  Ingresar
                </a>
              </li>      
              <li>
                <a href='/profile' className='page-scroll'>
                  Perfil
                </a>
              </li>           
            </ul>
          </div>
        </div>
      </nav>
    )

  }
