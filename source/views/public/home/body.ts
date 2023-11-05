export const body = `
<section id="main-first-section" class="d-flex flex-column justify-content-center align-items-center">

  <div class="container" data-aos="fade-in">
    <h1>Seja bem-vindo a Fatec Sorocaba</h1>
    <div class="d-flex align-items-center">
      <i class="bx bxs-right-arrow-alt get-started-icon"></i>
      <a href="#" class="btn-get-started">mais sobre a instituição</a>
    </div>
  </div>

  <div class="container" data-aos="fade-in" style="text-align: center;">
    <h2 class="last-news">Últimas Notícias</h2>
  </div>

  <div class="container-fluid carousel-box">
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {{{carouselElement}}}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</section>
<section class="main-first-section d-flex flex-column justify-content-center align-items-center">

  <div class="icon-boxes position-relative">
    <div class="container position-relative">
      <div class="row gy-4 mt-5">

        <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-rocket-takeoff"></i></div>
            <h4 class="title"><a href="https://www.vestibularfatec.com.br/unidades-cursos/escola.asp?c=162" class="stretched-link">Vestibular</a></h4>
            <h5 class="description">Confira todas as novidades e atrualizações sobre nosso processo seletivo.</h5>
          </div>
        </div>

        <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-grid-3x3-gap-fill"></i></div>
            <h4 class="title"><a href="/courses" class="stretched-link">CURSOS</a></h4>
            <h5 class="description">Venha conhecer mais sobre nossos cursos.</h5>
          </div>
        </div>

        <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-newspaper"></i></div>
            <h4 class="title"><a href="" class="stretched-link">Noticias</a></h4>
            <h5 class="description">Novidades e Avisos.</h5>
          </div>
        </div>

        <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-book-half"></i></div>
            <h4 class="title"><a href="" class="stretched-link">Biblioteca</a></h4>
            <h5 class="description">Como se cadastrar, renovar e regulamentos.</h5>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
`