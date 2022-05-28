import React from "react";

let arr = [
  {
    heading: "Mama Earth",
    desc: "As a team of 6, we made the end-to-end clone of the mama earth website, a web application to toxin-free organic products.",
    tech: "HTML | CSS | JavaScript | React | Redux ",
    responsibilities1: "Created All Products Page",
    responsibilities2: "I worked on add to cart functionality ",
    git: "https://github.com/saikiran003/Clone_MamaEarth",
    blog: "https://medium.com/@rg15697/a-new-experience-with-cloning-of-mamaearth-website-fbffb55767aa",
    demo: "https://clone-mamaearth.netlify.app/",
    projectImg: "https://miro.medium.com/max/1400/1*Lv4W2Wv1KP5dhgQYr30TYA.gif",
  },
  {
    heading: "Bella Vita Organic",
    desc: "A web application to order chemical free Skin Care Products. we were the team of 6",
    tech: "HTML | CSS | JavaScript | AdvJavaScript",
    responsibilities1: "Created Navbar,Footer,Login and Signup Pages ",
    responsibilities2:
      "Built authentication Page and integrated it with the frontend.",
    git: "https://github.com/AdarshKhandare/BellaVitaorganic",
    blog: "https://medium.com/@kiranarishanpalli/cloning-of-bella-vita-organic-website-using-html-css-javascript-my-second-project-c3803fa3ad45",
    demo: "https://classy-salmiakki-2002be.netlify.app/",
    projectImg: "https://miro.medium.com/max/875/1*bVoF3Lcu6A-HMr9SFEwsPA.png",
  },
  {
    heading: "CoShedule",
    desc: "A web application to an all-in-one platform for planning, organizing and executing all things content marketing.",
    tech: "HTML | CSS | JavaScript",
    responsibilities1:
      "Developed CoShedule Blog Page and buit login and signup pages",
    responsibilities2:
      "Built authentication Page and integrated it with the frontend.",
    git: "https://github.com/Bhupesh1114/Unit-2-group-project-masai",
    blog: "https://medium.com/@kiranarishanpalli/cloning-of-coschedule-using-html-css-javascript-my-very-first-project-experience-ee0036b87892",
    demo: "https://bhupesh1114.github.io/Unit-2-group-project-masai/",
    projectImg: "https://miro.medium.com/max/875/0*ZkTf3vKqg1pRCdlG.jpeg",
  },
];

const Projects = ({project}) => {
  return (
    <div className="projects" ref={project}>
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Projects</h1>
        </div>
        <div className="row">
          {arr.map((item) => (
            <div className="col-4" >
              <div className="project">
                <div className="projectHeading">{item.heading}</div>

                <img
                  src={item.projectImg}
                  alt="projectImg"
                  className="projectImg"
                />
                <br />
                <div className="projectDesc">{item.desc}</div>
                <button className="blogButton">
                  <a href={item.blog} target="_blank" rel="noreferrer">
                    Blog
                  </a>
                </button>
                <br />
                <h3 style={{ color: "rgb(255,74,87)" }}>Tech Stack</h3>

                <div style={{ lineHeight: "25px" }}>{item.tech}</div>
                <br />
                <div className="projectButtons">
                  <button>
                    <a
                      href={item.git}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Code
                    </a>
                  </button>
                  {/* <button>
                    <a href={item.blog} target="_blank" rel="noreferrer" className="btn">
                      Blog
                    </a>
                  </button> */}
                  <button>
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
