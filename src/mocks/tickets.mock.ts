import { Ticket, major} from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Barcelone',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: major.SI,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Voir la Tour Eiffel',
    date: dateToday,
    student: 'Anakin',
    major: major.GE,
    archived: true
  },
  {
		title: 'GB6 in Lisbonne',
		description: 'Manger du bacalhau',
		date: dateToday,
		student: 'Jose',
		major: major.GB,
    archived: false 
	},
];
