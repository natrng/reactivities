export interface IActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
  city: string;
  venue: string;
  isGoing: boolean;
  isHost: boolean;
  userActivity: IAttendee[];
}

export interface IActivityFormValues extends Partial<IActivity> {
  time?: Date;
}

export class ActivityFromValue implements IActivityFormValues {
  id?: string = undefined;
  title: string = "";
  category: string = "";
  description: string = "";
  date?: Date = undefined;
  time?: Date = undefined;
  city: string = "";
  venue: string = "";

  constructor(init?: IActivityFormValues) {
    if (init && init.date) {
      init.time = init.date;
    }
    Object.assign(this, init); //we assign init values into the class variables
  }
}

export interface IAttendee {
  userName: string;
  displayName: string;
  image: string;
  isHost: boolean;
}
