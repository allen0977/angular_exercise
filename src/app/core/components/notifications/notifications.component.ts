import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

    notifications: any[];
    numNotifications = 4;

    constructor() {
    }

    ngOnInit() {
        this.notifications = [
            {
                id: 1,
                title: 'Title 1',
                description: 'Some additional text to describe the title'
            },
            {
                id: 1,
                title: 'Title 2',
                description: 'Some additional text to describe the title'
            },
            {
                id: 1,
                title: 'Title 3',
                description: 'Some additional text to describe the title'
            },
            {
                id: 1,
                title: 'Title 4',
                description: 'Some additional text to describe the title'
            },
            {
                id: 1,
                title: 'Title 5',
                description: 'Some additional text to describe the title'
            },
            {
                id: 1,
                title: 'Title 6',
                description: 'Some additional text to describe the title'
            }
        ];
    }

    getNotifications() {
        this.numNotifications = 0;
    }

}
