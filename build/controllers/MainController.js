"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _mustache = require('mustache'); var _mustache2 = _interopRequireDefault(_mustache);
var _commomSections = require('../views/commom/commomSections'); var _commomSections2 = _interopRequireDefault(_commomSections);
var _body = require('../views/public/home/body');
var _news = require('../data/news');
var _afatecBody = require('../views/public/bodies/afatecBody');
var _notFound = require('../views/public/bodies/notFound');
var _courses = require('../data/courses');
var _coursesBody = require('../views/public/bodies/coursesBody');
var _professors = require('../data/professors');
var _allCoursesBody = require('../views/public/bodies/allCoursesBody');
const MainController = _express.Router.call(void 0, )

const newsInOrder = _news.news.reverse()

const notFoundPage = _mustache2.default.render(_commomSections2.default.buildPage(_notFound.notFoundBody), { })
MainController.get('/', async (request, response) => {

  try {
    let carouselElement = ""
    let firstCarousel = true
    newsInOrder.slice(0, 5).forEach((news) => {
      if(news.title){
        carouselElement = carouselElement.concat(
          `<div class="carousel-item ${firstCarousel ? 'active' : ""}">
          <h2 class="newsBox">${news.title}</h2>
          <p class="newsBox">${news.text}</p>
          </div>`
        )
      } 
      firstCarousel = false
    })

    const outPut = _mustache2.default.render(_commomSections2.default.buildPage(_body.body), { carouselElement })
    return response.send(outPut)
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/afatec', async (request, response) => {
  try {
    const outPut = _mustache2.default.render(_commomSections2.default.buildPage(_afatecBody.afatecBody))
    return response.send(outPut)
    return response.render("public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/courses', async (request, response) => {
  try {

    const outPut = _mustache2.default.render(_commomSections2.default.buildPage(_allCoursesBody.allCoursesBody), {"limitLength" : function() {
      return function(text, render) {
        return render(text).substr(0,200) + '...';
      }
    }, courses: _courses.courses})
    return response.send(outPut)
    return response.render("public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/coursesx', async (request, response) => {
  try {

    const outPut = _mustache2.default.render(_commomSections2.default.buildPage(_allCoursesBody.allCoursesBody), {"limitLength" : function() {
      return function(text, render) {
        return render(text).substr(0,200) + '...';
      }
    }, courses: _courses.courses})
    // return response.send(outPut)
    return response.render("/public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/courses/:course', async (request, response) => {
  const { course } = request.params
  try {

    const courseInfo = _courses.courses.find((c) => c.url === course)
    console.log({courseInfo})
    if(!courseInfo) throw new Error('Curso não encontrado.')

    const professorsInfo = []
    courseInfo.professors.forEach((professor) => {
      professorsInfo.push( _professors.professors.find((professorInfo) => professorInfo.name == professor))
    })

    const outPut = _mustache2.default.render(_commomSections2.default.buildPage(_coursesBody.coursesBody),{ ...courseInfo, professorsInfo })
    return response.send(outPut)
  } catch (error) {
    console.log({error})
    return response.send(notFoundPage)
  }
})


exports. default = MainController
