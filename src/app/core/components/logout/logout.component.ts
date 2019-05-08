import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `
  <div fxLayout="row" fxLayoutAlign="center">
  <h4>Redirecting...Logging Out!</h4>
</div>
	`,
})
export class LogoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // logout function called on ngOnInit
        this.logout();
    }

    logout() {
        window.location.href = '/logout/';
        return false;
    }
}
