/project-name
├── /src
│   ├── /app
│   │   ├── /core
│   │   │   ├── /services      # Servicios generales (autenticación, notificaciones, etc.)
│   │   │   ├── /guards        # Guards para proteger rutas
│   │   │   ├── /interceptors  # Interceptores HTTP
│   │   │   ├── /models        # Modelos de datos (interfaces, clases)
│   │   │   └── core.module.ts # Módulo central para servicios globales
│   │   ├── /shared
│   │   │   ├── /components    # Componentes reutilizables (botones, tablas)
│   │   │   ├── /directives    # Directivas reutilizables
│   │   │   ├── /pipes         # Pipes reutilizables
│   │   │   └── shared.module.ts # Módulo para componentes/direcciones compartidas
│   │   ├── /features
│   │   │   ├── /dashboard     # Módulo del dashboard principal
│   │   │   ├── /inventory     # Gestión de inventarios
│   │   │   ├── /maintenance   # Gestión de mantenimiento
│   │   │   └── /users         # Gestión de usuarios y roles
│   │   ├── /layout
│   │   │   ├── /header        # Componente de encabezado
│   │   │   ├── /footer        # Componente de pie de página
│   │   │   └── /sidebar       # Componente de barra lateral
│   │   ├── app-routing.module.ts # Configuración de rutas
│   │   └── app.module.ts      # Módulo raíz
│   ├── /assets
│   │   ├── /images            # Imágenes estáticas
│   │   ├── /styles            # Archivos CSS/SCSS globales
│   │   ├── /icons             # Iconos
│   │   └── /i18n              # Archivos de traducción
│   ├── /environments
│   │   ├── environment.ts     # Configuración para desarrollo
│   │   └── environment.prod.ts # Configuración para producción
│   ├── index.html             # HTML principal
│   ├── main.ts                # Archivo de inicio de Angular
│   ├── polyfills.ts           # Compatibilidad con navegadores antiguos
│   └── styles.scss            # Estilos globales
├── /e2e                       # Pruebas end-to-end
├── angular.json               # Configuración del CLI de Angular
├── package.json               # Dependencias y scripts del proyecto
├── tsconfig.json              # Configuración del compilador TypeScript
└── README.md                  # Documentación inicial del proyecto