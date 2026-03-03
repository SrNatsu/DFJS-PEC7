# Ejercicio 1

## Crea una carpeta ```PEC7_Ej_Teor```, dentro de esta carpeta crea un fichero Markdown que tenga como nombre ```PEC7_Ej1_respuestas_teoria.md``` y responde a cada una de las siguientes preguntas:

### ¿Qué es y cómo funciona el elemento ```<RouterLink>``` en Angular?

Es una directiva utilizada para navegar entre vistas o componentes de una SPA sin recargar el navegador. Reemplaza el atributo ```href```, permitiendo que el enrutador de Angular gestione la URL y renderice componentes dinámicamente.

### Explica la diferencia entre ```routerLink``` y ```routerLinkActive```. ¿Qué otras directivas se pueden utilizar con el router en Angular?

```routerLink``` realiza la acción de navegar.

```routerLinkActive``` estiliza el enlace activo.

Existen las siguientes directivas:

* **```RouterLink```:** Cuando se aplica a la plantilla de un elemento, convierte el elemento en un enlace que inicia una navegación hacia otra ruta.

* **```RouterLinkActive```:** Estiliza el enlace activo.

* **```RouterLinkWithHref```:** Cuando se aplica a la plantilla de un elemento, convierte el elemento en un enlace que inicia una navegación hacia otra ruta.

* **```RouterOutlet```:** Actúa como placeholder que Angular rellena dinámicamente basado en el estado actual del Router.

### Describe el servicio ```ActivatedRouteSnapshot```. ¿Cómo se utiliza y en qué casos es útil?

Representa el estado estático de la ruta en el momento en que se creó. Se utiliza para acceder a parámetros, datos o configuración de la ruta sin necesidad de suscribirse a cambios.

### ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular.

Los **guards** son funciones de seguridad que actúan como puntos de control antes de cargar una ruta o navegar entre ellas.

* **```canActivate```:** Controla si un usuario puede acceder a una ruta específica.

* **```canActivateChild```:** Similar a ```canActivate```, pero se aplica para comprobar el acceso a todas las rutas hijas.

* **```canDeactivate```:** Determina si un usuario puede salir o abandonar una ruta actual.

* **```canMatch```:** Se utiliza para verificar si una ruta puede ser cargada o seleccionada, permitiendo múltiples rutas para un mismo componente basado en condiciones.

* **```canLoad```:** Evita que un módulo se cargue si el usuario no cumple los requisitos.

### ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?

El **lazy loading** mejora el rendimiento al cargar módulos o componentes solo cuando el usuario navega a sus rutas, en lugar de al inicio. Reduce el tiempo de carga inicial y el uso de recursos.

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

```

### Compara las diferencias entre ```CanDeactivate``` y ```CanActivate``` guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno.

```canActivate``` controla si un usuario puede acceder a una ruta específica. ```canDeactivate``` determina si un usuario puede salir o abandonar una ruta actual.

Se puede usar ```canActivate``` para asegurarse de que un usuario tiene la sesión iniciada (token activo) para acceder a una ruta específica.

Se puede usar ```canDeactivate``` para evitar un abandono accidental de una ruta.

### ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?

En Angular, el concepto más parecido a middleware son los ```HttpInterceptors```, que permiten interceptar y modificar peticiones HTTP antes de que lleguen al servidor o antes de que la respuesta sea procesada.