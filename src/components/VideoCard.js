import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import cover from "../static/images/cover.jpg";
import Fab from '@material-ui/core/Fab';

export const VideoCard = ({ question }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.playButtonArea}>
                <Fab aria-label="play" className={classes.playButton}>
                    <PlayArrowIcon/>
                </Fab>
                <CardMedia component="img" alt={question} height="400" className={classes.cover} image={cover} title={question} />
            </div>
            <CardContent className={classes.content}>
                <Typography variant="h6">{question}</Typography>
            </CardContent>
        </Card>
    )   
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '300',
      },
    playButton: {
        bottom: 0,
        margin: 15,
        position: 'absolute',
        right: 0,
    },
    playButtonArea: {
        "align-items": "center",
        background: "red",
        "background-color": "transparent",
        "justify-content": "center",
        "text-decoration": "none",
        position: "relative",
        verticalAlign: "middle",
        "-moz-appearance": "none",
        "-webkit-appearance": "none",
        "-webkit-tap-highlight-color": "transparent",
    }
}));