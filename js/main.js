const formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(e) {
    e.preventDefault()

    let temErro = false

    let inputNome = document.querySelector('#nome')

    if(!inputNome.value){
        temErro = true
        inputNome.classList.add('inputError')

        let span = document.querySelector('#span-nome')
        span.innerText = 'Digite o nome corretamente'
    }else{
        inputNome.classList.remove('inputError')

        let span = document.querySelector('#span-nome')
        span.innerText = ''
    }

    let inputEmail = document.querySelector('#email')

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = document.querySelector('#span-email')
        span.innerText = 'Digite o email corretamente'
    }else{
        inputEmail.classList.remove('inputError')

        
        let span = document.querySelector('#span-email')
        span.innerText = ''
    }

    let inputCpf = document.querySelector('#cpf')

    if(!inputCpf.value){
        temErro = true
        inputCpf.classList.add('inputError')

        let span = document.querySelector('#span-cpf')
        span.innerText = 'Digite o número do CPF corretamente'
    }else{
        inputTel.classList.remove('inputError')

        let span = document.querySelector('#span-cpf')
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
}