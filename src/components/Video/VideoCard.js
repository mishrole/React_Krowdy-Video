import React from 'react';
import { makeStyles, useTheme } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import cover from "../../static/images/cover.jpg";
// import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';

export const VideoCard = ({ question }) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.playButtonArea}>
                <Fab color="primary" aria-label="play" className={classes.playButton}>
                    <PlayArrowIcon/>
                </Fab>
                <CardMedia component="img" alt={question} height="400" className={classes.cover} image={cover} title={question} />
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography variant="h6">{question}</Typography>
            </CardContent>
        </Card>
        //     {/* <video src="" className={classes.video} /> */}
    )   
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '300',
      },
    playButton: {
        position: 'absolute',
        // left: 0,
        right: 0,
        // top: 0,
        bottom: 0,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // color: theme.palette.primary.white,
        margin: 15,
    },
}));