import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCharacterComponent } from './add-edit-character.component';

describe('AddEditCharacterComponent', () => {
  let component: AddEditCharacterComponent;
  let fixture: ComponentFixture<AddEditCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
