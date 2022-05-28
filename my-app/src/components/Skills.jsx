import React from "react";
import { FaHtml5, FaCss3Alt,FaBootstrap } from "react-icons/fa";
import { DiJsBadge, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
//import { SiNestjs } from "react-icons/si";

let arr = [{
  icon: <FaHtml5 className="commonIcons" />,
  heading: "HTML"
},
{
  icon: <FaCss3Alt className="commonIcons" />,
  heading: "CSS"
},
{
  icon: <DiJsBadge className="commonIcons" />,
  heading: "JavaScript"
},
{
  icon: <DiMongodb className="commonIcons" />,
  heading: "MongoDB"
},
{
  icon: <DiNodejsSmall className="commonIcons" />,
  heading: "Node Js"
},
{
  icon: <DiReact className="commonIcons" />,
  heading: "React Js"
},
{
    icon:<SiRedux className="commonIcons"/>,
    heading:"Redux"
},
{
    icon:<FaBootstrap className="commonIcons"/>,
    heading:"BootStrap"
}
// {
//   icon: <FaVuejs className="commonIcons" />,
//   heading: "Vue Js"
// },
// {
//   icon: <SiNestjs className="commonIcons" />,
//   heading: "Nest Js"
// }
]

const Skills = ({skills}) => {
  return (
    <div className="skills" ref={skills}>
      <div className="container">
        <div className="skills__header">
          <div className="common">
            <h1 className="mainHeader">Tech Stack</h1>
          </div>

          <div className="row bgMain">
            {arr.map((item) => (
              <div className="col-skill bgMain">
                <div className="skills__box">
                  {item.icon}
                  <div className="skills__box-header">{item.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;