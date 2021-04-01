import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import cover from "../../static/images/cover.jpg";

export const VideoCard = ({ question }) => {

    const classes = useStyles();
    const history = useHistory();

    const handleClick = (questionId) => () => {
        history.push(generatePath("/question/:questionId", { questionId }));
    };

    return (
        <Card className = { classes.root }>
            <div className = { classes.playButtonArea }>
                <Fab aria-label="play" className = { classes.playButton } onClick = { handleClick(question.id) }>
                    <PlayArrowIcon/>
                </Fab>
                <CardMedia component="img" alt = { question.value } height="400" className = { classes.cover } image = { cover } title = { question.value } />
            </div>
            <CardContent className = { classes.content }>
                <Typography variant="h6">{ question.value }</Typography>
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
        margin: theme.spacing(2),
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