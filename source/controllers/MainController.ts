import { Request, Response, Router } from 'express'
import mustache from 'mustache'
import commomSections from '../views/commom/commomSections'
import { body } from '../views/public/home/body'
import { news } from '../data/news'
import { afatecBody } from '../views/public/bodies/afatecBody'
import { notFoundBody } from '../views/public/bodies/notFound'
import { courses } from '../data/courses'
import { coursesBody } from '../views/public/bodies/coursesBody'
import { professors } from '../data/professors'
import { allCoursesBody } from '../views/public/bodies/allCoursesBody'
const MainController = Router()

const newsInOrder = news.reverse()

const notFoundPage = mustache.render(commomSections.buildPage(notFoundBody), { })
MainController.get('/', async (request: Request, response: Response) => {

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

    const outPut = mustache.render(commomSections.buildPage(body), { carouselElement })
    return response.send(outPut)
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/afatec', async (request: Request, response: Response) => {
  try {
    const outPut = mustache.render(commomSections.buildPage(afatecBody))
    return response.send(outPut)
    return response.render("public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/courses', async (request: Request, response: Response) => {
  try {

    const outPut = mustache.render(commomSections.buildPage(allCoursesBody), {"limitLength" : function() {
      return function(text, render) {
        return render(text).substr(0,200) + '...';
      }
    }, courses})
    return response.send(outPut)
    return response.render("public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/coursesx', async (request: Request, response: Response) => {
  try {

    const outPut = mustache.render(commomSections.buildPage(allCoursesBody), {"limitLength" : function() {
      return function(text, render) {
        return render(text).substr(0,200) + '...';
      }
    }, courses})
    // return response.send(outPut)
    return response.render("/public/home/index.html")
  } catch (error) {
    return response.send(notFoundPage)
  }
})

MainController.get('/courses/:course', async (request: Request, response: Response) => {
  const { course } = request.params
  try {

    const courseInfo = courses.find((c) => c.url === course)
    console.log({courseInfo})
    if(!courseInfo) throw new Error('Curso não encontrado.')

    const professorsInfo = []
    courseInfo.professors.forEach((professor) => {
      professorsInfo.push( professors.find((professorInfo) => professorInfo.name == professor))
    })

    const outPut = mustache.render(commomSections.buildPage(coursesBody),{ ...courseInfo, professorsInfo })
    return response.send(outPut)
  } catch (error) {
    console.log({error})
    return response.send(notFoundPage)
  }
})


export default MainController
