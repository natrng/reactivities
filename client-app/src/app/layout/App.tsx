import React, { useEffect, useContext, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import { observer } from "mobx-react-lite";
import ActivityStore from "../stores/activityStore";
import LoadingComponent from "./LoadingComponent";
import ActivityDashboard from "../../features/activities/dashaboard/ActivityDashboard";
import { Route, withRouter, RouteComponentProps, Switch } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/Details/ActivityDetails";
import NotFound from "./NotFound";
import { ToastContainer } from 'react-toastify';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities" />;

  return (
    <Fragment>
      <ToastContainer position='bottom-right' />
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Switch>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route key={location.key} path={["/createActivity", '/manage/:id']} component={ActivityForm} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </>
      )} />
    </Fragment>
  );
};

export default withRouter(observer(App));
