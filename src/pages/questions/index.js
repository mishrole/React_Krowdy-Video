import React, { useState, useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/KeyboardBackspace';
import { Video } from "../../components/questions/Video";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MainContext from '../../context/mainContext';

export const VideoRecorder = () => {

    const classes = useStyles();

    const { questionId } = useParams();
    const { questions } = useContext(MainContext);

    const question = useMemo(() => {
        return questions.find(({ id}) => id === questionId );
    }, [questionId, questions]);

    console.log(question.value)

    const [url, setUrl] = useState("");
    
    const handleChange = ({ url }) => {
        setUrl(url);
    };

    return (
        <>
            {/* <Container fixed>
                <Link to="/questions/" className = { classes.iconButton }><ArrowBackIcon />Volver</Link>
                <Typography className = { classes.title } variant="h5">¿Te gusta el pan con pollo?</Typography>
                <Video src = { url } onChange = { handleChange } />
            </Container> */}

            <div className = { classes.root }>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container spacing = { 3 }>
                            <Grid item xs = { 4 } className = { classes.verticalCenter }>
                                <Link to="/questions/" className = { classes.iconButton }>
                                    <ArrowBackIcon /><Typography className = { classes.buttonTitle }>Volver</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs = { 6 } md = { 4 } className = { classes.verticalCenter }>
                                <Typography className={ classes.title } variant="h5">
                                    {question.value}
                                </Typography>
                            </Grid>
                            <Grid item xs = { 2 } md = { 4 } className = { classes.verticalCenter }>
                                {/* <Button color="inherit">Login</Button> */}
                            </Grid>
                        </Grid>
                    </Toolbar>        
                </AppBar>
            </div>

            <Container fixed className = { classes.videoContainer }>
                <Video src = { url } onChange = { handleChange } />
            </Container>
        </>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: "center",
        padding: "1rem"
    },
    verticalCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        display: "flex",
        color: "white",
        textDecoration: "none"
    },
    buttonTitle: {
        padding: "0 0.25rem",
    },
    videoContainer: {
        marginTop: "1rem"
    }
}));
