function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Fiona',
            dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            telefone: '666',
            ddd: 31
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(error, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    //null || "" || 0 === false
    if(error){
        console.log('DEU RUIM  em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.log('DEU RUIM  em TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.log('DEU RUIM  em ENDERECO', error)
                return;
            }
            console.log(`
                         Nome: ${usuario.nome},
                         Endereco: ${endereco.rua}, ${endereco.numero},
                         Telefone: ${telefone.ddd}, ${telefone.telefone}
                         `)
        })
    })
})
