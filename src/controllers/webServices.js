const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    registerBebe:urlApi +"api/users/bebe",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    guardarVacuna: urlApi + "api/",
    getBebesInicio: urlApi + "api/users/bebe",
    getBebe: urlApi + "api/users/bebeName",
    registerControl:urlApi + "api/control",
    getControles:urlApi + "api/control"
}

export default urlWebServices;