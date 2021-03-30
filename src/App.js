import React, { useState } from 'react';
import {VideoGrid} from './components/VideoGrid';
import { VideoRecorder } from './components/VideoRecorder';

const App = () => {

    const [state, setState] = useState({
        isActive: false,
    });
    
    return (
        <>
            {(!state.isActive) ? <VideoGrid /> : <VideoRecorder />}
        </>
    )
}

export default App;