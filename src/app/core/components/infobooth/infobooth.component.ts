import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InfoboothService } from './infobooth.service';

@Component({
  selector: 'app-infobooth',
  templateUrl: './infobooth.component.html',
  styleUrls: ['./infobooth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoboothComponent implements OnInit {
  apps: any[];
  searchInput: FormControl = new FormControl('');

  constructor(private infoboothService: InfoboothService) {
    this.infoboothService.searchApps();
  }

  ngOnInit() {
    this.searchInput.valueChanges.subscribe((searchText: string) => {
      this.infoboothService.onSearchTextChanged.next(searchText);
    });

    this.infoboothService.onAppsChanged.subscribe((apps: any[]) => {
      this.apps = apps;
    });
  }
}
