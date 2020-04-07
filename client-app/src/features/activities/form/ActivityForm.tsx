import React, {useState} from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityForm: React.FC<IProps> = ({ activity:initialFormState, setEditMode }) => {
  const initializedForm = () => {
    if (initialFormState) return initialFormState;
    else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: ""
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializedForm)
  
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={activity.title} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={activity.description}
        />
        <Form.Input placeholder="Category" value={activity.category} />
        <Form.Input type="Date" placeholder="Date" value={activity.date} />
        <Form.Input placeholder="City" value={activity.city} />
        <Form.Input placeholder="Venue" value={activity.venue} />
        <Button floated="right" positive type="submit" content="submit" />
        <Button
          floated="right"
          type="button"
          content="cancel"
          onClick={() => setEditMode(false)}
        />
      </Form>
    </Segment>
  );
};
