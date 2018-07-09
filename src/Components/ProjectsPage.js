import React from 'react'
import MyLinkCard from './MyLinkCard'
import Codepen from './Codepen'

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <section>
      <h2>Links</h2>
      <div className="row">
      <MyLinkCard href="http://expensify.courd.ga/"
        src="http://escapeachamber.com/assets/expensify.jpg"
        title="Expensify"
        />
        <MyLinkCard href="https://escapeachamber.com/"
        src="http://escapeachamber.com/assets/wordpress.png"
        title="WP-Shop"
        />
        <MyLinkCard href="//courd.ga"
        src="http://escapeachamber.com/assets/courdga.jpg"
        title="php Site"
        />
      </div>
      <div className="row">
      <MyLinkCard href="https://facebook.com/courd/"
 src="http://escapeachamber.com/assets/facebook.png"
        title="Facebook"
        />
        <MyLinkCard href="https://github.com/coolcourd/"
        src="http://escapeachamber.com/assets/github.png"
        title="Github"
        />
        <MyLinkCard href="https://codepen.io/coolcourd"
        src="http://escapeachamber.com/assets/codepen.png"
        title="Codepen"
        />
        <MyLinkCard href="https://www.linkedin.com/in/courd-headman-a3a8018b/"
src="http://escapeachamber.com/assets/linkedin.png"
        title="LinkedIn"
        />
      </div>
    </section>
    <section>
      <h2>Codepens</h2>
      <Codepen urlid="YeMzjr" height="600"/>
      <Codepen urlid="jGzovG" height="430"/>
      <Codepen urlid="yEbyxg" height="430"/>
      <Codepen urlid="bvaybz" height="600"/>
      <Codepen urlid="GvGxjP" height="530"/>
    </section>
  </div>
)

export default Projects
