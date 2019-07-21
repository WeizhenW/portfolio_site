import React, { Component } from 'react';

import Layout from '../components/Layout';

import movieMaster from '../assets/images/movie-master.png';
import toDo from '../assets/images/to-do.png';
import jobTracker from '../assets/images/job-tracker.png';
import feedbackForm from '../assets/images/feedback-form.png';

//material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
    media: {
        height: "350px",
		boxShadow: "3px 4px 10px -5px grey",
      },
}

class IndexPage extends Component {
    render() {
        return (

            <Layout fullMenu>
                <article id="main">
                    <header>
                        <h2>Projects Page</h2>
                        {/* <p>A full list of my work</p> */}
                    </header>

                    <section className="wrapper style5">
                        <Grid container spacing={3} className="inner">
                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia className="image" >
                                        <img src={movieMaster} alt="" style={styles.media}/>
                                    </CardMedia>
                                    <CardContent className="content">
                                        <h3>
                                            Movie Master
                                        <br />
                                        </h3>
                                        <p>
                                            This is a movie database app with full read, edit, search and delete functionalities and it also provides the search functionality
                                            at the public open movie database by using OMDB API
                                        </p>
                                    </CardContent>
                                    <CardActions>
                                        <a href='https://movie-master-2019.herokuapp.com/#/' target="_blank">
                                            <Button variant="outlined" color="primary">View Site</Button>
                                        </a>
                                        <a href="https://github.com/WeizhenW/Movie-Master" target="_blank">
                                            <Button variant="outlined" color="secondary">View Code</Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia className="image" >
                                        <img src={toDo} alt="to do" style={styles.media} />
                                    </CardMedia>
                                    <CardContent className="content">
                                        <h3>
                                            To Do List
                                        <br />
                                        </h3>
                                        <p>
                                            This is a jQuery app to track the to-dos. Functionalities include add/delete tasks, mark tasks as completed, show overdue tasks and sort the list.
                                        </p>
                                    </CardContent>
                                    <CardActions>
                                        <a href='https://to-do-wz.herokuapp.com/' target="_blank">
                                            <Button variant="outlined" color="primary">View Site</Button>
                                        </a>
                                        <a href="https://github.com/WeizhenW/To-Do-List" target="_blank">
                                            <Button variant="outlined" color="secondary">View Code</Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia className="image" >
                                        <img src={jobTracker} alt="job tracker" style={styles.media} />
                                    </CardMedia>
                                    <CardContent className="content">
                                        <h3>
                                            Job Cracker App
                                        <br />
                                        </h3>
                                        <p>
                                            This app aims to help centralizing the job application related information at a single location
                                            and ease the application tracking progress for job seekers
                                        </p>
                                    </CardContent>
                                    <CardActions>
                                        <a href='https://job-cracker.herokuapp.com' target="_blank">
                                            <Button variant="outlined" color="primary">View Site</Button>
                                        </a>
                                        <a href="https://github.com/WeizhenW/Job-Tracker-App" target="_blank">
                                            <Button variant="outlined" color="secondary">View Code</Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia className="image" >
                                        <img src={feedbackForm} alt="feedback form" style={styles.media}/>
                                    </CardMedia>
                                    <CardContent className="content">
                                        <h3>
                                            Daily Feedback Form
                                        <br />
                                        </h3>
                                        <p>
                                        This is a React based app where user can input their daily feedback and submit to admin.
                                        It also has an admin view to check and manage the response dashboard.
                                        </p>
                                </CardContent>
                                <CardActions>
                                        <a href='https://student-feedback-form.herokuapp.com' target="_blank">
                                            <Button variant="outlined" color="primary">View Site</Button>
                                        </a>
                                        <a href="https://github.com/WeizhenW/Student-Feedback_Form" target="_blank">
                                            <Button variant="outlined" color="secondary">View Code</Button>
                                        </a>
                                    </CardActions>
                            </Card>
                            </Grid>
                        </Grid>
                    </section>
                </article>
            </Layout>
        )
    }
};

export default IndexPage;
