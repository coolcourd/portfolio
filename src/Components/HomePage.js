import React from 'react'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    document.getElementById("robot-video").innerHTML = `<video controls="">
  <source src="https://escapeachamber.com/pi/robot/BetterRobot.mp4" type="video/mp4"/>
Your browser does not support the video tag.
</video>`
  }

  render(){
  return (
  <div>
    <h1>Courd Headman</h1>
    <div className="row">
      <article>
    <section>
    <h2>Bio</h2>
    <p>My name is Courd, I am 27 years old and from Queen Creek Arizona. I am a web developer looking to get started with making my passion for web development my career. Web development however, is not the only think I am passionate about. Just about everything computer related gets me excited.
      </p><p>
I love to play video games, I run Ubuntu Linux on my personal computer exclusively, and I love to figure out how to make the computer do pretty much anything cool. Some of my favorite softwares include Blender3d,(Best application ever made!) Gimp, After Effects, Premiere, Inkscape, Unity3d and more.
</p><p>
I married this beautiful girl on Sep 7th 2013 and I am so glad that I have her. She is strong everywhere I am weak and she always love me and wants me to be close by. She is supportive and has a heart of gold. Elizabeth is more of a homebody and likes to stay in, but she is usually willing to go out with me when I want to run and play. </p><p>
Even though I am mostly on the nerdy side, I am full of energy and always down to play. I get competitive and like to play sports casually. I don’t care to watch sports however, that’s just boring. My favorite sports have got to be volleyball, pingpong, skateboarding, and Tanourd ball. (it's a game I made up that is kindof like horseshoes)
</p><p>
Overall I am an excited, easy going guy who is always happy and willing to help. I am a man of faith in Jesus Christ and I hope to reflect my view on who he is in how I behave.</p>
    </section>
    <section>
      <h2>Resume</h2>
    <div id="resume">
      <h4>EXPERIENCE</h4>
      <h5>Endurance IG, Tempe AZ— WordPress Consultant</h5>
      <h6>May 2017 - PRESENT</h6>
I started with Endurance handling inbound technical support, billing, and general sales calls for BlueHost. Currently I work with an array of small businesses and entrepreneurs to design and build their websites in an attractive way to meet their business needs.
      <h5>Orkin, Mesa AZ — Route Manager</h5>
      <h6>January 2016 - May 2017</h6>
I managed and serviced pest control accounts in the San Tan Valley area. This included scheduling, servicing, and selling services.
  <h5>Pace , Tempe AZ— Technical Support</h5>
      <h6>August 2014 - December 2015</h6>
I Handled inbound technical support, billing, and general sales calls for AT&T Uverse. Because of my stats I was promoted to an escalations position where I handled only customer escalations.


      <h4>EDUCATION</h4>
      <h5>Film School at SCC, Scottsdale AZ — Studies</h5>
      <h6>MONTH 2012 - MONTH 2014</h6>
I studied Film, Video Editing, Graphic Design and General studies for a couple of years.
  <h5>Basha High School, Chandler AZ — Diploma</h5>
      <h6>August 2003 - May 2008</h6>
General studies High School Diploma.


  <h4>SKILLS</h4>
WordPress, PHP, HTML5, CSS3, Javascript, Microsoft office, React js, Blender 3d, Final Cut Pro, Adobe Photoshop, After Effects, Adobe Premiere.
      <h4>AWARDS AND CERTIFICATES</h4>
Responsive Web Design Certification  Comprising HTML5 + CSS3.<br/> I have also completed most of their requirements for the Javascript Algorithms And Data Structures Certification and Their Front End Libraries Certification.<br/><br/>
SoloLearn Achieved Certificates for HTML, Javascript, CSS3, and PHP <br/><br/>
Udemy The Complete React Web Developers Course (With Redux) final project live at <a href="http://expensify.courd.ga" target="_blank">http://expensify.courd.ga</a><br/><br/>
Eagle Boy Scout I earned and was awarded the highest rank in scouting.
</div>
    </section>
     </article>
      <sidebar>
        <br/>
        just a backflip off a wall, nbd
        <img src="https://courd.ga/01.jpg"/>
        3d modeled in Blender3d
        <img src="https://courd.ga/02.jpg"/>
        My wife and I
        <img src="https://courd.ga/04.jpg"/>
        Robot animation I did in Blender3d
        <div id="robot-video"></div>

      </sidebar>
    </div>
  </div>
)}}

export default Home
