import React, { Component } from "react";
import SectionPorfolio from "./SectionPorfolio";
import SectionSkills from "./SectionSkills";
import SideBar from "./SideBar";

import "./Css/Main.css";

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <section className="section-aboutMe">
          <SideBar />
          <SectionSkills />
        </section>
        <SectionPorfolio />
      </main>
    );
  }
}

export default Main;
