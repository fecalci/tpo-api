import {Component} from 'react';
import Table from 'react-bootstrap/Table';
import JsonData from '../data/vaccineData.json';
import Swal from 'sweetalert2';
import { Navigation } from './navigation'; 
import Button from "@material-ui/core/Button/index";
import {vaccine} from '../controllers/vaccineController';
     
class VaccineRegister extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false,
            email:localStorage.getItem("email"),
            bebe:localStorage.getItem("bebe"),
            fecha:'',
            centro_vac:'',
            vacuna:'',
            dosis:'',
            edad:'',   
            id:''         
        };

    }

    handleclick2= async function()
    {        
        let datos = {
          email:localStorage.getItem("email"),
          bebe:localStorage.getItem("bebe"),
          fecha:this.state.fecha,
          centro_vac:this.state.centro_vac,
          vacuna:this.state.vacuna,
          dosis:this.state.dosis,
          edad:this.state.edad
        }
        let crearVacuna = await vaccine(datos);
        if (crearVacuna)
        {
            alert("Vacuna creada OK");
        }
        if (!crearVacuna)
        {
            alert("ERROR creando vacuna");
        }
        
    }

    handleClick = (item,index,i) => {
        Swal.fire({
            title: 'Registremos tu vacuna!',
            html:
            '<input id="swal-input1" class="swal2-input" placeholder="Ingrese la fecha">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Ingrese el centro">',
            // input: 'text',
            // inputLabel:'Ingrese la fecha',            
            // inputAttributes: {
            //   autocapitalize: 'off'
            // },
            showCancelButton: true,            
            cancelButtonText:'Cancelar',
            confirmButtonText: 'Confirmar',
            showLoaderOnConfirm: true,
            preConfirm:() =>{
                return[
                this.state.fecha= document.getElementById('swal-input1').value,
                this.state.centro_vac= document.getElementById('swal-input2').value,
                this.state.vacuna = item.value[index],
                this.state.dosis=item.value["title"],
                this.state.edad=item.value[i]
            ]},
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `Felicitaciones, vacuna agregada con éxito!`,
              })
              this.handleclick2()
            }
          })
    }
    

    render(){
        return(            
            <div>
            <Navigation/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Table responsive bordered hover>
                <thead className="vaccineHeader">
                    <tr > 
                        <th>Edad/Vacunas</th>
                        <th>BCG</th>
                        <th>Hepatitis B</th>
                        <th>Neumococo Conjugada 13 valente(2)</th>
                        <th>Quíntuple o Pentavalente (3)</th>
                        <th>IPV(4)</th>
                        <th>Menigococo ACYW</th>
                        <th>Antigripal</th>
                        <th>Hepatitis A</th>
                        <th>Triple Viral (5)</th>
                        <th>Varicela</th>
                        <th>Triple Bacteriana Celular (6)</th>
                        <th>Triple Bacteriana Acelular (7)</th>
                        <th>Virus Papiloma Humano</th>
                        <th>Doble Bacteriana (8)</th>
                        <th>Fiebre Amarilla</th>
                        <th>Fiebre Hemorrágica Argentina</th>
                    </tr>
                </thead>
                <tbody className="tableRow">
                    {JsonData.rows.map((item,i) => (
                            <tr key={i}>                  
                                {Array.from({ length:17 }).map((_,index) => (  
                                    item.value[index]!=''?                 
                                    <td className="vaccineText">                                                                            
                                            <Button className="whiteButtons" onClick={() =>{this.handleClick(item, index,i)}}>
                                            {item.value[index]}
                                            </Button>                                                                                                                           
                                    </td>:
                                    <td className="vaccineText">                                                                                                                                                                                                  
                                    </td>                                    
                                ))}
                                
                            </tr>
                    ))}
                </tbody>
</Table> 
</div>
        )        
    }
}

export default VaccineRegister;