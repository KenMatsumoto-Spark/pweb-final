const buildPage = (body: string) => {
  return header.concat(navBar + body + footer)
}

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
body {
  min-height: 75rem;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #313030;
}

a {
  color: #990000;
  text-decoration: none;
}

a:hover {
  color: #ff7e54;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #990000;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #ff774a;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Top Bar
--------------------------------------------------------------*/
#topbar {
  background: #39312f;
  font-size: 10px;
  padding: 0;
  color: white;
  height: 30px;
}

#topbar .contact-info i {
  font-style: normal;
  color: white;
}

#topbar .contact-info i a,
#topbar .contact-info i span {
  padding-left: 5px;
  color: #fff;
}

#topbar .contact-info i a {
  line-height: 0;
  transition: 0.3s;
}

#topbar .contact-info i a:hover {
  color: #990000;
}

#topbar .cta a {
  color: #fff;
  background: #990000;
  padding: 10px 20px;
  display: inline-block;
  transition: 0.3s;
}

#topbar .cta a:hover {
  background: #ff6b3b;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 70px;
  transition: all 0.5s;
  z-index: 997;
  background: #fff;
}

#header.header-fixed {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

#header .logo h1 {
  font-size: 28px;
  margin: 0;
  line-height: 0;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #990000;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

.scrolled-offset {
  margin-top: 70px;
}

#main {
  z-index: 3;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #990000;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #990000;
}

.navbar .getstarted,
.navbar .getstarted:focus {
  background: #990000;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}

.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
  color: #fff;
  background: #ff6b3b;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #ecdfdf;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 6px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: #990000;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #473d3a;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(43, 37, 35, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #473d3a;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover>a {
  color: #990000;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover>a {
  color: #990000;
}

.navbar-mobile .dropdown>.dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# main-first-section Section
--------------------------------------------------------------*/
#main-first-section {
  width: 100%;
  height: 60vh;
  background: url("https://guiadovestibulinho.com.br/wp-content/uploads/2021/11/246839_1.jpg") center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  padding: 0;
  margin-bottom: -120px;
}

#main-first-section:before {
  content: "";
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#main-first-section .container {
  z-index: 2;
}

#main-first-section h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#main-first-section .newsBox {
  margin: 0 200px;
}
#main-first-section .newsText {
  margin-top: 10px;
}

#main-first-section h2 {
  color: white;
  margin-bottom: 50px;
  font-size: 24px;
}

#main-first-section .carousel-item {
  color: white;
  margin-bottom: 50px;
  margin-top: 50px;
  height: 200px;
}

#main-first-section .carousel-box {
  background-color: #31303060;
}

#main-first-section .last-news {
  padding-top: 10px;
  color: white;
}

#main-first-section .get-started-icon {
  font-size: 24px;
  background: #990000;
  padding: 14px;
  color: #fff;
  border-radius: 50px;
  position: relative;
  z-index: 5;
  box-shadow: 10px 2px 15px rgba(0, 0, 0, 0.1);
}

#main-first-section .btn-get-started {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  transition: 0.5s;
  margin-left: -10px;
  padding: 8px 26px 8px 26px;
  color: #fff;
  background: #f0e7e500;
  border-radius: 50px;
  position: relative;
  z-index: 4;
}

#main-first-section .btn-get-started:hover {
  background: #990000;
}

@media (min-width: 1024px) {
  #main-first-section {
    background-attachment: fixed;
  }
}

@media (max-width: 1024px),
(max-height: 768px) {
  #main-first-section {
    margin-bottom: -150px;
    height: 80vh;
  }
}

@media (max-width: 768px) {
  #main-first-section {
    height: 80vh;
  }

  #main-first-section h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #main-first-section h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media (max-height: 640px) {
  #main-first-section {
    height: 120vh;
  }

}


.main-first-section .icon-boxes {
  padding-bottom: 60px;
}

@media (min-width: 1200px) {
  .main-first-section .icon-boxes:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(50% + 20px);
  }
}

@media (max-width: 700px) {
  #main-first-section .newsBox {
    margin: 0 50px;
  }
}

.main-first-section .icon-box {
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #990000;
  box-shadow: 0 0 29px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  height: 100%;
  width: 100%;
  text-align: center;
}

.main-first-section .icon-box .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.main-first-section .icon-box .title a {
  color: #ffffff;
  transition: 0.5s;
}

.main-first-section .icon-box .description {
  color: #ffffff;
  transition: 0.5s;
}

.main-first-section .icon-box .icon {
  margin-bottom: 20px;
  padding-top: 10px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  font-size: 48px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.6);
}

.main-first-section .icon-box:hover {
  background: #ffffff;
}

.main-first-section .icon-box:hover .title a,
.main-first-section .icon-box:hover .description,
.main-first-section .icon-box:hover .icon {
  color: #990000;
}
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #fff9f7;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 0;
  font-family: "Poppins", sans-serif;
  color: #990000;
}

.section-title p {
  margin-bottom: 0;
}

.text-video {
  margin: 10px 40px;
}

.afatec-text{
  margin: 7px;
}

.afatec-img-box{
  margin: 10px auto;
}

.afatec-img{
  width: 200px;
  height: 100px;
}

.course-description{
  margin: 10px 50px;
  text-align: justify;
}

.curricular-box{
  margin: 10px 50px;
  align-items: left;
}

.coordenacao-box{
  margin: 10px 50px;
  align-items: left;
}

.courses-professors-box{
  margin: 20px auto;
}

.card-title text{
  font-size: 0.6rem;
}

.card-text{
  font-size: 0.7rem;
}

.vermais-btn{
  color: #990000;
  border-color: #990000;
}

.vermais-btn:hover{
  background-color: #990000;
  border-color: #990000;
}
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: white;
  font-size: 14px;
  background: #990000;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #990000;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h4 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: white;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: white;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: white;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #ffffff;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: black;
}

#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #313030;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #990000;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #990000;
  color: #fff;
  text-decoration: none;
}
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
  <body>`

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
      <li class="dropdown"><a href="/afatec"><span>A FATEC</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/afatec"><span class="bi bi-house"> A Fatec Sorocaba</span></a></li>
          <li><a href="/building"><span class="bi bi-building"> Campus | Como Chegar</span></a></li>
          <li><a href="/building"><span class="bi bi-person-badge"> Congregação</span></a></li>
          <li><a href="/professors"><span class="bi bi-mortarboard"> Corpo Docente</span></a></li>
          <li><a href="/building"><span class="bi bi-calendar2-check"> Eventos e Certificados</span></a></li>
          <li><a href="/building"><span class="bi bi-pie-chart"> Núcleos de Pesquisa</span></a></li>
          <li><a href="/building"><span class="bi bi-pen"> Concurso, Processo Seletivo e Oferecimento</span></a></li>
          <li><a href="/building"><span class="bi bi-graph-up"> CPA</span></a></li>
          <li><a href="/building"><span class="bi bi-person-fill-exclamation"> CIPA</span></a></li>
          <li><a href="/building"><span class="bi bi-lightning"> CICE</span></a></li>
          <li><a href="/building"><span class="bi bi-chat-text"> Fale Conosco</span></a></li>
        </ul>
      </li>

      <li class="dropdown"><a href="/courses"><span>CURSOS</span> <i class="bi bi-chevron-down"></i></a>
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

      <li class="dropdown"><a href="/building"><span>DIRETORIA ACADEMICA</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/building"><span class="bi bi-info-circle"> SIGA</span></a></li>
          <li><a href="/building"><span class="bi bi-wifi"> Serviços Online</span></a></li>
          <li><a href="/building"><span class="bi bi-clock"> Horário das Aulas</span></a></li>
          <li><a href="/building"><span class="bi bi-building-fill-add"> Rematrícula</span></a></li>
          <li><a href="/building"><span class="bi bi-calendar-week-fill"> Calendario de Aulas</span></a></li>
          <li><a href="/building"><span class="bi bi-pencil"> Vagas Remanescentes</span></a></li>
          <li><a href="/building"><span class="bi bi-bank"> Legislação</span></a></li>
          <li><a href="/building"><span class="bi bi-journal-check"> ENADE</span></a></li>
          <li><a href="/building"><span class="bi bi-diagram-3"> Estruturas Curriculares</span></a></li>
          <li><a href="/building"><span class="bi bi-patch-question"> Perguntas e Respostas</span></a></li>
        </ul>
      </li>
      
      <li class="dropdown"><a href="/building"><span>DIRETORIA ADMINISTRATIVA</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/building"><span class="bi bi-people"> Recadastramento de Serviços</span></a></li>
          <li><a href="/building"><span class="bi bi-journal-richtext"> Atestado de Rendimento de Servidores</span></a></li>
          <li><a href="/building"><span class="bi bi-person-fill-add"> Cadastramento de Fornecedores</span></a></li>
          <li><a href="/building"><span class="bi bi-car-front-fill"> Cadastramento de Veículos</span></a></li>
          <li><a href="/building"><span class="bi bi-globe-americas"> Programa Mata Nativa</span></a></li>
          <li><a href="/building"><span class="bi bi-envelope-at"> Email @fatec.sp.gov.br</span></a></li>
          <li><a href="/building"><span class="bi bi-envelope-at"> Email @fatecsorocaba.edu.br</span></a></li>
        </ul>
      </li>
      <li class="dropdown"><a href="/building"><span>ALUNOS</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="/building"><span class="bi bi-info-circle"> SIGA</span></a></li>
          <li><a href="/building"><span class="bi bi-backpack-3"> Monitoria</span></a></li>
          <li><a href="/building"><span class="bi bi-motherboard"> Iniciação Científica</span></a></li>
          <li><a href="/building"><span class="bi bi-mortarboard"> Colação de Grau</span></a></li>
          <li><a href="/building"><span class="bi bi-person-vcard"> Estágio</span></a></li>
          <li><a href="/building"><span class="bi bi-envelope-at"> Email @fatec.sp.gov.br</span></a></li>
          <li><a href="/building"><span class="bi bi-translate"> Idiomas Sem Fronteiras</span></a></li>
          <li><a href="/building"><span class="bi bi-cloud-download"> Downloads</span></a></li>
          <li><a href="/building"><span class="bi bi-book"> Manual de Convivência</span></a></li>
          <li><a href="/building"><span class="bi bi-chat-right-dots"> Comunicação inclusiva CPS</span></a></li>
        </ul> 
      </li>

    </ul>
    <i class="bi bi-list mobile-nav-toggle"></i>
  </nav>
  
</div>
</header>`

const footer = `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
<script>
/**
* Template Name: Flexor
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
</script>
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
          <li><i class="bx bx-chevron-right"></i> <a href="/afatec">A Fatec</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/courses">Cursos</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Diretoria Academica</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Diretoria Administrativa</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Alunos</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Buscas Frequentes</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Perguntas e Respostas</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Fale Conosco</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">Email Institucional</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/building">SIGA</a></li>
        </ul>
      </div>

    </div>
  </div>
</div>
</footer>
</html>`

export default { header, navBar, footer, buildPage}