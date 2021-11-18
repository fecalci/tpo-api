import {Component} from 'react';
import Table from 'react-bootstrap/Table';
import JsonData from '../data/vaccineData.json';
import Swal from 'sweetalert2';
     
class VaccineRegister extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false
        };

    }

    handleClick = (e) => {
        e.preventDefault();
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
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `Felicitaciones, vacuna agregada con éxito!`
              })
            }
          })
    }

    render(){

        return(
            <div>
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
                                    <td className="vaccineText">
                                            <button className="whiteButtons" onClick={this.handleClick}>
                                            {item.value[index]}
                                            </button>                                                   
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