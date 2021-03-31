import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Video from "./Video";

export const VideoRecorder = () => {

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

