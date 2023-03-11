export function CheckEmail(email, password){
    return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
}

export function CheckPass(password){
    return password.length > 7
}