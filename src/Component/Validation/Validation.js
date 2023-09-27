
const Validation = (error) => {
    const regexName = /^[a-zA-Z\s']+$/u
    let newError = {}
    

    if (!regexName.test(error.name)) {
        newError.name = "enter a valid name"
    }
    if (error.password) {
        if (error.password.length < 8) {
            newError.password = "Más de 8 caracteres";
        }
        if (!/[!@#$%^&*]/.test(error.password)) {
            if (newError.password) {
                newError.password += ", Falta un carácter especial";
            } else {
                newError.password = "Falta un carácter especial";
            }
        }
        if (!/[a-z]/.test(error.password)) {
            if (newError.password) {
                newError.password += ", Falta al menos una letra minúscula";
            } else {
                newError.password = "Falta al menos una letra minúscula";
            }
        }
        if (!/\d/.test(error.password)) {
            if (newError.password) {
                newError.password += ", Falta al menos un número";
            } else {
                newError.password = "Falta al menos un número";
            }
        }
    }
    return newError
}

export default Validation
