import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
    editField: string;
    count: number = 0;
    personList: Array<any> = [
      { id: 1, item: 'Large table', location: 'Storage' , purchase: '03/14/20', exp: '06/02/20', quanity: '4' },
      { id: 2, item: 'Small table', location: 'Storage' , purchase: '0', exp: '0', quanity: '2' },
      { id: 3, item: 'Disco Ball', location: 'Storage' , purchase: '2', exp: '1', quanity: '2' },
      { id: 4, item: 'Large table', location: 'Storage' , purchase: '0', exp: '0', quanity: '4' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 5, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 6, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 7, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 8, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 9, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 10, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 11, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 12, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 13, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 14, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 15, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 16, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 17, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 18, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 19, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 20, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 21, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
      { id: 22, item: 'default', location: 'default' , shelf: 'default', bin: 'default', quanity: 'default' },
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