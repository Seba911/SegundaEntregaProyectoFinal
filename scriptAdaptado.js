function pushNewPlayerInTopFive() {
    if (jugadorNuevo[0].puntajeFinal >= arrayTopFive[0].puntajeFinal) {
        arrayTopFive.unshift(jugadorNuevo[0]);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        console.log(jugadorNuevo[0])
        mostrarTopFive(true);
        showModalAlerts("Saliste 1ro! Sos el más simpsonmaniaco del Quizz!");
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[0].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[1].puntajeFinal) {
        arrayTopFive.splice(1, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        showModalAlerts("Saliste 2do! Por poco y salis primero!");
        cargarLocalStorage(arrayTopFive)
    } else if (arrayTopFive[1].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[2].puntajeFinal) {
        arrayTopFive.splice(2, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        showModalAlerts("Saliste 3ro! Formas parte del ranking igual!");
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[2].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[3].puntajeFinal) {
        arrayTopFive.splice(3, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        showModalAlerts("Saliste 4to!");
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[3].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[4].puntajeFinal) {
        arrayTopFive.splice(4, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        showModalAlerts("Saliste 5to!");
        cargarLocalStorage(arrayTopFive)

    } else (
        gif_HTML.src="",
        showModalAlerts(`Oh no! Tu puntaje no fue el suficiente para entrar en la cumbancha. \nGracias, vuelvan prontos!`)
    )

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hideDiv(id_div) {
    document.getElementById(id_div).className = "d-none"
}

function showDiv(id_div) {
    document.getElementById(id_div).className = "d-flex justify-content-center text-center align-items-center bg-dark "
}

class newPlayer {
    constructor(nombreJugador, puntajeFinal) {
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
    // getNombreJugador() {
    //     return `${this.nombreJugador}: `
    // }
    // getPuntajeFinal() {
    //     return `${this.puntajeFinal} puntos`
    // }
}

const ArrPreguntasHomero = [
    // Pregunta 1 Apellido
    {
        id: 1,
        nombre: "Homero",
        question: "¿Cuál es el apellido de Homero?",
        help: "el apellido",
        opciones:
            [
                { text: "SIMPSON", correct: true, color: "btn-primary" },
                { text: "THOMPSON", correct: false, color: "btn-success" },
                { text: "FLIMPSON", correct: false, color: "btn-danger" },
                { text: "PATIÑO", correct: false, color: "btn-warning" },
            ],
        op_A_apellidoCorrecta: "SIMPSON",
        op_B_apellido: "THOMPSON",
        op_C_apellido: "FLIMPSON",
        op_D_apellido: "PATIÑO",
        duplicaAnswer: false,
        letraCorrecta: "A"
    },
    // Pregunta 2 Edad
    {
        id: 2,
        nombre: "HOMERO",
        question: "¿Cuál es la edad de Homero?",
        help: "la edad",
        opciones:
            [
                { text: "37", correct: false },
                { text: "36", correct: true },
                { text: "40", correct: false },
                { text: "33", correct: false },
            ],
        op_A_edad: "37",
        op_B_edadCorrecta: "36",
        op_C_edad: "40",
        op_D_edad: "33",
        duplicaAnswer: true,
        letraCorrecta: "B"
    },
    // Pregunta 3 Bebida
    {
        id: 3,
        nombre: "HOMERO",
        question: "¿Cuál es la bebida favorita de Homero?",
        help: "la bebida favorita",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "CERVEZA DUFF",
        op_C_bebida: "MANAOS",
        op_D_bebida: "CERVEZA BUZZ",
        duplicaAnswer: false,
        letraCorrecta: "B"
    },
    // Pregunta 4 Amigos
    {
        id: 4,
        nombre: "HOMERO",
        question: "¿Quíen es el mejor amigo Homero?",
        help: "mejor amigo",
        op_A_mejorAmigoCorrecta: "BARNEY",
        op_B_mejorAmigo: "MOE",
        op_C_mejorAmigo: "LENNY",
        op_D_mejorAmigo: "CARL",
        duplicaAnswer: true,
        letraCorrecta: "A"
    },
]

const ArrPreguntasMilhouse = [
    // Pregunta 1 Apellido
    {
        id: 1,
        nombre: "MILHOUSE",
        question: "¿Cuál es el apellido de Milhouse?",
        help: "el apellido",
        op_A_apellido: "MILHOUSE",
        op_B_apellidoCorrecta: "VAN HOUTEN",
        op_C_apellido: "VAN BUUREN",
        op_D_apellido: "BUBBIE",
        duplicaAnswer: false,
        letraCorrecta: "B"
    },
    // Pregunta 2 Edad
    {
        id: 2,
        nombre: "MILHOUSE",
        question: "¿Cuál es la edad de Milhouse?",
        help: "la edad",
        op_A_edad: "10",
        op_B_edad: "5",
        op_C_edad: "8",
        op_D_edadCorrecta: "11",
        duplicaAnswer: true,
        letraCorrecta: "D"
    },
    // Pregunta 3 Bebida
    {
        id: 3,
        nombre: "MILHOUSE",
        question: "¿Cuál es la bebida favorita de Milhouse?",
        help: "la bebida favorita",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "LECHE DE RATA",
        op_C_bebida: "MALTEADAS KRUSTY",
        op_D_bebida: "MALTEADA CON EXTRA AZUCAR DE APU",
        duplicaAnswer: true,
        letraCorrecta: "B"
    },
    // Pregunta 4 Amigos
    {
        id: 4,
        nombre: "MILHOUSE",
        question: "¿Quién el mejor amigo de Milhouse?",
        help: "el mejor amigo",
        op_A_mejorAmigoCorrecta: "BART",
        op_B_mejorAmigo: "NELSON",
        op_C_mejorAmigo: "LISA",
        op_D_mejorAmigo: "RAFA",
        duplicaAnswer: false,
        letraCorrecta: "A"
    },
]

const ArrPreguntasRandom = [
    {
        id: 1,
        nombre: "Random",
        question: "Comer una ________ es como llevar un buen matrimonio",
        op_A_frase: "sandía",
        op_B_fraseCorrecta: "naranja",
        op_C_frase: "hamburguesa",
        op_D_frase: "mandarina",
        duplicaAnswer: false,
    },
    {
        id: 2,
        nombre: "Random",
        question: "¡¿Robar?!? ¿¡Cómo pudiste?!? ¿¡No Aprendiste nada del que nos da los sarmones en la iglesia, ese...",
        op_A_frase: "Skinner?!",
        op_B_frase: "Ned Flanders?!",
        op_C_frase: "Reverendo Alegría?!",
        op_D_fraseCorrecta: "Capitán NoseQué?!",
        duplicaAnswer: false,
    },
    {
        id: 3,
        nombre: "Random",
        question: "Mi Homero no es comunista.. podrá ser mentiroso..",
        op_A_frase: "puerco, peronista, pero núnca una estrella de porno",
        op_B_frase: "comunista, pero núnca una estrella de rock",
        op_C_fraseCorrecta: "puerco, comunista, pero núnca una estrella de porno",
        op_D_frase: "comunista, pero núnca una estrella de porno",
        duplicaAnswer: false,
    },
    {
        id: 4,
        nombre: "Random",
        question: "Nadie puede arruinar las vacaciones más que yo, y talvez...",
        op_A_frase: "Bart",
        op_B_fraseCorrecta: "El muchacho",
        op_C_frase: "Homero",
        op_D_frase: "El Barto",
        duplicaAnswer: true,
    }
]


const playerOneInTopFive = new newPlayer("Jorge", 590)
const playerTwoInTopFive = new newPlayer("Alejandra", 550)
const playerThreeInTopFive = new newPlayer("Mariana", 500)
const playerFourInTopFive = new newPlayer("Agustin", 400)
const playerFiveInTopFive = new newPlayer("Ramiro", 355)


function cargarLocalStorage(top5) {
    localStorage.setItem("jugadoresTop5", JSON.stringify(top5))
}

function mostrarTopFive(refreshTopFive) {
    if (refreshTopFive === true) {
        const oldLi = document.querySelector('#topFive');
        removeAllChildNodes(oldLi);
        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} puntos`;
            liTopFive.append(li)
        }
    } else {
        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} puntos`;
            liTopFive.append(li)
        }

    }

}

function showModalAlerts(textAlert){
    modal.setAttribute('class', 'modalMainBox');
    modalChild.setAttribute('class', 'showModaal')
    modalText.innerText = `${textAlert}`
}

function nuevoJugador() {
    let arrNuevoJugador

    let nuevoJugador = document.getElementById("nuevoJugador")
    if (nuevoJugador.value == null || nuevoJugador.value == "") {
       
        showModalAlerts("Sin nombre no hay cumbancha")
    } else {
        hideDiv("divShowForm")
        nuevoJugador = new newPlayer(nuevoJugador.value, puntaje)
        arrNuevoJugador = nuevoJugador
        jugadorNuevo.push(arrNuevoJugador)
    }


    console.log(jugadorNuevo)

    return arrNuevoJugador
}

let arrayTopFive = []
let listaEnLocalStorageTop5 = JSON.parse(localStorage.getItem("jugadoresTop5"))
let liTopFive = document.getElementById("topFive")

function localStorageOrNot(){
    if (listaEnLocalStorageTop5) {
        arrayTopFive = listaEnLocalStorageTop5
        mostrarTopFive(true)
    } else {
        arrayTopFive.push(playerOneInTopFive, playerTwoInTopFive, playerThreeInTopFive, playerFourInTopFive, playerFiveInTopFive)
        mostrarTopFive(false)
    }
}

// Al iniciar el programa verifica si hay una lista de jugadores en el localStorage
// en caso que no haya, crea la lista por players que se crean por defecto 
localStorageOrNot()

console.log(arrayTopFive)
console.log(listaEnLocalStorageTop5)

let puntaje = 350
let intentos = 3
let respuestaCorrecta = 50
let duplicarPuntaje = false


const ingresarQuizz = document.querySelector("#ingresarQuizz")

const personaje1 = document.querySelector("#personaje1")
const personaje2 = document.querySelector("#personaje2")
// const personaje3 = document.querySelector("#personaje3")
const personaje4 = document.querySelector("#personaje4")

const jugadorNuevo = []
const arrPersonajeElegido = []


// Es el form para ingresar nuevos jugadores a la base de datos local
ingresarQuizz.onclick = (e) => {
    e.preventDefault();
    let nombreJugador = document.getElementById("nombreJugador")
    let nameJugador = nuevoJugador()
    nameJugador == null || nameJugador == "" ? "" : showDiv("divElegirPersonaje");
    nombreJugador.innerHTML = `<h4>Hola ${nameJugador.nombreJugador}</h4>`

}


function elegirPersonaje(idPersonajeElegido) {
    let personajeElegido = document.getElementById(idPersonajeElegido)
    let personajeSelected = document.getElementById("personajeSelected")

    hideDiv("divElegirPersonaje")
    showDiv("divPersonajeSeleccionado")
    
    personajeSelected.innerHTML = `<h4>Elegiste a <span style="font-weight:700; color:rgba(255,209,0,1)">${personajeElegido.innerText}</span></h4>`

    arrPersonajeElegido.push(personajeElegido.innerText)
}


const personajeSelected = document.querySelector("#personajeSelected")
const volverBoton = document.querySelector("#volver")
const comenzarQuizz = document.querySelector("#comenzarQuizz")
const questionNumber_HTML = document.getElementById("questionNumber")
const question_HTML = document.getElementById("question")
const opcionA_HTML = document.getElementById("opcionA")
const opcionB_HTML = document.getElementById("opcionB")
const opcionC_HTML = document.getElementById("opcionC")
const opcionD_HTML = document.getElementById("opcionD")
const intentos_HTML = document.getElementById("intentos")
const puntaje_HTML = document.getElementById("puntaje")


let modal = document.getElementById("modalBox");
let btn = document.getElementById("myBtn");
let modalChild = document.getElementById("modalChild");
let modalText = document.querySelector("#modalChild h3");
let gif_HTML = document.getElementById("imgGifs")


personaje1.onclick = () => {
    elegirPersonaje("personaje1")
}

personaje2.onclick = () => {
    elegirPersonaje("personaje2")
}
// personaje3.onclick = () => {
//     elegirPersonaje("personaje3")
// }
personaje4.onclick = () => {
    elegirPersonaje("personaje4")
}

volverBoton.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divElegirPersonaje")
    arrPersonajeElegido.pop()
}


function showModalError(intento) {
    modal.setAttribute('class', 'modalMainBox');
    modalChild.setAttribute('class', 'showModaal')
    if (intento == 2 || intento == 1) {
        modalText.innerText = `DOH! \nTe quedan ${intento} intentos`
    } else if (intentos === 0) {
        gif_HTML.src="./images/gifPiedraVerguenza.gif"
        modalText.innerText = `Has perdido! Eres expulsado de la sociedad de simpsonmaniacos para siempre! 
       Y como humillacion final, tendrás que irte de quizz, \njalando la piedra de la verguenza! 
       \nTu puntaje final fue ${puntaje}`
       modalText.style.fontSize = "1em"
       modalText.style.padding = "10px"
       modalText.style.width= "600px"
    }
}

modal.onclick = function (event) {
    if (event.target == modal) {
        modalChild.setAttribute('class', 'hideModal')
        setTimeout(() => {
            modal.setAttribute('class', 'disp-none');
        }, 500);

    }
}

function createButtonContainer(buttonType, buttonColor, option){
    buttonType.className = `mx-2 btn ${buttonColor}`
    buttonType.style.padding = "15px 50px 15px 50px"
    buttonType.style.fontSize = "1.4em"
    buttonType.value = `${option}`
    buttonType.innerText = `${option}`

}

function removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber){
        createButtonA.remove()
        createButtonB.remove()
        createButtonC.remove()
        createButtonD.remove()
        createQuestion.remove()
        questionNumber.remove()
}


// En esta funcion se pasan todos los parametros para validar las respuestas y tambien se crean los botones correspondientes a los que
// se les pasa por medio de parametros varios de sus valores
// Falta optimizarla, pero funciona
function quizzForm(questionID, question, answer, opcionA, opcionB, opcionC, opcionD, duplica, arrayLength) {

    intentos_HTML.textContent = `Intentos: ${intentos}`
    puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`

    let createQuestion = document.createElement("h3")
    createQuestion.className = "text-white"
    createQuestion.textContent = `${question}`

    let questionNumber = document.createElement("h6")
    questionNumber.textContent = `PREGUNTA ${questionID} DE ${arrayLength}`
    questionNumber.className="text-white"
 

    let createButtonA = document.createElement("button")
    createButtonContainer(createButtonA, "btn-primary", opcionA)

    let createButtonB = document.createElement("button")
    createButtonContainer(createButtonB, "btn-success", opcionB)

    let createButtonC = document.createElement("button")
    createButtonContainer(createButtonC, "btn-danger", opcionC)

    let createButtonD = document.createElement("button")
    createButtonContainer(createButtonD, "btn-warning", opcionD)

    console.log(createButtonA)

    let valueOpcionA = opcionA_HTML.appendChild(createButtonA)
    let valueOpcionB = opcionB_HTML.appendChild(createButtonB)
    let valueOpcionC = opcionC_HTML.appendChild(createButtonC)
    let valueOpcionD = opcionD_HTML.appendChild(createButtonD)
    question_HTML.appendChild(createQuestion)
    questionNumber_HTML.appendChild(questionNumber)


    valueOpcionA.onclick = () => {
        correctOrNot(answer, valueOpcionA.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)

    }
    valueOpcionB.onclick = () => {
        correctOrNot(answer, valueOpcionB.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionC.onclick = () => {
        correctOrNot(answer, valueOpcionC.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionD.onclick = () => {
        correctOrNot(answer, valueOpcionD.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }

    console.log(valueOpcionA.value)

}


// Ésta funcion mágica hace que pase de una pregunta a otra
// No esta optimizada, pero funciona
function goNextQuestion(id) {
    if (arrPersonajeElegido[0] === "Homero") {
        if (id === 2) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[1].id,
                ArrPreguntasHomero[1].question,
                ArrPreguntasHomero[1].op_B_edadCorrecta,
                ArrPreguntasHomero[1].op_A_edad,
                ArrPreguntasHomero[1].op_B_edadCorrecta,
                ArrPreguntasHomero[1].op_C_edad,
                ArrPreguntasHomero[1].op_D_edad,
                ArrPreguntasHomero[1].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else if (id === 3) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[2].id,
                ArrPreguntasHomero[2].question,
                ArrPreguntasHomero[2].op_B_bebidaCorrecta,
                ArrPreguntasHomero[2].op_A_bebida,
                ArrPreguntasHomero[2].op_B_bebidaCorrecta,
                ArrPreguntasHomero[2].op_C_bebida,
                ArrPreguntasHomero[2].op_D_bebida,
                ArrPreguntasHomero[2].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else if (id === 4) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[3].id,
                ArrPreguntasHomero[3].question,
                ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasHomero[3].op_B_mejorAmigo,
                ArrPreguntasHomero[3].op_C_mejorAmigo,
                ArrPreguntasHomero[3].op_D_mejorAmigo,
                ArrPreguntasHomero[3].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        if (id === 2) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasMilhouse[1].id,
                ArrPreguntasMilhouse[1].question,
                ArrPreguntasMilhouse[1].op_D_edadCorrecta,
                ArrPreguntasMilhouse[1].op_A_edad,
                ArrPreguntasMilhouse[1].op_B_edad,
                ArrPreguntasMilhouse[1].op_C_edad,
                ArrPreguntasMilhouse[1].op_D_edadCorrecta,
                ArrPreguntasMilhouse[1].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else if (id === 3) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasMilhouse[2].id,
                ArrPreguntasMilhouse[2].question,
                ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                ArrPreguntasMilhouse[2].op_A_bebida,
                ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                ArrPreguntasMilhouse[2].op_C_bebida,
                ArrPreguntasMilhouse[2].op_D_bebida,
                ArrPreguntasMilhouse[2].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else if (id === 4) {
            // swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasMilhouse[3].id,
                ArrPreguntasMilhouse[3].question,
                ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasMilhouse[3].op_B_mejorAmigo,
                ArrPreguntasMilhouse[3].op_C_mejorAmigo,
                ArrPreguntasMilhouse[3].op_D_mejorAmigo,
                ArrPreguntasMilhouse[3].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Random") {
        if (id === 2) {
            quizzForm(
                ArrPreguntasRandom[1].id,
                ArrPreguntasRandom[1].question,
                ArrPreguntasRandom[1].op_D_fraseCorrecta,
                ArrPreguntasRandom[1].op_A_frase,
                ArrPreguntasRandom[1].op_B_frase,
                ArrPreguntasRandom[1].op_C_frase,
                ArrPreguntasRandom[1].op_D_fraseCorrecta,
                ArrPreguntasRandom[1].duplicaAnswer,
                ArrPreguntasRandom.length
                )
        } else if (id === 3) {
            quizzForm(
                ArrPreguntasRandom[2].id,
                ArrPreguntasRandom[2].question,
                ArrPreguntasRandom[2].op_C_fraseCorrecta,
                ArrPreguntasRandom[2].op_A_frase,
                ArrPreguntasRandom[2].op_B_frase,
                ArrPreguntasRandom[2].op_C_fraseCorrecta,
                ArrPreguntasRandom[2].op_D_frase,
                ArrPreguntasRandom[2].duplicaAnswer,
                ArrPreguntasRandom.length
                )
         } else if (id === 4) {
            quizzForm(
                ArrPreguntasRandom[3].id,
                ArrPreguntasRandom[3].question,
                ArrPreguntasRandom[3].op_B_fraseCorrecta,
                ArrPreguntasRandom[3].op_A_frase,
                ArrPreguntasRandom[3].op_B_fraseCorrecta,
                ArrPreguntasRandom[3].op_C_frase,
                ArrPreguntasRandom[3].op_D_frase,
                ArrPreguntasRandom[3].duplicaAnswer,
                ArrPreguntasRandom.length
                )
        } else {
            pushNewPlayerInTopFive()
        }
    
    }
    


}

function stackPuntaje(ultimoPuntaje, respuestaCorrecta, doble, tryingIntentos) {
    if (doble === false && tryingIntentos === 3) {
        showModalAlerts(`Correcto! \nVas bien! Tu puntaje actual es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta)}`)
    } else if (doble === true && tryingIntentos === 3) {
        showModalAlerts(`Correcto! \nDuplicaste tu puntaje! Ahora tenes ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2} puntos`)
    } else if (doble === true && tryingIntentos === 2) {
        showModalAlerts(`Correcto! \nDuplicaste tu puntaje! \nPero debido que ya tienes ${tryingIntentos - 1} error, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25}`)
    } else if (doble === true && tryingIntentos === 1) {
        showModalAlerts(`Correcto! \nDuplicaste tu puntaje! \nPero debido que ya tienes ${tryingIntentos + 1} errores, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25}`)
    } else if (tryingIntentos === 2) {
        showModalAlerts(`Respuesta correcta! \nDebido que tuviste ${tryingIntentos - 1} error, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 25}`)
    } else if (tryingIntentos === 1) {
        showModalAlerts(`Respuesta correcta! \nDebido que tuviste ${tryingIntentos + 1} errores, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 35}`)
    } else if (tryingIntentos === 1 && ultimoPuntaje < 0) {
        showModalAlerts(`Perdiste por puntaje negativo, tu puntaje final fue ${ultimoPuntaje}`)
    } else {
        showModalAlerts(`Perdiste error, tu puntaje final fue ${ultimoPuntaje}`)
    }

    puntaje = ultimoPuntaje // puntaje se guarda y cambia su valor
    jugadorNuevo[0].puntajeFinal = ultimoPuntaje
    duplicarPuntaje = false // duplicarPuntaje pasa a false en caso que una respuesta tenga el duplicarPuntaje en true
    intentos = tryingIntentos // intentos se guarda y cambia su valor a los intentos de fallo que tendria para las proximas preguntas

    // if (intentos === 0 && (piedrasDelTriunfo === 2 || piedrasDelTriunfo === 1)){
    //     piedrasDelTriunfo = piedrasDelTriunfo - 1
    // } else if (piedrasDelTriunfo === 0){
    //     piedrasDelTriunfo = piedrasDelTriunfo
    // }
    console.log(tryingIntentos + " en StackPuntaje")

    console.log(jugadorNuevo[0])
}

comenzarQuizz.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divPreguntas")
    showHearts(intentosHearts, heart1,heart2,heart3)
    console.log(arrPersonajeElegido)
    if (arrPersonajeElegido[0] === "Homero") {
        // swal(`Pregunta ${ArrPreguntasHomero[0].id}`)
        quizzForm(
            ArrPreguntasHomero[0].id,
            ArrPreguntasHomero[0].question,
            ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_B_apellido,
            ArrPreguntasHomero[0].op_C_apellido,
            ArrPreguntasHomero[0].op_D_apellido,
            ArrPreguntasHomero[0].duplicaAnswer,
            ArrPreguntasHomero.length
        )

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        // swal(`Pregunta ${ArrPreguntasMilhouse[0].id}`)
        quizzForm(
            ArrPreguntasMilhouse[0].id,
            ArrPreguntasMilhouse[0].question,
            ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
            ArrPreguntasMilhouse[0].op_A_apellido,
            ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
            ArrPreguntasMilhouse[0].op_C_apellido,
            ArrPreguntasMilhouse[0].op_D_apellido,
            ArrPreguntasMilhouse[0].duplicaAnswer,
            ArrPreguntasMilhouse.length
        )

    } else if (arrPersonajeElegido[0] === "Random"){
        quizzForm(
            ArrPreguntasRandom[0].id,
            ArrPreguntasRandom[0].question,
            ArrPreguntasRandom[0].op_B_fraseCorrecta,
            ArrPreguntasRandom[0].op_A_frase,
            ArrPreguntasRandom[0].op_B_fraseCorrecta,
            ArrPreguntasRandom[0].op_C_frase,
            ArrPreguntasRandom[0].op_D_frase,
            ArrPreguntasRandom[0].duplicaAnswer,
            ArrPreguntasRandom.length
        )
    }
}

let heart1 = document.getElementById("heart1")
let heart2 = document.getElementById("heart2")
let heart3 = document.getElementById("heart3")
let intentosHearts = document.getElementById("intentosHearts")

function showHearts(intentosHearts, heart1,heart2,heart3){
    heart1.style.display = "block"
    heart2.style.display = "block"
    heart3.style.display = "block"
    intentosHearts.style.display = "block"
}

function changeHeartColor(heart){
    heart.style.color = "#eaeaea"
    heart.style.transition = ".5s ease"
}

function correctOrNot(answer, value, duplica) {
    console.log(answer)
    console.log(value)

    if (answer !== value) {
        intentos--
        if (intentos == 2) {
            showModalError(intentos)
            changeHeartColor(heart3)
            // alert(`Tenes ${intentos} intentos`)
        } else if (intentos == 1){
            showModalError(intentos)
            changeHeartColor(heart2)

        }
        console.log(intentos)
        if (intentos === 0) {
            hideDiv("divPreguntas")
            showModalError(intentos)
            changeHeartColor(heart1)
            // alert(`Has perdido! Eres expulsado de la sociedad de simpsonmaniacos para siempre! 
            //      \nY como humillacion final, quedaras atrapado en el while infinito, \njalando el bucle de la verguenza! 
            //     \n\nTu puntaje final fue ${puntaje}`);
        }

    } else {
        console.log("Correcto!")
        
        // puntaje += respuestaCorrecta
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, intentos)
        jugadorNuevo[0].puntajeFinal = puntaje
        console.log(jugadorNuevo[0])
    }

    return intentos
}

