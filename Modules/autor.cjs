import { rejects } from 'assert'
import { resolve } from 'path'

const fs = require('fs').promises
let filePath = "./createFile"


const  autoria = async (autor)=>{
   try{    
        fileHandle =  fs.open(filePath)
        await new Promise((resolve, reject)=>{
            if(typeof autor === String){ 
                resolve(fs.appendFile(filePath, autor))
            }else{reject(console.log("erro na atribuição de autoria"))}
        })
    
    }catch(err){console.log("erro: " + err)}
    fileHandle.close
}

module.exports = {autoria}