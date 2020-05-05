import React, { useState, FormEvent, useContext, useEffect } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import { IActivity, IActivityFormValues } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form';
import { TextInput } from "../../../app/common/form/TextInput";
import { TextareaInput } from "../../../app/common/form/TextareaInput";
import { SelectInput } from "../../../app/common/form/SelectInput";
import { category } from "../../../app/common/options/categoryOptions";
import { DateInput } from "../../../app/common/form/DateInput";

interface DetailParams {
  id: string;
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match, history
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    createActivity,
    editActivity,
    submitting,
    cancelFormOpen,
    activity: initialFormState,
    loadActivity,
    clearActivity
  } = activityStore;


  const [activity, setActivity] = useState<IActivityFormValues>({
    id: undefined,
    title: "",
    category: "",
    description: "",
    date: undefined,
    time: undefined,
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (match.params.id && activity.id) {
      loadActivity(match.params.id).then(() => {
        initialFormState && setActivity(initialFormState);
      })
    }
    return () => {
      clearActivity()
    }
  }, [loadActivity, clearActivity, match.params.id, initialFormState, activity.id]);

  // const handleSubmit = () => {
  //   if (activity.id.length === 0) {
  //     let newActivity = {
  //       ...activity,
  //       id: uuid(),
  //     };
  //     createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
  //   } else {
  //     editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
  //   }
  // };

  const handleFinalFormSubmit = (values: any) => {
    console.log(values)
  }

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm onSubmit={handleFinalFormSubmit} render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="title"
                placeholder="Title"
                value={activity.title}
                component={TextInput}
              />
              <Field
                component={TextareaInput}
                name="description"
                rows={3}
                placeholder="Description"
                value={activity.description}
              />
              <Field
                component={SelectInput}
                options={category}
                name="category"
                placeholder="Category"
                value={activity.category}
              />
              <Form.Group widths='equal'>
              <Field
                component={DateInput}
                name="date"
                date={true}
                placeholder="Date"
                value={activity.date}
              />
              <Field
                component={DateInput}
                name="time"
                time={true}
                placeholder="Time"
                value={activity.time}
              />
              </Form.Group>
              <Field
                component={TextInput}
                name="city"
                placeholder="City"
                value={activity.city}
              />
              <Field
                component={TextInput}
                name="venue"
                placeholder="Venue"
                value={activity.venue}
              />
              <Button
                loading={submitting}
                floated="right"
                positive
                type="submit"
                content="Submit"
              />
              <Button
                onClick={cancelFormOpen}
                floated="right"
                type="button"
                content="Cancel"
              />
            </Form>
          )} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityForm);
