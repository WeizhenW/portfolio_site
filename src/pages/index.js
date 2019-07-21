import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import movieMaster from '../assets/images/movie-master.png';
import jobTracker from '../assets/images/job-tracker.png';
import feedbackForm from '../assets/images/feedback-form.png';
import toDo from '../assets/images/to-do.png';
import config from '../../config';

//material ui
import Grid from '@material-ui/core/Grid';

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

    <section id="skills" className="wrapper style3">
      <h3 id="skillHeader">Professional Skills</h3>
      <Grid container spacing={0} id="skillList">
        <Grid item xs={12} sm={4} id="skillName">
          <p>Web Technology</p>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p>ReactJS, React-Redux, Redux-Saga, jQuery, Node.js, Express, Flask HTML, CSS, Material-UI, Bootstrap</p>
        </Grid>
        <Grid item xs={12} sm={4} id="skillName">
          <p>Languages</p>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p>JavaScript, Python</p>
        </Grid>
        <Grid item xs={12} sm={4} id="skillName">
          <p>Database</p>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p>PostgreSQL</p>
        </Grid>
        <Grid item xs={12} sm={4} id="skillName">
          <p>Tools</p>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p>JEST, MS Visual Studio Code, Git, Amazon Web Services (AWS)</p>
        </Grid>
        <Grid item xs={12} sm={4} id="skillName">
          <p>Project Management</p>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p>PRINCE2 Practitioner</p>
        </Grid>
      </Grid>
    </section>

    <section id="mywork" className="wrapper alt style4">
      <h2 id="workTitle">My Portfolio Work</h2>
    </section>

    <section id="two" className="wrapper alt style2">
      {/* section for job cracker */}
      <section className="spotlight">
        <div className="image">
          <a href='https://job-cracker.herokuapp.com/' target="_blank">
            <img src={jobTracker} alt="" className="oneImage" />
            <div className="middle">
              <Grid container className="text">
                <Grid item xs={4}><p className="techUsed">ReactJS</p></Grid>
                <Grid item xs={4}><p className="techUsed">Redux</p></Grid>
                <Grid item xs={4}><p className="techUsed">Saga</p></Grid>
                <Grid item xs={4}><p className="techUsed">Node.js</p></Grid>
                <Grid item xs={4}><p className="techUsed">Express</p></Grid>
                <Grid item xs={4}><p className="techUsed">PostgreSQL</p></Grid>
                <Grid item xs={6}><p className="techUsed">Material-UI</p></Grid>
                <Grid item xs={6}><p className="techUsed">AWS S3</p></Grid>
              </Grid>
            </div>
          </a>
        </div>
        <div className="content">
          <h2>
            Job Cracker App
            <br />
          </h2>
          <p>
          This app aims to help centralizing the job application related information at a single location 
          and ease the application tracking progress for job seekers
          </p>
        </div>
      </section>
      {/* section for movie master */}
      <section className="spotlight">
        <div className="image">
          <a href='https://movie-master-2019.herokuapp.com/#/' target="_blank">
            <img src={movieMaster} alt="" class="oneImage"/>
            <div className="middle">
              <Grid container className="text">
                <Grid item xs={4}><p className="techUsed">ReactJS</p></Grid>
                <Grid item xs={4}><p className="techUsed">Redux</p></Grid>
                <Grid item xs={4}><p className="techUsed">Saga</p></Grid>
                <Grid item xs={4}><p className="techUsed">Node.js</p></Grid>
                <Grid item xs={4}><p className="techUsed">Express</p></Grid>
                <Grid item xs={4}><p className="techUsed">PostgreSQL</p></Grid>
                <Grid item xs={12}><p className="techUsed">Material-UI</p></Grid>
              </Grid>
            </div>
          </a>        
        </div>
        <div className="content">
          <h2>
            Movie Master
            <br />
          </h2>
          <p>
            This is a movie database app with full read/edit/search/delete functionalities and it also provides the search functionality 
            at the public open movie database by using OMDB API
          </p>
        </div>
      </section>
      {/* Student feedback form section */}
      <section className="spotlight">
        <div className="image">
          <a href="https://student-feedback-form.herokuapp.com/#/" target="_blank">
            <img src={feedbackForm} alt="feedback form" className="oneImage" />
            <div className="middle">
              <Grid container className="text">
                <Grid item xs={6}><p className="techUsed">ReactJS</p></Grid>
                <Grid item xs={6}><p className="techUsed">Node.js</p></Grid>
                <Grid item xs={6}><p className="techUsed">Express</p></Grid>
                <Grid item xs={6}><p className="techUsed">PostgreSQL</p></Grid>
                <Grid item xs={12}><p className="techUsed">Material-UI</p></Grid>
              </Grid>
            </div>
          </a>
        </div>
        <div className="content">
          <h2>
            Daily Feedback Form
            <br />
          </h2>
          <p>
            This is a React based app where user can input their daily feedback and submit to admin.
            It also has an admin view to check and manage the response dashboard.
          </p>
        </div>
      </section>

      {/* <section className="spotlight">
        <div className="image">
          <a href="https://to-do-wz.herokuapp.com/" target="_blank">
            <img src={toDo} alt="" />
          </a>
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
      </section> */}
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
          <h2>Discover more of my work</h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p> */}
        </header>
        <ul className="actions stacked">
          {/* <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li> */}
          <li>
            <a href="https://github.com/WeizhenW" className="button fit">
              See More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
