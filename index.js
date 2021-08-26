function obterUsuario(){
    //quando der algum problema -> reject(ERRO)
    //quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            //return reject(new Error('DEU RUIM DE VERDADE!'))
            
            return resolve({
                id: 1,
                nome: 'Fiona',
                dataNascimento: new Date()
            })
        },1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(()=>{
            return resolve({
                telefone: '666',
                ddd: 31
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    }, 2000)
}


const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos a função .then
//para manipular erros, usamos o .catch
usuarioPromise
    .then(function (usuario) {
    return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultado) {
        console.log('resultado', resultado)
    })
    .catch(function(error) {
        console.error('DEU RUIM', error)
    })

/*
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
*/
