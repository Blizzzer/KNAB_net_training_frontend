import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEntriesComponent } from './text-entries.component';

describe('TextEntriesComponent', () => {
  let component: TextEntriesComponent;
  let fixture: ComponentFixture<TextEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
