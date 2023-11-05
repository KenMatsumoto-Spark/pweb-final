"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afatecBody = void 0;
const afatec_1 = require("../../../data/afatec");
let imagesSection = "";
afatec_1.afatec.images.forEach((img) => {
    imagesSection = imagesSection.concat(`
    <div class="afatec-img-box col-md-3 col-sm-6">
      <img class="afatec-img" src="${img}">
    </div>
    `);
});
exports.afatecBody = `
<section>
  <div class="row text-video">
    <div class="col-md-6">
      <h2>
        A FATEC
      </h2>
      <br>
      <h3>
        A Faculdade de Tecnologia de Sorocaba foi criada em 20/05/1970 pelo então Governador do Estado de São Paulo, Dr. Roberto Costa de Abreu Sodré. Foi a primeira escola pública de nível superior em Sorocaba
      </h3>
    </div>
    <div class="col-md-6">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe width="600" height="300" src="https://www.youtube.com/embed/nVqcaSVWh-s" title="Fatec Sorocaba" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    <div class="afatec-text col-md-12">
      <h3>
        ${afatec_1.afatec.text2}
      </h3>
    </div>
    <div class="afatec-text col-md-12">
      <h3>
        ${afatec_1.afatec.text3}
      </h3>
    </div>
    ${imagesSection}
    <div class="afatec-text col-md-12">
      <h3>
        ${afatec_1.afatec.text4}
      </h3>
    </div>
    <div class="afatec-text col-md-12">
      <h3>
        ${afatec_1.afatec.text5}
      </h3>
    </div>
    <div class="afatec-text col-md-12">
      <h3>
        ${afatec_1.afatec.text6}
      </h3>
    </div>
  </div>
</section>

`;
