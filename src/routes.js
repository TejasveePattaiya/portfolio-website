// import DefaultPage from "./views/DefaultPage";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Project from "./views/Project";
import Services from "./views/Services";
import Skill from "./views/Skill";
const routes = [
  // {
  //   type: "route",
  //   name: "DefaultPage",
  //   key: "DefaultPage",
  //   route: "/",
  //   component: <DefaultPage />,
  // },

  
  {
    type: "route",
    name: "Home",
    key: "Home",
    route: "/home",
    component: <Home />,
  },
  {
    type: "route",
    name: "About",
    key: "About",
    route: "/about",
    component: <About />,
  },
  {
    type: "route",
    name: "Services",
    key: "Services",
    route: "/services",
    component: <Services />,
  },
  {
    type: "route",
    name: "Skill",
    key: "Skill",
    route: "/skill",
    component: <Skill />,
  },
  {
    type: "route",
    name: "Project",
    key: "Project",
    route: "/project",
    component: <Project />,
  },
  {
    type: "route",
    name: "Contact",
    key: "Contact",
    route: "/contact",
    component: <Contact />,
  },
];
export default routes;
