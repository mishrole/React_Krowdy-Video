import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VideoGrid } from './components/VideoGrid';
import { VideoRecorder } from './components/VideoRecorder';

const App = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Link to="/questions">Questions</Link>
                <Link to="/questions/q01">Question 1</Link> */}
                <Switch>
                    <Route exact path="/" component={VideoGrid} />
                    <Route exact path="/questions" component={VideoGrid} />
                    <Route exact path="/questions/:id" component={VideoRecorder} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;