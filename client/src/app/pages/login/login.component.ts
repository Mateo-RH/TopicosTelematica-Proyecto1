import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("username")) {
      this.usuario.username = localStorage.getItem("username");
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      text: "Espere por favor...",
      icon: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      resp => {
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem("username", this.usuario.username);
        }
        this.router.navigateByUrl("/home");
      },
      err => {
        Swal.fire({
          title: "Error al autenticar",
          text: err.error.mensaje,
          icon: "error"
        });
      }
    );
  }
}
