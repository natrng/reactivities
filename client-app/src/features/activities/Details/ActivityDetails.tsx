import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProp {
  activity: IActivity | null;
  setEditMode: (editMode: boolean) => void;
  getActivity : (activity:IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProp> = ({ activity, setEditMode,getActivity }) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity?.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity?.title}</Card.Header>
        <Card.Meta>
          <span>{activity?.date}</span>
        </Card.Meta>
        <Card.Description>{activity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" onClick={() => setEditMode(true)}></Button>
          <Button basic color="grey" content="Cancel" onClick={()=>getActivity(null)}></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
