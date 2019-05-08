import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsPannelComponent } from './settings-pannel.component';

describe('SettingsPannelComponent', () => {
    let component: SettingsPannelComponent;
    let fixture: ComponentFixture<SettingsPannelComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    SettingsPannelComponent,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsPannelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
