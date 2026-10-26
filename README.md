# ionic-auth-guard

Práctica de la **UNIDAD 6** del módulo DI 0488: una aplicación **Ionic 9 + Angular 22** con una
pantalla de acceso y un panel de administración con navegación entre secciones.

## Puesta en marcha

```bash
npm install
npm start       # http://localhost:4200
npm run build   # producción en www/
npm test        # pruebas
npm run lint    # ESLint
```

## Acceso

| Usuario | Contraseña |
| --- | --- |
| `admin` | `123` |

La validación está en `HomePage.handleLogin()`; al acertar navega a `/admin`.

## Rutas

| Ruta | Pantalla |
| --- | --- |
| `/home` | Pantalla de acceso |
| `/admin` | Panel de administración |
| `/users` | Usuarios |
| `/analytics` | Analítica |
| `/activity` | Actividad |
| `/settings` | Ajustes |

## Estructura

```
src/app/
├── core/services/auth.ts   # servicio de autenticación (pendiente de implementar)
├── home/                   # pantalla de acceso
├── pages/admin/            # panel y sus secciones
├── app.routes.ts           # rutas con carga perezosa
└── app.component.ts
```
