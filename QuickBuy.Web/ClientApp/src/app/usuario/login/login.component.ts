import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit
{
  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
  }
    ngOnInit(): void {
      throw new Error("Method not implemented.");
      this.usuario = new Usuario();
    }

  entrar()
  {
    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      data => {

      },
       err => {

       }
    );
  }
}
