import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashaboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [activity, getActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handlegetActivity = (id: string) => {
    getActivity(activities.filter(a => a.id===id)[0]);
  }

  const handleOpenCreateForm = () => {
    getActivity(null);
    setEditMode(true);
  }

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then(res => {
      setActivities(res.data);
    });
  }, []);
  return (
    <>
      <NavBar handleOpenCreateForm={handleOpenCreateForm}/>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} selectActivity={handlegetActivity} activity={activity} editMode={editMode} setEditMode={setEditMode} getActivity={getActivity}/>
      </Container>
    </>
  );
};

export default App;
