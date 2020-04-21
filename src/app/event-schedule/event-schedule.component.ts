import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.css']
})
export class EventScheduleComponent {

  editField: string;
  count: number = 0;
  personList: Array<any> = [
    { id: 1, name: 'Dance', company: 'BHS' , sub: '03/01/20', date: '04/13/20', num: '60', room: 'Ballroom' },
    { id: 2, name: 'Graduation', company: 'BHS' , sub: '03/18/20', date: '06/02/20', num: '90', room: 'Ballroom' },
    { id: 3, name: 'Cristmas Party', company: 'Raven' , sub: '03/30/20', date: '12/20/20', num: '75', room: 'Ballroom' },
    { id: 4, name: 'Award Ceremony', company: 'Daktronics' , sub: '04/14/20', date: '06/02/20', num: '65', room: 'Ballroom' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 5, name: 'default', company: 'default' , sub: 'default', date: 'default', num: 'default', room: "default" },
    { id: 6, name: 'default', company: 'default' , sub: 'default', date: 'default', num: 'default', room: "default" },

  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);

    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
