import React, { useState, useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, generatePath, useHistory } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import PauseIcon from '@material-ui/icons/PauseCircleOutline';
import RecordIcon from '@material-ui/icons/RadioButtonChecked';
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import MainContext from '../../context/mainContext';

export const Video = ({ src, onChange = () => {} }) => {

  const classes = useStyles();
  const history = useHistory();
  
  const { questionId } = useParams();
  const { questions, updateUrlAnswer } = useContext(MainContext);
  
  const videoRef = useRef();
  const downloadRef = useRef();
  const chunks = useRef([]);
  
  // const [{ url, type }, setState] = useState({
  const [{ url }, setState] = useState({
    url: src,
    type: "recording"
  });
  
  const [status, setStatus] = useState("stop");

  const [VideoController, setVideoController] = useState(null);

  const currentQuestion = questions.find(({ id }) =>  id === questionId);

  const initVideoRecorder = async () => {
    try {

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;
  
      // videoRef.current.play();
  
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = function(e) {
        chunks.current.push(e.data);
      };
  
      return {
        stream,
        mediaRecorder
      };

    } catch(err) {
      console.error(err);
    }
  };

  const handleClickPlay = async () => {

    let { mediaRecorder } = VideoController;

    if (!(videoRef.current && videoRef.current.srcObject)) {
      const { mediaRecorder: media, stream } = await initVideoRecorder();
      mediaRecorder = media;
      setVideoController({ mediaRecorder: media, stream });
    }

    mediaRecorder.start(1000);
    setStatus("recording");
  };
  
  const handleClickStop = async () => {

    const { mediaRecorder } = VideoController;

    mediaRecorder.stop();

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: chunks.current[0].type });
      const url = URL.createObjectURL(blob);
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();

      tracks.forEach(function(track) {
        track.stop();
      });

      updateUrlAnswer(questions, questionId, url);

      downloadRef.current.href = url;
      downloadRef.current.download = `${currentQuestion.id}.webm`;

      videoRef.current.srcObject = null;
      onChange({ url, chunks: chunks.current });
      chunks.current = [];
      setStatus("stop");
    };
  };

  const getCurrentIndex = (object, currentId) => {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
          if(object[prop].id === currentId.id) {
            return prop
          }
      }
    }
  }

  const handleClickDownload = async () => {
    downloadRef.current.click();
  }

  const objectQuestions = {...questions};
  const currentIndex = getCurrentIndex(objectQuestions, currentQuestion);

  const handleClickPrevious = () => {
    const previousIndex = parseInt(currentIndex)-1;
    let previousObject;

    if(previousIndex < 0) {
      previousObject = Object.values(objectQuestions)[parseInt(questions.length)-1];
    } else {
      previousObject = Object.values(objectQuestions)[previousIndex];
    }

    let questionId = previousObject.id;
    history.push(generatePath("/question/:questionId", { questionId }));
      
   }

  const handleClickNext = () => {
    const nextIndex = parseInt(currentIndex)+1;
    const nextObject = Object.values(objectQuestions)[nextIndex];
    let questionId;

    if(nextIndex < questions.length) {
      questionId = nextObject.id;
      history.push(generatePath("/question/:questionId", { questionId }));
    } else {
      questionId = Object.values(objectQuestions)[0].id;
      history.push(generatePath("/question/:questionId", { questionId }));
    }
  }

  useEffect(() => {
    const main = async () => {
      try {
        const { stream, mediaRecorder } = await initVideoRecorder(); // Cannot destructure property 'stream' of '(intermediate value)' as it is undefined.
        setVideoController({
          stream,
          mediaRecorder
        });
        
      } catch (error) {
        console.error(error); // DOMException: Could not start video source
      }
    };
    main();
  }, []);

  useEffect(() => {
    setState({ url: src });
  }, [src]);

  return (
    <Container fixed>
        <div className = { classes.container }>
          {
            currentQuestion.id !== ""
            ?
            (
              <video src = { currentQuestion.answerUrl } ref = { videoRef } className = { classes.video } autoPlay/>
            )
            :
            (
              <video src = { url } ref = { videoRef } className = { classes.video } autoPlay/>
            )
          }
            {/* <video src = { url } ref = { videoRef } className = { classes.video } autoPlay/> */}

            {/* <div className = { classes.layer }>
                { status === "stop" ? 
                    (
                      <div onClick = { handleClickPlay } className = { classes.iconContainer }>
                        <RecordIcon className = { classes.icon }/> Start recording
                      </div>
                    ) 
                    :
                    (
                      <div onClick = { handleClickStop } className = { classes.iconContainer }>
                        <PauseIcon className = { classes.icon }/> Stop recording
                      </div>
                    )
                }
            </div> */}
        </div>
        <div className= { classes.buttonsContainer }>
          {
            status === "stop"
            ?
            (
              <Button variant="contained" color="primary" disableElevation className = { classes.button } onClick = { handleClickPlay }>
                <RecordIcon className = { classes.icon }/> Start recording
              </Button>
            )
            :
            (
              <Button variant="contained" color="secondary" disableElevation className = { classes.button } onClick = { handleClickStop }>
                <PauseIcon className = { classes.icon }/> Stop recording
              </Button>
            )
          }
          {
            
            currentQuestion.answerUrl !== ""
            ?
            (
                <>
                  <Button variant="contained" color="inherit" disableElevation className = { classes.button } onClick = { handleClickDownload }>
                    <GetAppIcon className = { classes.icon }/> Download
                  </Button>
                  <a ref = { downloadRef } href="/" className = { classes.download }> Download Ref </a>
                </>
            )
            :
            (
              <Button variant="contained" color="inherit" disableElevation className = { classes.button } disabled>
                <GetAppIcon className = { classes.icon }/> Waiting...
              </Button>
            )
            
          }
        </div>

        <div className = { classes.controlsContainer }>
          <Button variant="contained" color="primary" disableElevation className = { classes.button } onClick = { handleClickPrevious }>Previous</Button>
            <Button variant="contained" color="primary" disableElevation className = { classes.button } onClick = { handleClickNext }>Next</Button>
        </div>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    height: 375,
    width: 500,
    backgroundColor: "red",
    margin: "0 auto"
  },
  video: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  layer: {
    transform: "translateY(calc( -100%))",
    width: "100%",
    height: "100%"
  },
  iconContainer: {
    display: "flex",
    cursor: "pointer",
    position: "absolute"
  },
  icon: {
    padding: "0 0.25rem"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem"
  },
  button: {
    margin: "1rem"
  },
  download: {
    display: "none"
  },
  controlsContainer: {
    display: "flex",
    justifyContent: "space-around"
  }
}));