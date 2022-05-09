const express = require("express");
const app = express();

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

app.listen(3000, () =>
  console.log("Aplicação rodando em http://localhost:3000")
);
