import { Directive, Input, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MatSidenavHelperService } from './mat-sidenav-helper.service';

@Directive({
    selector: '[matSidenavHelper]'
})
export class MatSidenavHelperDirective implements OnInit {

    @Input('matSidenavHelper') id: string;

    constructor(private matSidenavService: MatSidenavHelperService,
                private matSidenav: MatSidenav
    ) {
    }

    ngOnInit() {
        this.matSidenavService.setSidenav(this.id, this.matSidenav);
    }
}

@Directive({
    selector: '[matSidenavToggler]'
})
export class MatSidenavTogglerDirective {
    @Input('matSidenavToggler') id;

    constructor(private matSidenavService: MatSidenavHelperService) {
    }

    @HostListener('click')
    onClick() {
        this.matSidenavService.getSidenav(this.id).toggle();
    }
}
