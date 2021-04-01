import { Redirect, Switch, Route } from 'react-router-dom';
import { MainContextProvider } from '../context/mainContext';
import { VideoGrid } from '../pages/_home';
import { VideoRecorder } from '../pages/_questions';

const Root = () => {
    return (
        <MainContextProvider>
            <Switch>
                <Route path="/home" component={VideoGrid} />
                <Route path="/question/:questionId" component={VideoRecorder} />
                <Redirect from="/" to="/home" />
            </Switch>
        </MainContextProvider>
    )
}

export default Root;