import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/KeyboardBackspace';
import { Video } from "./Video";

export const VideoRecorder = () => {

    const classes = useStyles();

    const [url, setUrl] = useState("");
    
    const handleChange = ({ url }) => {
        setUrl(url);
    };

    return (
        <>
            <Container fixed>
                <Link to="/questions/" className={classes.iconButton}><ArrowBackIcon />Volver</Link>
                <Typography className={classes.title} variant="h5">¿Te gusta el pan con pollo?</Typography>
                <Video src={url} onChange={handleChange} />
            </Container>
        </>
    )
}

const useStyles = makeStyles(() => ({
    title: {
        textAlign: "center",
        padding: "1rem"
    },
    iconButton: {
        display: "flex"
    }
}));
