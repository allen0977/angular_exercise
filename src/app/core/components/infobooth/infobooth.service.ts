import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { UtilitiesService } from '../../services/utils.service';

@Injectable({
    providedIn: 'root',
})
export class InfoboothService {
    onSearchTextChanged: Subject<any> = new Subject();
    onAppsChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    searchText: string;
    apps: any[];

    constructor(private http: HttpClient, private utilsService: UtilitiesService) {
        this.onSearchTextChanged.subscribe((searchText) => {
            this.searchText = searchText;
            this.searchApps();
        });
    }

    /**
     * In a true http call, the {responseType: 'text'} will not need to be
     * added as an option.
     */
    searchApps() {
        this.http.get('./assets/dummydata/infobooth.json', { responseType: 'text' }).subscribe((response: any) => {
            response = JSON.parse(response);
            this.apps = response.data.apps;

            if (this.searchText && this.searchText !== '') {
                this.apps = this.utilsService.filterArrayByString(this.apps, this.searchText);
            }

            this.onAppsChanged.next(this.apps);
        });
    }
}
