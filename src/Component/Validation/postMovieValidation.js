export const postMovieValidation = (inputName, inputValue) => {

    if(inputName==="title") {
        if(inputValue.length > 35) return "Debe tener 35 caracteres como máximo";
        if(!/^[A-Z]/.test(inputValue)) return "Debe comenzar con mayúscula";
        else return "";
    };
    if(inputName==="duration") {
        if(!/^[0-9]+$/.test(inputValue)) return "Debe ser un número";
        else return "";
    };
    if(inputName==="year") {
        if(!/^[0-9]+$/.test(inputValue)) return "Debe ser un número";
        if(inputValue.length !== 4) return "Ingresa un año válido";
        else return "";
    };
    if(inputName==="description") {
        if(inputValue < 100) return "Debe tener 100 caracteres como mínimo";
        if(inputValue > 500) return "Debe tener 500 caracteres como máximo";
        else return "";
    };
    if(inputName==="language") {
        if(typeof inputValue !== "string") return "Solo se permiten letras en este campo";
        if(inputValue.length > 15) return "Máximo 15 caracteres";
        else return "";
    };
    if(inputName==="image") {
        if(!new URL(inputValue)) return "Ingrese un URL de imagen válido";
        else return "";
    };
};