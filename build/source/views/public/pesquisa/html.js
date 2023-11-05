"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteText = void 0;
exports.siteText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pesquisa</title>
  <link rel="stylesheet" type="text/css" href="../pesquisa/style.css" />
</head>
<body>
  <div>
    <h1>Pesquisa de filme {{nome}}</h1>
  </div>
  <form action="" id="mainForm">
  <div class="formulario">
    <div class="formField">
      <label for="idade">Idade: </label>
      <input type="text" id="idade">
    </div>
    <div class="formField">
      <label for="sexo">Sexo: </label>
      <input type="radio" name="sexo" id="sexo" value="f">Feminino
      <input type="radio" name="sexo" id="sexo" value="m">Masculino
    </div>
    <div class="formField">
      <label for="opiniao">Opinião</label>
      <br>
      <input type="radio" name="opiniao" id="opiniao" value="1">1 - Péssimo
      <br>
      <input type="radio" name="opiniao" id="opiniao" value="2">2 - Regular
      <br>
      <input type="radio" name="opiniao" id="opiniao" value="3">3 - Bom
      <br>
      <input type="radio" name="opiniao" id="opiniao" value="4">4 - Ótimo
    </div>
    <div class="enviar">
      <button onclick="sendOpinion()">Enviar</button>
    </div>
    <div class="resultado">
      <button type="submit" onclick="Resultado()">Resultado</button>
      <div id="root"></div>
    </div>
  </div>
</form>
  <script src="pesquisa.js"></script>
</body>
</html>`;
