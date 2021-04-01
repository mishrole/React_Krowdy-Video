import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { VideoCard } from '../../components/home/VideoCard';
// import { getQuestions } from '../helpers/getQuestions';
// import { useQuestions } from '../../hooks/useQuestions';
import MainContext from '../../context/mainContext';

export const VideoGrid = () => {

    // const { data: questions } = useQuestions();

    const { questions } = useContext(MainContext);

    const classes = useStyles();

    return (
        <Container fixed>
            <div className = { classes.root }>
                <Grid container spacing = { 3 }>
                    <Grid item xs = { 12 }>
                        <Typography variant="h5" className = { classes.title }>Video Cuestionario</Typography>
                    </Grid>
                    {
                        questions.map((question, index) => {
                            return (
                                <Grid item xs = { 12 } sm = { 6 } md = { 3 } key = { `videoContainer-${ index }` }>
                                    <VideoCard question = { question }/>
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

