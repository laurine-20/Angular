import { Ticket, major} from '../models/ticket';
import { Student } from '../models/student';
import { STUDENT_MOCKED } from './student.mock';

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
