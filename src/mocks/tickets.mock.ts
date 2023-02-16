import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Barcelone',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'SI',
  },
  {
    title: 'SI5 in Paris',
    description: 'Voir la Tour Eiffel',
    date: dateToday,
    student: 'Anakin',
    major: 'GE',
  },
  {
		title: 'GB6 in Lisbonne',
		description: 'Manger du bacalhau',
		date: dateToday,
		student: 'Jose',
		major: 'GB'
	},
];
