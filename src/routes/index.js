import { Redirect, Switch, Route } from 'react-router-dom';
import { VideoGrid } from '../components/VideoGrid';
import { VideoRecorder } from '../components/VideoRecorder';

const Root = () => {
    return (
            <Switch>
                <Route path="/home" component={VideoGrid} />
                <Route path="/question/:questionId" component={VideoRecorder} />
                <Redirect from="/" to="/home" />
            </Switch>
    )
}

export default Root;