import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Role } from '../../interfaces/roles';
import { Gender } from '../../interfaces/gender';
import { RolesService } from '../../service/roles.service';
import { Character } from '../../interfaces/character';

import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-add-edit-character',
  templateUrl: './add-edit-character.component.html',
  styleUrls: ['./add-edit-character.component.css']
})
export class AddEditCharacterComponent implements OnInit {
  listRoles: Role[] = [];
  genderOptions: typeof Gender = Gender;
  form: FormGroup;

  constructor(
    private rolesService: RolesService, 
    private fb: FormBuilder, 
    private _characterService: CharacterService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      role: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.rolesService.getListRoles().subscribe((data: Role[]) => {
      this.listRoles = data;
    });
  }

  addPower(): number {
    return Math.floor(Math.random() * 500) + 1;
  }

  addCharacter(): void {
    if (this.form.valid) {
      const character: Character = {
        name: this.form.value.name,
        role: this.form.value.role,
        gender: this.form.value.gender,
        power: this.addPower(),
      };

      this._characterService.addCharacter(character).subscribe(
        response => {
          console.log('New Character Added', response);
          this.router.navigate(['/character-list']);
        },
        error => {
          console.error('Error adding character', error);
        }
      );
    }
  }

  onSubmit(): void {
    this.addCharacter();
  }
}
