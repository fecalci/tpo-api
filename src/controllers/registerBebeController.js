import urlWebServices from './webServices';

export const registerBebe= async function(datas)
{
    //url webservices
    let url = urlWebServices.registerBebe;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('fecha', datas.fecha);
    formData.append('altura', datas.altura);
    formData.append('peso', datas.peso)
    formData.append('cabeza', datas.cabeza)
    formData.append('name', datas.name)
    formData.append('sangre', datas.sangre);
    formData.append('alergias', datas.alergias);
    formData.append('enfermedad', datas.enfermedad)
    formData.append('sexo', datas.sexo)
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
                    localStorage.setItem("x",data.createdBebe.token);
                    //guardo usuario logueado
                    let user = data.createdBebe.user;
                    localStorage.setItem("sexo",user.sexo);
                    localStorage.setItem("name",user.name);
                    localStorage.setItem("enfermedad",user.enfermedad);
                    localStorage.setItem("alergias",user.alergias);
                    localStorage.setItem("fecha",user.fecha);
                    localStorage.setItem("altura",user.altura);
                    localStorage.setItem("peso",user.peso);
                    localStorage.setItem("cabeza",user.cabeza);
                    localStorage.setItem("sangre",user.sangre);
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

export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
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