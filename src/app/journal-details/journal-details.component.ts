import { LocalStorageService } from './../local-storage/local-storage.service';
// journal-details.component.ts

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {

  newItem: string = '';
  items: string[] = [];
  editMode: boolean[] = [];
  itemTimes: string[] = [];
  showInputSection: boolean = false;
  showTextArea: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loadState();
  }

  loadState() {
    const storedState = this.localStorageService.get<any>('journalState');
    if (storedState) {
      this.newItem = storedState.newItem;
      this.items = storedState.items;
      this.editMode = storedState.editMode;
      this.itemTimes = storedState.itemTimes;
      this.showInputSection = storedState.showInputSection;
      this.showTextArea = storedState.showTextArea;
    }
  }

  saveState() {
    const state = {
      newItem: this.newItem,
      items: this.items,
      editMode: this.editMode,
      itemTimes: this.itemTimes,
      showInputSection: this.showInputSection,
      showTextArea: this.showTextArea
    };
    this.localStorageService.save('journalState', state);
  }

  addButton() {
    console.log('Add button clicked');
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
      this.showTextArea = false;
    }
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.itemTimes.push(currentTime);
    this.newItem = '';
    this.saveState();
  }

  deleteButton(index: number) {
    this.items.splice(index, 1);
    this.saveState();
  }

  editButton(index: number) {
    this.editMode[index] = !this.editMode[index];

    if (this.editMode[index]) {
      this.itemTimes[index] = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    this.saveState();
  }

  toggleInputSelection() {
    console.log('Toggle input section');
    this.showTextArea = !this.showTextArea;
    this.showInputSection = !this.showInputSection;
    this.saveState();
  }

}
