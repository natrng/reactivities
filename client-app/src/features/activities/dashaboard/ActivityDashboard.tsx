import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  activity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  getActivity: (activity: IActivity | null) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  activity,
  editMode,
  setEditMode,
  getActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width={6}>
        {activity && !editMode && (
          <ActivityDetails
            activity={activity}
            setEditMode={setEditMode}
            getActivity={getActivity}
          />
        )}
        {editMode && (
          <ActivityForm activity={activity!} setEditMode={setEditMode} />
        )}
      </Grid.Column>
    </Grid>
  );
};
