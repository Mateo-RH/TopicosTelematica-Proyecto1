import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      text: "Espere por favor...",
      icon: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe(
      resp => {
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem("username", this.usuario.username);
        }
        Swal.fire({
          text: "Registro exitoso!",
          icon: "success",
          confirmButtonText: "Ok",
          allowOutsideClick: false
        });
        this.router.navigateByUrl("/login");
      },
      err => {
        console.log(err.error);
        Swal.fire({
          title: "Error al registrar",
          text: err.error.mensaje.message,
          icon: "error"
        });
      }
    );
  }
}
