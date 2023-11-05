"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildPage = (body) => {
    return header.concat(navBar + body + footer);
};
const header = `<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head>
    <link rel="icon" href="../images/favicon.ico" type="image/x-icon"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.118.2">
    <title>Faculdade de Tecnologia de Sorocaba</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/navbar-static/">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">


    <style>
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(241, 137, 137, 0.1);
        border: solid rgba(245, 245, 245, 0.15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }

      .navbar-custom {
            background-color: #990000;
      }

      .navbar-custom .navbar-brand,
        .navbar-custom .navbar-text{
            color: white;
        }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="../home/navbar-static.css" rel="stylesheet">
    <link href="../home/style.css" rel="stylesheet">
  </head>
  <body>`;
const navBar = `    <section id="topbar" class="d-flex align-items-center">
<div class="container d-flex justify-content-center justify-content-md-between">
  <div class="contact-info d-flex align-items-center">
    <i class="bi d-flex align-items-center ">Faculdade de Tecnologia José Crespo Gonzales</a></i>
  </div>
</div>
</section>

<header id="header" class="d-flex align-items-center">
<div class="container d-flex align-items-center justify-content-between">

  <div class="logo">
    <h1><a href="/">FATEC Sorocaba</a></h1>
  </div>

  <nav id="navbar" class="navbar">
    <ul>
      <li class="dropdown"><a href="#"><span>A FATEC</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/afatec"><span class="bi bi-house"> A Fatec Sorocaba</span></a></li>
          <li><a href="#"><span class="bi bi-building"> Campus | Como Chegar</span></a></li>
          <li><a href="#"><span class="bi bi-person-badge"> Congregação</span></a></li>
          <li><a href="#"><span class="bi bi-mortarboard"> Corpo Docente</span></a></li>
          <li><a href="#"><span class="bi bi-calendar2-check"> Eventos e Certificados</span></a></li>
          <li><a href="#"><span class="bi bi-pie-chart"> Núcleos de Pesquisa</span></a></li>
          <li><a href="#"><span class="bi bi-pen"> Concurso, Processo Seletivo e Oferecimento</span></a></li>
          <li><a href="#"><span class="bi bi-graph-up"> CPA</span></a></li>
          <li><a href="#"><span class="bi bi-person-fill-exclamation"> CIPA</span></a></li>
          <li><a href="#"><span class="bi bi-lightning"> CICE</span></a></li>
          <li><a href="#"><span class="bi bi-chat-text"> Fale Conosco</span></a></li>
        </ul>
      </li>

      <li class="dropdown"><a href="#"><span>CURSOS</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/courses/ads"><span class="bi bi-pc-display-horizontal"> Análise e Desenvolvimento de Sistemas</span></a></li>
          <li><a href="/courses/ea"><span class="bi bi-car-front"> Eletrônica Automotiva</span></a></li>
          <li><a href="/courses/fm"><span class="bi bi-wrench-adjustable-circle"> Fabricação Mecânica</span></a></li>
          <li><a href="/courses/ge"><span class="bi bi-briefcase"> Gestão Empresarial - EAD</span></a></li>
          <li><a href="/courses/gq"><span class="bi bi-graph-up-arrow"> Gestão da Qualidade</span></a></li>
          <li><a href="/courses/log"><span class="bi bi-truck"> Logística</span></a></li>
          <li><a href="/courses/ma"><span class="bi bi-globe"> Manufatura Avançada</span></a></li>
          <li><a href="/courses/pmet"><span class="bi bi-fire"> Processos Metalúrgicos</span></a></li>
          <li><a href="/courses/pol"><span class="bi bi-funnel"> Polímeros</span></a></li>
          <li><a href="/courses/pmec"><span class="bi bi-gear"> Projetos Mecânicos</span></a></li>
          <li><a href="/courses/sb"><span class="bi bi-heart-pulse"> Sistemas Biomédicos</span></a></li>
        </ul>
      </li>

      <li class="dropdown"><a href="#"><span>DIRETORIA ACADEMICA</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#"><span class="bi bi-info-circle"> SIGA</span></a></li>
          <li><a href="#"><span class="bi bi-wifi"> Serviços Online</span></a></li>
          <li><a href="#"><span class="bi bi-clock"> Horário das Aulas</span></a></li>
          <li><a href="#"><span class="bi bi-building-fill-add"> Rematrícula</span></a></li>
          <li><a href="#"><span class="bi bi-calendar-week-fill"> Calendario de Aulas</span></a></li>
          <li><a href="#"><span class="bi bi-pencil"> Vagas Remanescentes</span></a></li>
          <li><a href="#"><span class="bi bi-bank"> Legislação</span></a></li>
          <li><a href="#"><span class="bi bi-journal-check"> ENADE</span></a></li>
          <li><a href="#"><span class="bi bi-diagram-3"> Estruturas Curriculares</span></a></li>
          <li><a href="#"><span class="bi bi-patch-question"> Perguntas e Respostas</span></a></li>
        </ul>
      </li>
      
      <li class="dropdown"><a href="#"><span>DIRETORIA ADMINISTRATIVA</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#"><span class="bi bi-people"> Recadastramento de Serviços</span></a></li>
          <li><a href="#"><span class="bi bi-journal-richtext"> Atestado de Rendimento de Servidores</span></a></li>
          <li><a href="#"><span class="bi bi-person-fill-add"> Cadastramento de Fornecedores</span></a></li>
          <li><a href="#"><span class="bi bi-car-front-fill"> Cadastramento de Veículos</span></a></li>
          <li><a href="#"><span class="bi bi-globe-americas"> Programa Mata Nativa</span></a></li>
          <li><a href="#"><span class="bi bi-envelope-at"> Email @fatec.sp.gov.br</span></a></li>
          <li><a href="#"><span class="bi bi-envelope-at"> Email @fatecsorocaba.edu.br</span></a></li>
        </ul>
      </li>
      <li class="dropdown"><a href="#"><span>ALUNOS</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#"><span class="bi bi-info-circle"> SIGA</span></a></li>
          <li><a href="#"><span class="bi bi-backpack-3"> Monitoria</span></a></li>
          <li><a href="#"><span class="bi bi-motherboard"> Iniciação Científica</span></a></li>
          <li><a href="#"><span class="bi bi-mortarboard"> Colação de Grau</span></a></li>
          <li><a href="#"><span class="bi bi-person-vcard"> Estágio</span></a></li>
          <li><a href="#"><span class="bi bi-envelope-at"> Email @fatec.sp.gov.br</span></a></li>
          <li><a href="#"><span class="bi bi-translate"> Idiomas Sem Fronteiras</span></a></li>
          <li><a href="#"><span class="bi bi-cloud-download"> Downloads</span></a></li>
          <li><a href="#"><span class="bi bi-book"> Manual de Convivência</span></a></li>
          <li><a href="#"><span class="bi bi-chat-right-dots"> Comunicação inclusiva CPS</span></a></li>
        </ul> 
      </li>

    </ul>
    <i class="bi bi-list mobile-nav-toggle"></i>
  </nav>
  
</div>
</header>`;
const footer = `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
<script src="../home/main.js"></script>
</body>

<footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-5 col-md-6 footer-contact">
        <h3>Faculdade de Tecnologia de Sorocaba</h3>
        <p>
          Av. Engenheiro Carlos Reinaldo Mendes, 2015<br>
          Alto da Boa Vista<br>
          Sorocaba/SP<br><br>
          <strong>Phone:</strong> (15) 3238-5266<br>
        </p>
      </div>

      <div class="col-lg-4 col-md-6 footer-links">
        <h4>Acesso Rápido</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">A Fatec</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Cursos</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Diretoria Academica</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Diretoria Administrativa</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Alunos</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Buscas Frequentes</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Perguntas e Respostas</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Fale Conosco</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Email Institucional</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">SIGA</a></li>
        </ul>
      </div>

    </div>
  </div>
</div>
</footer>
</html>`;
exports.default = { header, navBar, footer, buildPage };
