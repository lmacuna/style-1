
const form = document.querySelector("#form")


form.addEventListener('submit', (e) => {

    e.preventDefault()
    nombre = document.querySelector('[name=nombre]').value
    email = document.querySelector('[name=email]').value
    var r = window.confirm("Enviar datos?")

    
    if (r === true) {

        if (nombre !== "" && email !== "") {
            return (document.querySelector("#mostrar").innerText = 'Enviando registro...',

                setTimeout(() => {
                    buscarDatos(nombre, email)
                }, 3000), e.target.reset(),limpiar())
        } else if (nombre === "" || email === "") {
            document.querySelector("#mostrar").innerHTML = '<span style="color:red;font-weight:bold;animation: lowmessage 4s">Falta completar uno o mas campos</span>'
            document.querySelector("#ok-nombre").innerHTML = '<span style="color:red">X</span>'
            document.querySelector("#ok-email").innerHTML = '<span style="color:red">X</span>'
            setTimeout(() => {
                
                document.querySelector("#mostrar").innerText = 'Respuesta aqui'
            }, 5000)
        }
    } else if (r === false) {
        alert("Registro cancelado")
    }


})


function saludo() {
    console.log("Hello world")
}

const usuarios = [{ nombre: 'lucas', email: 'lucas@live' }]


const buscarDatos = (nombre, email) => {


    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre || usuarios[i].email === email) {
            document.querySelector("#mostrar").innerText = 'Usuario existente!!!'
            setTimeout(() => {
                document.querySelector("#mostrar").innerText = 'Respuesta aqui'
                nombre=""
                email=""
            }, 4000);
        } else {
            mostrarDatos(nombre, email)

        }
    }






}


const mostrarDatos = (nombre, email) => {
    return (document.querySelector("#mostrar").innerHTML = `<span style="animation: lowmessage 4s">Registrado con exito &#x2713;</span><br><span style="animation: lowmessage 4s">  Nombre: ${nombre}</span><br><span style="animation: lowmessage 4s"> Email: ${email}</span>`,
        setTimeout(() => {
            document.querySelector("#mostrar").innerText = 'Respuesta aqui'
            nombre=""
            email=""
        }, 7000))
}




const inputNombre = document.querySelector('#nombre')

inputNombre.addEventListener('input', (e) => {

    if (e.target.name === 'nombre') {
        if (e.target.value !== "") {
            document.querySelector("#ok-nombre").innerHTML = '&#x2713;'
        } else if (e.target.value === "") {
            document.querySelector("#ok-nombre").innerHTML = ''
        }
    }



})

const inputEmail = document.querySelector('#email')

inputEmail.addEventListener('input', (e) => {

    if (e.target.name === 'email') {
        if (e.target.value !== "") {
            document.querySelector("#ok-email").innerHTML = '&#x2713;'
        } else if (e.target.value === "") {
            document.querySelector("#ok-email").innerHTML = ''
        }
    }



})


const limpiar=()=>{
    document.querySelector("#ok-email").innerHTML = ''
    document.querySelector("#ok-nombre").innerHTML = ''
}

