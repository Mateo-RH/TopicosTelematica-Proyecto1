import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:5000/api";

  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem("token");
  }

  login(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/login`, usuario).pipe(
      map(resp => {
        this.guardarToken(resp["token"]);
        return resp;
      })
    );
  }

  obtenerCoordenadas() {
    const header = new HttpHeaders({ ["token"]: this.userToken });
    return this.http.get(`${this.url}/user`, { headers: header });
  }

  nuevoUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/user`, usuario);
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);
  }

  leerToken() {
    this.userToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    return this.userToken;
  }

  verificarAutenticacion(): boolean {
    return this.userToken.length > 2;
  }
}
