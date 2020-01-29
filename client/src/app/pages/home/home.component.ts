import { Component, AfterViewInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import * as L from "leaflet";

// TODO: Linkear lista con marcadores
// TODO: Autorecagar la pagina

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements AfterViewInit {
  private map;
  coordenadas: string[];
  markers = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.actualizarMapa();
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }

  private actualizarMapa() {
    this.auth.obtenerCoordenadas().subscribe(
      resp => {
        this.coordenadas = resp["coords"].map((coord, i) => {
          let lat = coord.split(",")[0].split("=")[1];
          let lng = coord.split(",")[1].split("=")[1];
          this.markers.push(L.marker([lat, lng]));
          return `${lat},${lng} `;
        });

        L.layerGroup(this.markers).addTo(this.map);
      },
      err => {
        console.log(err.error.err);
        Swal.fire({
          title: "Error al autenticar",
          text: err.error.err.name,
          icon: "error",
          allowOutsideClick: false
        });
      }
    );
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    tiles.addTo(this.map);
  }
}
