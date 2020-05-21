import React, { useContext } from 'react'
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { RootStoreContext } from '../../../app/stores/rootStore';

const activityImageStyle = {
  filter: 'brightness(30%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ActivityDetailedHeader: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const rootstore = useContext(RootStoreContext);
  const { attendActivity, cancelAttendance, loading } = rootstore.activityStore;
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
        <Segment basic style={activityImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={activity.title}
                  style={{ color: 'white' }}
                />
                <p>{format(activity.date, 'eeee do MMMM')}</p>
                <p>
                  Hosted by <strong>{activity.userActivity.filter(x=>x.isHost)[0].userName}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached='bottom'>
        {/* check if the logged in user is the host, if is show the Manage event, if not host, check if attending */}
        {activity.isHost ? (<Button as={Link} to={`/manage/${activity.id}`} color='orange' floated='right'>Manage Event</Button>)
          : activity.isGoing ? (<Button loading={loading} onClick={cancelAttendance}>Cancel attendance</Button>) : (<Button color='teal' loading={loading} onClick={attendActivity}>Join Activity</Button>)}
      </Segment>
    </Segment.Group>
  )
}

export default observer(ActivityDetailedHeader);