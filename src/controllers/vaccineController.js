import urlWebServices from './webServices';


export const vaccine = async function(datos)
{
    //url webservices
    let url = urlWebServices.guardarVacuna;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', datos.email);
    formData.append('bebe', datos.bebe);
    formData.append('fecha', datos.fecha);
    formData.append('centro_vac', datos.centro_vac);
    formData.append('vacuna', datos.vacuna);
    formData.append('dosis', datos.dosis);
    formData.append('edad', datos.edad);
    
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
export const getImagenesByUser = async function()
{
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    
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
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}