# Samsana API
Samsana es una herramienta en línea para la administración de tareas de un proyecto, el seguimiento de errores e incidencias y para la gestión operativa de proyectos.

Hasta el momento llevamos desarrolladas las operaciones básicas del usuario (CRUD) y la autenticación.

El proceso de autenticación es generado a través de tokens, en el cual la información del usuario es codificada una vez validadas las credenciales de este.

Mediante el uso de Middlewares se protegen las rutas, a las que solo puede acceder un usuario que previamente haya iniciado sesión y posea un token válido.
# Instalación
    1. Clonar el proyecto
    2. Acceder mediante terminal al directorio raiz del proyecto
    3. Ejecutar el comando npm i (para instalar las dependencias del proyecto).
    4. Ejecutar el comando npm i -D para instalar dependencias de desarrollo (opcional).
    5. Con el comando npm run dev podemos probar el servidor que por defecto tomará el puerto 3000.

## Usuario
    |   Data         |   Tipo    |
    |::::::::::::::::|:::::::::::|
    | nombres        |   String  |
    | apellidos      |   String  |
    | email          |   String  |
    | password       |   String  |
    | profile_image  |   String  |
    | created_at     |   Date    |
    | updated_at     |   Date    |

### Metodos Rest
    |   Método  |   URL                                                      |
    |:::::::::::|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
    | GET       | http://localhost:3000/usuarios/                            |
    | GET       | http://localhost:3000/usuarios/:id                         |
    | POST      | http://localhost:3000/usuarios/registro                    |
    | PATCH     | http://localhost:3000/usuarios/:id                         |
    | DELETE    | http://localhost:3000/usuarios/:id                         |
    | POST      | http://localhost:3000/usuarios/change_password/pass/:id    |



## Auth
### Metodos
    |   Método  |   URL                                                      |
    |:::::::::::|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
    | POST      | http://localhost:3000/auth/login                           |
    | POST      | http://localhost:3000/auth/forgot                          |

## Área Responsable
    |   Data         |   Tipo    |
    |::::::::::::::::|:::::::::::|
    | nombre         |   String  |
    | activo         |   String  |

### Metodos Rest
    |   Método  |   URL                                                      |
    |:::::::::::|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
    | GET       | http://localhost:3000/area_responsable/                    |
    | GET       | http://localhost:3000/area_responsable/:id                 |
    | POST      | http://localhost:3000/area_responsable/agregar             |
    | PATCH     | http://localhost:3000/area_responsable/:id                 |
    | DELETE    | http://localhost:3000/area_responsable/:id                 |

### Imagen Roles
![alt text](https://github.com/loktarscript/samsana_api/tree/main/readme_files/roles_ y_ticket.PNG?raw=true)


   