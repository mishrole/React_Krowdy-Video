import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { VideoGrid } from './components/VideoGrid';
import { VideoRecorder } from './components/VideoRecorder';

export const Routes = () => {
    <BrowserRouter>
        <Link to="/questions">Questions</Link>
        <Link to="/questions/q01">Question 1</Link>
        <Switch>
            <Route exact path="/" component={VideoGrid} />
            <Route exact path="/questions" component={VideoGrid} />
            <Route exact path="/questions/:id" component={VideoRecorder} />
        </Switch>
    </BrowserRouter>
}

// import { Route, Switch } from "react-router-dom";
// import { VideoGrid } from "../components/VideoGrid";

// // Nota: Leer documentación

// export const Routes = () => {
//     return (
//         <>
//             <Switch>
//                 <Route exact path="/" component={VideoGrid} />
//                 <Route path="/home" component={VideoGrid} />
//                 <Route path="/record" component={Record} />
//                 <Route path="*" component={NotFound} />
//             </Switch>
//         </>
//     )
// }