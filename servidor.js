const express  = require("express");

const app = express();

let ALUNOS = [
    {id:1, nome: "Bernardo", curso: "Desenvolvimento de sistemas"},
    {id:2, nome: "Camily", curso: "Redes de computadores"},
    {id:3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Maria", curso:"Administração"},
    {id: 5, nome: "Marjory", curso:"Desenvolvimento de sistemas "},
]
app.get("/",(req,res) =>{
res.json({
message:"API Alunos funcionando"
  })
});
app.get("/alunos", (req, res)=>{
    res.json(ALUNOS);
});
const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor inicado com sucesso");
    console.log(`https://localhost:${PORTA}`);
})