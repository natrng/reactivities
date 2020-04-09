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
  handleCreateActivity: (activity: IActivity) => void;
  handleEditActivity: (activity: IActivity) => void;
  handleDeleteActivity: (event: React.MouseEvent<HTMLButtonElement>,id: string) => void;
  submitting : boolean;
  target : string
}

export const ActivityDashboard: React.FC<IProps> = ({
  getActivity,
  activities,
  selectActivity,
  activity,
  editMode,
  setEditMode,
  handleCreateActivity,
  handleEditActivity,
  handleDeleteActivity,
  submitting,
  target
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          handleDeleteActivity={handleDeleteActivity}
          submitted = {submitting}
          target={target}
        />
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
          <ActivityForm
            key={activity?.id || 0}
            activity={activity!}
            setEditMode={setEditMode}
            handleCreateActivity={handleCreateActivity}
            handleEditActivity={handleEditActivity}
            submitting = {submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
