# Topicos de telematica - Proyecto1

## Introducción

La  universidad Eafit,  requiere  de  una aplicacion IoT web que  le  permita a los estudiantes capturar su geolocalizacion y almacenarla en un registro, para poder ser visualizado a traves de un grafico.

## Descripción

Implementar una aplicacion que permita recolectar la geolocalización GPS a traves de unos dispositivos auntenticados con un *API Key*. 

Implementar una aplicacion web que permita a los usuarios registrarse y auntenticarse para poder visualizar todos los datos recolectados por sus dispositivos.

## Alcance

Diseñar y desarrollar una aplicacion que cumpla con todos los requisitos en el ambiente de desarrollo. 

Simular la captura de los datos de geolocalización GPS a traves del servicio *Postman*.

## Diseño
![Diagrama](/imagenes/DiseñoSistema.JPG)

## Requisitos Funcionales

| Requisito | Descripción |
| --- | --- |
| Registro de usuarios | El sistema debera permitir registar nuevos usuarios |
| Login| El sistema debera permitir iniciar sesion de los usuarios mediante *username* y *password* |
| Capturar coordenadas| El sistema debera permitir capturar coordenadas GPS de dispositivos autenticados |
| Visualizar coordenadas| El sistema debera permitir a los usuarios autenticados listar las coordenadas y visualizarlas en un mapa |


## Requisitos no funcionales

| Requisito | Descripción |
| --- | --- |
| Diseño | Diseño facil e intuitivo con alertas de usuario que ayuden a la navegacion en la *App* |
| Persistencia | Persistencia tanto para los datos capturados por los dispositivos GPS como para la informacion registrada por los usuarios |
| Seguridad | Autenticación a traves de *JsonWebTokens* para que el sistema solo pueda ser accedido por dispositivos autorizados |

## Definición de tecnología de Desarrollo

| Tecnologia | Descripción |
| --- | --- |
| NodeJS | Backend |
| Express | Servidor REST |
| MongoDB | Base de datos |
| JWT | Autenticación |
| Angular | Frontend |
| Leaflet | Graficos/Mapas |

## Documentación de postman

https://documenter.getpostman.com/view/4010438/SWTBeHVt?version=latest

## Instrucciones de instalación

### Requisitos
* [docker](https://www.docker.com/) y [docker-compose](https://docs.docker.com/compose/install/) instalados
* [node](https://nodejs.org/es/download/) y [angular](https://cli.angular.io/) instalados
* (Opcional) [Postman](https://www.getpostman.com/)

### Backendend

Desde el directorio raiz, ejecutar

```
docker-compose up
```

### Frontend

#### Instalacion de paquetes

Desde el directorio *client*, ejecutar

```
npm install
```

#### Correr el frontend

En este mismo directorio, ejecutar

```
npm start
```
