import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { VideoGrid } from './components/VideoGrid';
import { VideoRecorder } from './components/VideoRecorder';

export const Routes = () => {
    <BrowserRouter>
        <Link to="/questions">Questions</Link>
        <Link to="/questions/q01">Question 1</Link>
        <Switch>
            <Route exact path="/" component={VideoGrid} />
            <Route path="/questions" component={VideoGrid} />
            <Route path="/questions/:id" component={VideoRecorder} />
            {/* <Route path="*" component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
}