import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import movieMaster from '../assets/images/movie-master.png';
import jobTracker from '../assets/images/job-tracker.png';
import feedbackForm from '../assets/images/feedback-form.png';
import toDo from '../assets/images/to-do.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
    {/* below start self intro */}
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Hi, I am a full stack software engineer based in Minneapolis, MN.
          </h2>
          <p>
          6 + years experience on large complex IT projects in financial industry 
          <br />
          International background and global mindset
          <br /> 
          Active Explorer and Learner | Perseverant Problem Solver | Technology Lover. 
          </p>
        </header>
        {/* <ul className="icons major"> */}
          {/* <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li> */} 
        {/* </ul> */}

        <ul className="icons major">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon major ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      </div>
    </section>

    <section id="skillTitle" className="wrapper style3">
      <h3>Professional Skills</h3>
      <div id="skills">
        <div id="skillName">
          <p>Web Technology</p>
          <br />
          <p>Languages</p>
          <p>Database</p>
          <p>Tools</p>
          <p>Project Management</p>
        </div>
        <div>
          <p>ReactJS, React-Redux, Redux-Saga, jQuery, Node.js, Express, Flask HTML, CSS, Material-UI, Bootstrap</p>
          <p>JavaScript, Python</p>
          <p>PostgreSQL</p>
          <p>MS Visual Studio Code, Git, Amazon Web Services (AWS)</p>
          <p>PRINCE2 Practitioner</p>
        </div>
      </div>
    </section>

    <section id="mywork" className="wrapper alt style4">
      <h2 id="workTitle">My Portfolio</h2>
    </section>

    <section id="two" className="wrapper alt style2">
      {/* section for job cracker */}
      <section className="spotlight">
        <div className="image">
          <img src={jobTracker} alt="" />
        </div>
        <div className="content">
          <h2>
            Job Cracker App
            <br />
          </h2>
          <p>
          Centralizes the job application related information at a single place 
          and helps job seekers easily track their application progress 
          </p>
        </div>
      </section>
      {/* section for movie master */}
      <section className="spotlight">
        <div className="image">
          <img src={movieMaster} alt="" />
        </div>
        <div className="content">
          <h2>
            Movie Master
            <br />
          </h2>
          <p>
            Movie database with full read/edit/search/delete functionalities and also provide the search possibility 
            at OMDB by using open movie database API
          </p>
        </div>
      </section>
      {/* Student feedback form section */}
      <section className="spotlight">
        <div className="image">
          <img src={feedbackForm} alt="" />
        </div>
        <div className="content">
          <h2>
            Daily Feedback Form
            <br />
          </h2>
          <p>
            A React based app that will ask user to input their daily feedback and submit.
            There is also an admin view to check and manage the response dashboard.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={toDo} alt="" />
        </div>
        <div className="content">
          <h2>
            To Do List
            <br />
          </h2>
          <p>
            jQuery app to track the to-dos. Functionalities include add/delete tasks, mark tasks as completed, show overdue tasks and sort the list.
          </p>
        </div>
      </section>
    </section>



    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
