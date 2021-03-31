import React, { useState } from 'react';
import { VideoCard } from './VideoCard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export const VideoGrid = () => {

    const [questions] = useState(['¿Cuál es tu animal favorito?', '¿Cuál es tu color favorito?', '¿Cuál es tu comida favorita?', '¿Cuál es tu planta favorita?']);
    const classes = useStyles();

    return (
        <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Video Cuestionario</Paper>
                    </Grid>
                    {
                        questions.map((question, index) => {
                            return (
                                <Grid item xs={12} sm={3} key={`videoContainer-${index}`}>
                                    <VideoCard question = {question}/>
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
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    }
}));
