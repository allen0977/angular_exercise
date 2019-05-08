import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css',
    ],
})
export class NavbarComponent implements OnInit {
    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/home.svg'));
        iconRegistry.addSvgIcon('notif', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/notif-24px.svg'));
        iconRegistry.addSvgIcon('grid', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/grid.svg'));
        iconRegistry.addSvgIcon('table', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/table.svg'));
        iconRegistry.addSvgIcon('feature', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/feature.svg'));
        iconRegistry.addSvgIcon('examples', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/examples.svg'));
    }

    ngOnInit() {}
}
