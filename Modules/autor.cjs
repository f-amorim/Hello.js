

const fs = require('fs').promises
let filePath = "./createFile"


const  autoria = async (autor)=>{
    
   try{    
        fileHandle =  fs.open(filePath,'a')
        await new Promise((resolve, reject)=>{
            if(autor != null){ 
                resolve(fs.appendFile(filePath, autor))
                console.log("autoria adicionada")
            }else{reject(console.log("erro na atribuição de autoria"))}
        })
    
    }catch(err){console.log("erro: " + err)}
    fileHandle.close

    
    
 
}    


   


module.exports = {autoria}