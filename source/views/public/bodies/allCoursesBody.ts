export const allCoursesBody = ` 
<div class="row">
<div class="col-lg-2"></div>
<div class="col-lg-8">
    <section class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h1>CURSOS</h1>
      </div>
      <div class="courses row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
      {{#courses}}
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="175"aria-label="Placeholder: Thumbnail"  src="{{image}}" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{{title}}</text></svg>
            <div class="card-body">
              <p class="card-text">{{#limitLength}}{{{description}}}{{/limitLength}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="vermais-btn btn btn-sm btn-outline-secondary" href="/courses/{{url}}">Ver mais...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {{/courses}}
      </div>
    </section>

  </div>
  <div class="col-lg-2"></div>

</div>`


