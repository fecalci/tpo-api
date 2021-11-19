import urlWebServices from './webServices';

export const registerControl= async function(datas)
{
    //url webservices
    let url = urlWebServices.registerControl;
    //armo json con datos
    const nameBebe= localStorage.getItem('ActualBebe')
    const formData = new URLSearchParams();
    formData.append('fecha_control', datas.fecha_control);
    formData.append('altura', datas.altura);
    formData.append('peso', datas.peso)
    formData.append('cabeza', datas.cabeza)
    formData.append('name', localStorage.getItem('ActualBebeName'))
    formData.append('resultado', datas.resultado)
    formData.append('observacion', datas.observacion);
    formData.append('medicamento', datas.medicamento)
    formData.append('estudio', datas.estudio)
    formData.append('email',localStorage.getItem('email'))
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.createdControl.token);
                    //guardo usuario logueado
                    let user = data.createdControl.user;
                    console.log('llegue Aca1')
                    localStorage.setItem("fecha_control",datas.fecha_control);
                    localStorage.setItem("altura",datas.altura);
                    localStorage.setItem("peso",datas.peso);
                    localStorage.setItem("medicamento",datas.medicamento);
                    localStorage.setItem("observacion",datas.observacion);
                    localStorage.setItem("cabeza",datas.cabeza);
                    localStorage.setItem("resultado",datas.resultado);
                    localStorage.setItem("estudio",datas.estudio);
                    console.log('llegue Aca2')
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getBebesByUser = async function()
{
    let url = urlWebServices.getBebesInicio;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    
    try
    {
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaBebe = data.data.docs;
            let nombres= []
            const nombre= listaBebe.map((bebe) => {
                nombres.push(bebe.name)
            })
            localStorage.setItem("Bebes",JSON.stringify(nombres));
            return listaBebe;
        }
        else
        {
            let vacio=[];
            console.log("No hay bebes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getBebesByUserAndName = async function(datos)
{
    let url=urlWebServices.getBebe;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    formData.append('name', datos.name);  
    try
    {
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("Traemos Bebe DATA",data);
            let listaBebe = data.data.docs;
            localStorage.setItem("ActualBebe",JSON.stringify(listaBebe));
            return listaBebe;
        }
        else
        {
            let vacio=[];
            console.log("No hay bebes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getControlesByBebe = async function()
{
    let url = urlWebServices.getControles;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    formData.append('name',localStorage.getItem('ActualBebeName'))
    
    try
    {
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaControl = data.data.docs;
            let nombres= []
            let controles=[]
            const nombre= listaControl.map((control) => {
                nombres.push(control.fecha_control)
                controles.push(control)
            })
            localStorage.setItem("Controles",JSON.stringify(nombres));
            localStorage.setItem("ControlesFull",JSON.stringify(controles));
            return listaControl;
        }
        else
        {
            let vacio=[];
            console.log("No hay Controles")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}
export const getControlesByFecha = async function()
{
    let url = urlWebServices.getControles;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    formData.append('name',localStorage.getItem('ActualBebeName'))
    
    try
    {
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaControl = data.data.docs;
            let nombres= []
            const nombre= listaControl.map((control) => {
                nombres.push(control.fecha_control)
            })
            localStorage.setItem("Controles",JSON.stringify(nombres));
            return listaControl;
        }
        else
        {
            let vacio=[];
            console.log("No hay Controles")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}