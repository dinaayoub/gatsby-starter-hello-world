import React from "react";
import Footer from '../components/footer';
import Header from "../components/header";

export default function Home() {
  return <div>
    <Header />
    <section>
      <h2>Injection Tracker</h2>
      <ul>
        <li>Helps people with medical conditions track their self injections</li>
        <li>Android app - Java, SQLite, Android SDK</li>
        <li>Now working on a Node.js backend to store the data on AWS</li>
      </ul>
      <a href="https://play.google.com/store/apps/details?id=com.yemry.injectiontracker&hl=en_US&gl=US">See it on the Google Play Store</a>
    </section>
    <section>
      <h2>Blackjack API</h2>
      <ul>
        <li>Can be used by discord bots, web apps… etc to provide entertainment and create engagement. </li>
        <li>Node.js, Javascript, MongoDB</li>
        <li>Contributions: design with OOP principles, API, logic, tests, deployment</li>
      </ul>
      <a href="https://github.com/dinaayoub/blackjack">See the GitHub repo</a>
    </section>
    <Footer />
  </div>
}
