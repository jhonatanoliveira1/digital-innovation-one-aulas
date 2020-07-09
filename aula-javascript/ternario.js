let isValid = true;

//Sem ternario
function verify(isValid) {
    if (isValid){
        return true;
    }else {
        return false;
    }
}

//Com ternario
const resulte = isValid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado);