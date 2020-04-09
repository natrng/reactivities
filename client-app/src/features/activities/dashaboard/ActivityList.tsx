import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity :(id:string)=>void;
  handleDeleteActivity : (event : React.MouseEvent<HTMLButtonElement> ,id:string) => void;
  submitted : boolean
  target:string
}

export const ActivityList: React.FC<IProps> = ({ activities, selectActivity, handleDeleteActivity, submitted, target }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
      {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="View" color="blue" onClick={() => selectActivity(activity.id)}/>
                <Button name={activity.id} loading={target == activity.id && submitted} floated="right" content="Delete" color="red" onClick={(e) => handleDeleteActivity(e, activity.id)}/>
                <Label basic content="Category" />
              </Item.Extra>
            </Item.Content>
          </Item>
      ))}
      </Item.Group>
    </Segment>
  );
};
