"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mustache_1 = __importDefault(require("mustache"));
const commomSections_1 = __importDefault(require("../views/commom/commomSections"));
const body_1 = require("../views/public/home/body");
const news_1 = require("../data/news");
const afatecBody_1 = require("../views/public/bodies/afatecBody");
const notFound_1 = require("../views/public/bodies/notFound");
const courses_1 = require("../data/courses");
const coursesBody_1 = require("../views/public/bodies/coursesBody");
const professors_1 = require("../data/professors");
const MainController = (0, express_1.Router)();
const newsInOrder = news_1.news.reverse();
const notFoundPage = mustache_1.default.render(commomSections_1.default.buildPage(notFound_1.notFoundBody), {});
MainController.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let carouselElement = "";
        let firstCarousel = true;
        newsInOrder.slice(0, 5).forEach((news) => {
            if (news.title) {
                carouselElement = carouselElement.concat(`<div class="carousel-item ${firstCarousel ? 'active' : ""}">
          <h2 class="newsBox">${news.title}</h2>
          <p class="newsBox">${news.text}</p>
          </div>`);
            }
            firstCarousel = false;
        });
        const outPut = mustache_1.default.render(commomSections_1.default.buildPage(body_1.body), { carouselElement });
        return response.send(outPut);
    }
    catch (error) {
        return response.send(notFoundPage);
    }
}));
MainController.get('/afatec', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const outPut = mustache_1.default.render(commomSections_1.default.buildPage(afatecBody_1.afatecBody));
        return response.send(outPut);
        return response.render("public/home/index.html");
    }
    catch (error) {
        return response.send(notFoundPage);
    }
}));
MainController.get('/courses/:course', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { course } = request.params;
    try {
        const courseInfo = courses_1.courses.find((c) => c.url === course);
        console.log({ courseInfo });
        if (!courseInfo)
            throw new Error('Curso não encontrado.');
        const professorsInfo = [];
        courseInfo.professors.forEach((professor) => {
            professorsInfo.push(professors_1.professors.find((professorInfo) => professorInfo.name == professor));
        });
        const outPut = mustache_1.default.render(commomSections_1.default.buildPage(coursesBody_1.coursesBody), Object.assign(Object.assign({}, courseInfo), { professorsInfo }));
        return response.send(outPut);
        return response.render("public/home/index.html");
    }
    catch (error) {
        console.log({ error });
        return response.send(notFoundPage);
    }
}));
exports.default = MainController;
