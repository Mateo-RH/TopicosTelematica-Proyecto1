import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  logout() {}

  login(usuario: UsuarioModel) {}

  nuevoUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/user`, usuario);
  }
}
