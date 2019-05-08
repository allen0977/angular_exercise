import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AppGridComponent } from './app-grid.component';

describe('AppGridComponent', () => {
    let component: AppGridComponent;
    let fixture: ComponentFixture<AppGridComponent>;

    beforeEach(
        fakeAsync(() => {
            TestBed.configureTestingModule({
                declarations: [
                    AppGridComponent,
                ],
            }).compileComponents();

            fixture = TestBed.createComponent(AppGridComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
