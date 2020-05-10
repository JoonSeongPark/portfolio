import Nav from "./nav/nav";
import Home from "./home/home";
import CommonComponent from "./commonComponent/commonComponent";
import Project from "./project/project";
import Footer from "./footer/footer";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { eduArr, actArr } from "./data";

import "./index.css";

library.add(faAngleUp);
dom.watch();

const nav = new Nav();
nav.render();
nav.goUp();
nav.onScoll();

const home = new Home();
home.render();

const education = new CommonComponent();
education.render("EDUCATION", eduArr);

const activity = new CommonComponent();
activity.render("ACTIVITY", actArr);

const project = new Project();
project.render("PROJECT");
project.click();

const footer = new Footer();
footer.render();
