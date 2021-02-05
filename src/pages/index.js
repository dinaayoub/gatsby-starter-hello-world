import React from "react";
import Footer from '../components/footer';
import Header from "../components/header";
import './index.scss';

export default function Home() {
  return <div id="main">
    <Header />
    <section>
      <h2>Education Background</h2>
      <ul>
        <li>Advanced Javascript Full Stack Development @ Code Fellows - 2021</li>
        <li>Master of Business Administration @ University of Washington - 2014<br />
          <span className="subTitle">Dean’s list & Dean’s scholar all 3 years (top 10%)</span></li>
        <li>BSc. Computer Science @ American University in Cairo - 2004<br />
          <span className="subTitle">Magna Cum Laude </span></li>
        <li>Self-taught Artist</li>
      </ul>
    </section>
    <section>
      <h2>Professional Competencies</h2>
      <ol>
        <li>Strong work ethic</li>
        <li>Business accumen</li>
        <li>Results-oriented</li>
      </ol>
      <div className="quotes">
        “[Dina’s] smarts, pragmatism and result orientation is what makes her unique. [She] can take on various hard technical challenges, unpack them, get a consensus across many opinionated leaders, and drive a group to deliver solid results.”<br /><strong>Zohar Raz, Former Manager</strong>
      </div>
      <div className="quotes">
        “[Dina is] a safe pair of hands for a difficult problem. Strong communicator & always professional. Strong technically and able to rally support from team-mates, managers, and partners/customers.”<br /><strong>Ambrose Treacy, Former Manager</strong>
      </div>
      <div className="quotes">
        “During my work with Dina, I found her to be thorough and efficient in understanding complex client needs and tailoring the right solution in a timely fashion. Dina is resourceful, innovative and is a pleasure to work with as a team member.”<br /><strong>Ashraf Koheil, Former Business Partner</strong>
      </div>
    </section>
    <section id="why">
      <h2>Why</h2>
      <ul>
        <li>10 year old me wanted to be an architect (art + math!), but then I saw a text chat where every character a friend in Canada wrote showed up on our screen, and I was hooked on tech!</li>
        <li>I want to solve difficult problems in creative ways that make people's lives better. It's how I can contribute to advancing tech that is more inclusive and accessible. </li>
        <li>Besides, running your code and seeing it working is the best feeling (almost) ever! </li>

      </ul>
    </section>
    <section>
      <h2>Fun Facts</h2>
      <ul>
        <li>I foster kittens, and because of this I now have two beautiful cats, <a href="https://www.instagram.com/pointyandbendy/">Pointy and Bendy</a> that I fostered back to health when they were 4 weeks old, then fell in love with!</li>
        <li>I'm a self-taught artist, and you can check out my work on <a href="https://www.deesfineart.com/">my website</a> or on <a href="https://www.instagram.com/deesfineart/">instagram</a></li>
        <li>I absolutely love traveling. I've been to 16 countries across 6 continents.</li>
        <li>I once pet an adolescent lion and fed a tiger</li>

      </ul>
    </section>
    <Footer />
  </div>
}
