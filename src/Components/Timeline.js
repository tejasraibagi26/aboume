import React from "react";
import "../CSS/Timeline.css";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="tContainer">
        <h1 className="title-header">Timeline.</h1>
        <div className="tline-cont">
          <div className="timeline">
            <p className="date-year">2021</p>
            <h1 className="title">Web Developer Intern @ CP Converge</h1>
            <p>
              <strong>Description:</strong> Worked on creating a new portal for
              their consultancy service.
            </p>
          </div>
          <div className="timeline">
            <h1 className="title">Orderista: An AI Based Food Ordering App</h1>
            <p>
              <strong>Description:</strong> As a final year project, worked as a
              team lead creating the front-end of the app using Flutter and
              backend using NodeJS and PostgreSQL.
            </p>
          </div>
          <div className="timeline">
            <p className="date-year">2020</p>
            <h1 className="title">Brach Recommender</h1>
            <p>
              <strong>Description:</strong> A website that helps students to
              identify the best possible engineering branch based on the answers
              provided.
            </p>
          </div>
          <div className="timeline">
            <h1 className="title">
              Blockchain Certificate Credentialing System
            </h1>
            <p>
              <strong>Description:</strong> Web based portals to verify and
              upload certificates to blockchain networks.
            </p>
          </div>
          <div className="timeline">
            <p className="date-year">2019</p>
            <h1 className="title">C.L.A.S.H</h1>
            <p>
              <strong>Description:</strong> Android game made in Unity Game
              Engine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
