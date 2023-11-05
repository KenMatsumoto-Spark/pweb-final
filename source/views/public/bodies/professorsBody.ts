export const professorsBody = `

<div class="row">

  <div class="col-lg-2"></div>
  <div class="col-lg-8">

    
    {{#professors.length}}
    <div class="courses-professors-box">
      <h2>Docentes - Fatec Sorocaba</h2>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Título</th>
          </tr>
        </thead>
        <tbody>
          {{#professors}}
          <tr>
            <th scope="row"><a href="http://lattes.cnpq.br/{{lattes}}">{{name}}</a></th>
            <td>{{title}}</td>
          </tr>
          {{/professors}}
        </tbody>
      </table>
    </div>
    {{/professors.length}}



  <div class="col-lg-2"></div>
</div>

`