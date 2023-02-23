import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENT_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private studentList: Student[] = STUDENT_MOCKED;
  private index: number;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }

  addStudent(student: Student) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.studentList.unshift(student);// Permet passer l'element en premier de la list
		// this.ticketList.push(ticket);
		this.student$.next(this.studentList);
  }

  deleteStudent(student: Student) {
		this.index = this.studentList.indexOf(student, 1);

		this.studentList.splice(this.index, 1);
		this.student$.next(this.studentList);
	}

  archiveStudent(student: Student) {
		if (student.archived) {
			student.archived = false
		} else {
			student.archived = true
		}

		this.student$.next(this.studentList);
	}
}
