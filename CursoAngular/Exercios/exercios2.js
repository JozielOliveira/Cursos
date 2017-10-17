let variavel = (pessoa, callback)=>{
    pessoa  =  `${pessoa} é show`
    callback(pessoa)
}

variavel('Joziel',nome=>console.log(nome))