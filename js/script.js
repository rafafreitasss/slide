import {SlideNav} from "./slide.js";

const slide = new SlideNav('.slide', '.slide-wrapper');

slide.init();

slide.addArrow('.prev', '.next');

// adicionei a classe que será de controle
slide.addControl('.custom-controls');