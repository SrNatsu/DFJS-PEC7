# 🅰️ PEC 7 - Frameworks: Routing en Angular

Esta entrega contiene la resolución de la **PEC 7** de la asignatura **Desarrollo Front-end con Frameworks Javascript** de la UOC. El objetivo final de esta práctica es consolidar la arquitectura SPA (Single Page Application) mediante la implementación de un sistema de rutas avanzado, protección de vistas y manejo de sesiones con tokens JWT.

## 📂 Estructura del repositorio

El proyecto mantiene la separación entre la teoría y la aplicación final de comercio electrónico:

```text
PEC7/
├── README.md
├── PEC7_Ej_Teor/
│   └── PEC7_Ej1_respuestas_teoria.md
└── PEC7_Ej_Prac/
    ├── ecommerce/
    │    └── src/
    │        ├── app/
    │        │    └── core/
    │        │        ├── guards/
    │        │        ├── interceptors/
    │        │        ├── routes/
    │        │        ├── services/
    │        │        └── validators/
    │        ├────── pages/
    │        │        ├── articles/
    │        │        └── auth/
    │        └────── shared/
    │                ├── articles/
    │                ├── layout/
    │                ├── models/
    │                └── pipes/
    └── server-articles-pec7/
```

## 📝 Descripción de los ejercicios

### 📚 Bloque Teórico (```PEC7_Ej_Teor```)

Resolución estructurada de los conceptos fundamentales del enrutador de Angular:

* **```Ej1```:** Explicación detallada del funcionamiento de directivas de navegación (```routerLink```, ```routerLinkActive```), la recuperación de estado con ActivatedRouteSnapshot, y la optimización de rendimiento mediante Lazy Loading. También se ha documentado la diferencia crítica entre los guardianes de ruta (```CanActivate``` vs ```CanDeactivate```) y el papel de los interceptores como middlewares en Angular.

### 💻 Bloque Práctico (```PEC7_Ej_Prac/ecommerce```)

Evolución completa de la aplicación e-commerce incorporando navegación, seguridad e interfaz de usuario avanzada.

* **Arquitectura Modular y Lazy Loading:** Se ha dividido la aplicación de forma semántica en ```core```, ```pages``` y ```shared```. En el módulo de enrutamiento se ha configurado la carga diferida (```loadChildren```) separando los dominios de Autenticación y Artículos para no sobrecargar el renderizado inicial.

* **Seguridad (Guards e Interceptores):**

  * Se ha creado un guardián funcional (```authenticationTokenGuard```) que protege la ruta de creación de artículos, redirigiendo al usuario si no posee un token de sesión activo.

  * Se ha implementado un ```HttpInterceptorFn``` (```interceptorHttpInterceptor```) que clona las peticiones salientes al backend para inyectar automáticamente la cabecera ```Authorization: Bearer <token>``` de forma transparente para los servicios.

* **Manejo de Estado (Signals):** Se ha refactorizado la lógica para abandonar los tradicionales ```BehaviorSubject``` en favor de la nueva y más eficiente API reactiva de Signals introducida en Angular 16+.

* **Interfaz de Usuario (Material Design):** Toda la aplicación (Listados, Formularios reactivos de Login/Registro, Tarjetas de detalle) hace uso de los componentes de Angular Material, logrando una apariencia profesional y adaptable.

* **Routing State:** Se ha optimizado la navegación entre la lista de artículos y la vista de detalle pasando el modelo completo a través del objeto ```[state]``` del router, evitando así peticiones HTTP redundantes al backend.

## 🚀 Instalación y ejecución

Es necesario arrancar primero el servidor Mock de Node.js (API REST) y posteriormente el cliente Angular.

1. Arrancar el servidor Backend (con autenticación):
   ```bash
    cd PEC7_Ej_Prac/server-articles-pec7
    npm install
    npm start
   ```
   *(El servidor quedará expuesto en el puerto 3000).*

2. Arrancar la aplicación Angular:
   ```bash
    cd PEC7_Ej_Prac/ecommerce
    npm install
    ng serve
   ```
   La aplicación se abrirá automáticamente en tu navegador por defecto (```http://localhost:4200/```).