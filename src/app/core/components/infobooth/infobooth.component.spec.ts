import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboothComponent } from './infobooth.component';

describe('InfoboothComponent', () => {
  let component: InfoboothComponent;
  let fixture: ComponentFixture<InfoboothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoboothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
