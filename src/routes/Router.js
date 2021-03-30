import { Route, Switch } from "react-router-dom";

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/record" component={Record} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}