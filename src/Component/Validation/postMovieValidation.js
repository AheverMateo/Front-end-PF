export const postMovieValidation = (inputName, inputValue) => {

    if(inputName==="title") {
        if(inputValue==="") return ""
        if(inputValue.length > 35) return "Debe tener 35 caracteres como máximo";
        if(!/^[A-Z]/.test(inputValue)) return "Debe comenzar con mayúscula";
        else return "";
    };
    if(inputName==="duration") {
        if(inputValue==="") return ""
        if(!/^[0-9]+$/.test(inputValue)) return "Debe ser un número";
        else return "";
    };
    if(inputName==="year") {
        if(inputValue==="") return ""
        if(!/^[0-9]+$/.test(inputValue)) return "Debe ser un número";
        if(inputValue.length !== 4) return "Ingresa un año válido";
        else return "";
    };
    if(inputName==="description") {
        if(inputValue==="") return ""
        if(inputValue < 100) return "Debe tener 100 caracteres como mínimo";
        if(inputValue > 500) return "Debe tener 500 caracteres como máximo";
        else return "";
    };
    if(inputName==="language") {
        if(inputValue==="") return ""
        if(inputValue.length > 15) return "Máximo 15 caracteres";
        else return "";
    };
    if(inputName==="image") {
        if(inputValue==="") return ""
        const urlRegex = /^(https?:\/\/|ftp:\/\/)[^\s/$.?#].[^\s]*$/;
        if(!urlRegex.test(inputValue)) return "Ingrese un URL de imagen válido"
        else return "";
    };
    if(inputName="trailer"){
        if(inputValue==="")return "";
        const trailerRegex = /^https?:\/\/[^\s/$.?#].[^\s]*\.mp4$/;
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/;
        if(!trailerRegex.test(inputValue) && !youtubeRegex.test(inputValue)) return "Ingrese un URL de video válido"
        else return "";
    }
    return "";
};