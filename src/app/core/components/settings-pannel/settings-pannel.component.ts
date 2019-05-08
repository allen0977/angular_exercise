import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-settings-pannel',
    templateUrl: './settings-pannel.component.html',
    styleUrls: [
        './settings-pannel.component.css',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class SettingsPannelComponent implements OnInit {
    notes: any[];

    constructor() {
        this.notes = [
            {
                detail: 'detail1',
                title: 'title1',
            },
            {
                detail: 'detail2',
                title: 'title2',
            },
            {
                detail: 'detail3',
                title: 'title3',
            },
        ];
    }

    ngOnInit() {}
}
