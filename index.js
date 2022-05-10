const express = require("express");
const app = express();

// Indica para o Express que estamos utilizando JSON na requisições
app.use(express.json());

// Criação do endpoint principal
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Heróis e Heroínas

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//               0                    1               2

// Read All (Ler todos os itens)
app.get("/herois", function (req, res) {
  res.send(herois);
});

// Create (Criar um item)
app.post("/herois", function (req, res) {
  // Obtemos o nome que foi enviado no body da requisição
  const item = req.body.nome;

  // Adicionamos esse item obtido dentro da lista de heróis
  herois.push(item);

  res.send("Item criado com sucesso!");
});

app.listen(3000, () =>
  console.log("Aplicação rodando em http://localhost:3000")
);
