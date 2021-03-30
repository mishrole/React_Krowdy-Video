import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Video from "./Video";

export const VideoRecorder = () => {

    // const classes = useStyles();

    const [url, setUrl] = useState("");
    const handleChange = ({ url }) => {
        console.log("TCL: handleChange -> url", url);
        setUrl(url);
    };

    return (
        <Container fixed>
            <Video src={url} onChange={handleChange} />
        </Container>
    )
}

// const useStyles = makeStyles((theme) => ({

// }));


