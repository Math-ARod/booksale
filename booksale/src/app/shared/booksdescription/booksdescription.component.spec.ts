import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksdescriptionComponent } from './booksdescription.component';

describe('BooksdescriptionComponent', () => {
  let component: BooksdescriptionComponent;
  let fixture: ComponentFixture<BooksdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
