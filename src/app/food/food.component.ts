import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  editField: string;
  count: number = 0;
  personList: Array<any> = [
    { id: 1, item: 'Cheese Pizza', location: 'Freezer' , purchase: '03/14/20', exp: '06/02/20', quanity: '4' },
    { id: 2, item: 'Milk', location: 'Refrigerator' , purchase: '04/22/20', exp: '05/06/20', quanity: '2' },
    { id: 3, item: 'Butter', location: 'Refrigerator' , purchase: '04/20/20', exp: '05/20/20', quanity: '2' },
    { id: 4, item: 'Bread', location: 'Pantry' , purchase: '04/20/20', exp: '05/18/20', quanity: '4' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 5, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 6, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 7, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 8, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 9, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 10, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 11, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 12, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 13, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 14, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 15, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 16, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 17, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 18, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 19, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
    { id: 20, item: 'default', location: 'default' , purchase: 'default', exp: 'default', quanity: 'default' },
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
