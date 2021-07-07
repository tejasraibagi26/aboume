import React from "react";
import "../CSS/Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="nav">
        <span className="nav-brand item">Tejas Raibagi.</span>
        <span className="nav-brand fix-right">Contact</span>
      </div>
      <div className="container">
        <h1 className="_header">Create Something Meaningful.</h1>
        <p className="info">
          Hello, I'm Tejas Raibagi and welcome to my portfolio. I work on web
          and mobile applications.
        </p>
      </div>
    </section>
  );
}
