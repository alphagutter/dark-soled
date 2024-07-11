import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/roles';
import { RolesService } from '../../service/roles.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.css'
})
export class ListRolesComponent implements OnInit{

  //acá creamos nuestra lista de clases de personajes, con la clase classes que creamos anteriormente en
  //la carpeta interfaces
  listRoles: Role[] = [];

  constructor(private _rolesService: RolesService){
    
  }
  
  ngOnInit(): void {
    this.getListRoles();
  }

  getListRoles(): void{
    
   this._rolesService.getListRoles().subscribe((data: Role[]) =>{
      this.listRoles = data;
      console.log(data)
    })
    
  }

  
  
  //lo que hago aquí, es buscar la ruta de la imagen, con su nombre, para colocarla como icono en cada
  //uno de los roles, y que eso no interfiera en hacer modificaciones en la clase "Role"
  getImagePath(roleName: string): string {
    return `assets/images/roles-icon/${roleName.toLowerCase()}-icon.png`;
  }
  
}
/*
//realizo un get para devolver la lista de roles que tengo, para que
//en add-edit-character-component pueda iterarlo
getRoles(): Role[] {
  return this.listRoles;
}

constructor(private rolesService: RolesService) {}

ngOnInit(): void {
  this.listRoles = this.rolesService.getRoles();
}
*/
