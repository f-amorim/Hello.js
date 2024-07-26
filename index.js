

import { imprime, pergunta } from "./Modules/createFile.cjs"
import { hello } from "./Modules/helloWorld.cjs"
import {autoria} from "./Modules/autor.cjs"

pergunta()
imprime()
autoria(hello("Jinx"))
    .then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })