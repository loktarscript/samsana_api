# samsana_api
Samsana es una herramienta en línea para la administración de tareas de un proyecto, el seguimiento de errores e incidencias y para la gestión operativa de proyectos.

Hasta el momento llevamos desarrolladas las operaciones básicas del usuario (CRUD) y la autenticación.

El proceso de autenticación es generado a través de tokens, en el cual la información del usuario es codificada una vez validadas las credenciales de este.

Mediante el uso de Middlewares se protegen las rutas, a las que solo puede acceder un usuario que previamente haya iniciado sesión y posea un token válido.

# Usuario
    |   Data         |   Tipo    |
    |   :-:          |   :-:     |
    | nombres        |   String  |
    | apellidos      |   String  |
    | email          |   String  |
    | password       |   String  |
    | profile_image  |   String  |
    | created_at     |   Date    |
    | updated_at     |   Date    |

# endpoints
