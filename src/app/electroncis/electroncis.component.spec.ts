import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroncisComponent } from './electroncis.component';

describe('ElectroncisComponent', () => {
  let component: ElectroncisComponent;
  let fixture: ComponentFixture<ElectroncisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroncisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroncisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
