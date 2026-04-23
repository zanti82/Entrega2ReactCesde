 
export function saveLocalStorage(key, value){
    //localStorage.setItem(key, value)   //ese valor tiene que viajar parseado a texto. 
    localStorage.setItem(key, JSON.stringify(value))
};

export function getLocalSotarge(key){
    let data = localStorage.getItem(key) //en data  guardamos el key del local storage
    return JSON.parse(data) // se parsea a json

};

export function removeLocalStorage(key){
    localStorage.removeItem(key)
}

