import React, { useState } from 'react';
import { VideoCard } from './components/Video/VideoCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export const App = () => {

    const classes = useStyles();

    const [questions] = useState(['¿Cuál es tu animal favorito?', '¿Cuál es tu color favorito?', '¿Cuál es tu comida favorita?', '¿Cuál es tu planta favorita?']);
    
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
                                <Grid item xs={12} sm={3}>
                                    <VideoCard key={`videoCard-${index}`} question = {question}/>
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
        color: theme.palette.text.primary,
    }
}));