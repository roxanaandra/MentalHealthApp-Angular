import { Component } from '@angular/core';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.css'
})
export class MediaDetailsComponent {

  articols: any[] = [
    {
      id: 1,
      title: 'First article',
      description: 'Description first articole'
    },

    {
      id: 2,
      title: 'Second article',
      description: 'Description second articole'
    },

    {
      id: 3,
      title: 'Third',
      description: 'Description third articole'
    }


  ];

}
