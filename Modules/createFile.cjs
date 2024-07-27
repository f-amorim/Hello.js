const fs = require('fs').promises
const readline= require('readline')


let filePath = "./createFile"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}  
)



//pergunta oa usuario o que será escrito no arquivo
const pergunta = () => {rl.question("Escreva uma sentença: (time limit 10s)\n",
    (conteudo)=>{
        try {
            console.log(`"${conteudo}" será escrito no arquivo ${filePath}`)
            fs.writeFile(filePath, conteudo, 'utf8')

        } catch (err) { console.log(err)} 
    }
) }



const leia = fs.readFile(filePath, 'utf-8')


const imprime = ()=>{
    console.log(leia)
    
}



module.exports = {
    pergunta,
    imprime

}