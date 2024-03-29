import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { EditUserDialogComponent } from './edit-user-dialog.component';

describe('EditUserDialogComponent', () => {
    let component: EditUserDialogComponent;
    let fixture: ComponentFixture<EditUserDialogComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    EditUserDialogComponent,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EditUserDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
