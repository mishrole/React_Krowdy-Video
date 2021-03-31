import React, { useState } from 'react';
import { VideoCard } from './VideoCard';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getQuestions } from '../data/getQuestions';

export const VideoGrid = () => {

    const [questions] = useState(getQuestions);
    console.log(questions);

    const classes = useStyles();

    return (
        <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.title}>Video Cuestionario</Typography>
                    </Grid>
                    {
                        questions.map((question, index) => {
                            return (
                                // https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318 🚩
                                <Grid item xs={12} sm={6} md={3} key={`videoContainer-${index}`}>
                                    <VideoCard question = {question.value}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden"
    },
    title: {
        padding: theme.spacing(2),
        textAlign: "center",
        margin: "1rem"
    }
}));

