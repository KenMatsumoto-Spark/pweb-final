export const coursesBody = `
<div class="row">

  <div class="col-lg-2"></div>
  <div class="col-lg-8">
    <section class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h1>{{title}}</h1>
      </div>
      <div>
        <h4 class="course-description">{{{description}}}</h4>
      </div>
    </section>
    <div class="coordenacao-box curricular-box d-flex flex-column justify-content-center">
      <h4>
        Coordenação:
      </h4>
      <h4>
        {{coordination.name}}
      </h4>
      <h4>email: {{coordination.email}}</h4>
    </div>
    
    <div class="curricular-box d-flex flex-column justify-content-center">
      {{#curriculars}}
      <h4 class="curriclar-link">
        <a href="{{link}}"><i class="bi bi-file-pdf"></i>Estrutura Curricular {{period}}</a> (carga horária: {{workload}} horas)
      </h4>
      {{/curriculars}}

      {{#extraLinks.length}}
      {{#extraLinks}}
      <h4 class="curriclar-link">
        <a href="{{link}}"><i class="bi bi-link-45deg"></i>{{title}}</a>
      </h4>

      {{/extraLinks}}
      {{/extraLinks.length}}
    </div>
    {{#professorsInfo.length}}
    <div class="courses-professors-box">
      <h2>Conheça os Professores deste Curso</h2>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Título</th>
          </tr>
        </thead>
        <tbody>
          {{#professorsInfo}}
          <tr>
            <th scope="row"><a href="http://lattes.cnpq.br/{{lattes}}">{{name}}</a></th>
            <td>{{title}}</td>
          </tr>
          {{/professorsInfo}}
        </tbody>
      </table>
    </div>
    {{/professorsInfo.length}}
  </div>


  <div class="col-lg-2"></div>
</div>

`