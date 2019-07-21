import React from 'react';

import Layout from '../components/Layout';

import movieMaster from '../assets/images/movie-master.png';
import toDo from '../assets/images/to-do.png';
import jobTracker from '../assets/images/job-tracker.png';
import feedbackForm from '../assets/images/feedback-form.png';

//material ui
import Grid from '@material-ui/core/Grid';

const IndexPage = () => (
    <Layout fullMenu>
        <article id="main">
            <header>
                <h2>Projects List</h2>
                <p>A full list of all my projects</p>
            </header>

            <section className="wrapper style5">
                <div className="inner">
                    <section className="spotlight">
                        <div className="image">
                            <a href='https://movie-master-2019.herokuapp.com/#/' target="_blank">
                                <img src={movieMaster} alt="" class="oneImage" />
                                {/* <div className="middle">
                <Grid container className="text">
                    <Grid item xs={4}><p className="techUsed">ReactJS</p></Grid>
                    <Grid item xs={4}><p className="techUsed">Redux</p></Grid>
                    <Grid item xs={4}><p className="techUsed">Saga</p></Grid>
                    <Grid item xs={4}><p className="techUsed">Node.js</p></Grid>
                    <Grid item xs={4}><p className="techUsed">Express</p></Grid>
                    <Grid item xs={4}><p className="techUsed">PostgreSQL</p></Grid>
                    <Grid item xs={12}><p className="techUsed">Material-UI</p></Grid>
                </Grid>
                </div> */}
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

                    <section className="spotlight">
                        <div className="image">
                            <a href="https://to-do-wz.herokuapp.com/" target="_blank">
                                <img src={toDo} alt="" className="oneImage" />
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
                    </section>

                    <section className="spotlight">
                        <div className="image">
                            <a href='https://job-cracker.herokuapp.com/' target="_blank">
                                <img src={jobTracker} alt="" className="oneImage" />
                                {/* <div className="middle">
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
            </div> */}
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

                    <section className="spotlight">
                        <div className="image">
                            <a href="https://student-feedback-form.herokuapp.com/#/" target="_blank">
                                <img src={feedbackForm} alt="feedback form" className="oneImage" />
                                {/* <div className="middle">
              <Grid container className="text">
                <Grid item xs={6}><p className="techUsed">ReactJS</p></Grid>
                <Grid item xs={6}><p className="techUsed">Node.js</p></Grid>
                <Grid item xs={6}><p className="techUsed">Express</p></Grid>
                <Grid item xs={6}><p className="techUsed">PostgreSQL</p></Grid>
                <Grid item xs={12}><p className="techUsed">Material-UI</p></Grid>
              </Grid>
            </div> */}
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
                </div>
            </section>
        </article>
    </Layout>
);

export default IndexPage;
