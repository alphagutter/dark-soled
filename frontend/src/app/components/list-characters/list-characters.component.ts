import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',  
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent implements OnInit{
  
  listCharacters: Character[] = []
  
  constructor(private _characterService: CharacterService){ }
  
  ngOnInit(): void {
    this.getListCharacters();
  }

  getListCharacters(){
    this._characterService.getListCharacters().subscribe((data: Character[]) => {
      this.listCharacters = data;
      console.log(data)
    })
  }

  getImagePath(roleName: string): string {
    return `assets/images/roles-icon/${roleName.toLowerCase()}-icon.png`;
  }



}
