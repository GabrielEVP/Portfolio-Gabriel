# Portfolio Personal - Gabriel Vargas

Portfolio personal moderno y elegante desarrollado con Astro, diseñado para mostrar proyectos, habilidades y experiencia profesional en desarrollo web. Construido siguiendo los principios de Clean Architecture y las mejores prácticas de desarrollo moderno.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con efectos visuales sofisticados
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Cursor Personalizado**: Interactividad mejorada con cursor animado
- **Animaciones Fluidas**: Transiciones y efectos visuales atractivos
- **Carga Ultra Rápida**: Optimización de rendimiento con Astro
- **SEO Optimizado**: Meta tags y estructura optimizada para buscadores
- **Arquitectura Limpia**: Código organizado y mantenible

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web estático moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[Bun](https://bun.sh/)** - Runtime JavaScript y gestor de paquetes ultra rápido
- **[Vercel](https://vercel.com/)** - Plataforma de deployment

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- [Bun](https://bun.sh/) (recomendado) o Node.js 18+
- Git

### Configuración Local

1. Clona el repositorio:

```bash
git clone https://github.com/GabrielEVP/Portfolio-Gabriel.git
```

2. Navega al directorio del proyecto:

```bash
cd Portfolio-Gabriel
```

3. Instala las dependencias:

```bash
bun install
```

4. Inicia el servidor de desarrollo:

```bash
bun run dev
```

5. Abre tu navegador y visita:

```bash
http://localhost:4321
```

## 🏗️ Scripts Disponibles

| Comando           | Descripción                                          |
| :---------------- | :--------------------------------------------------- |
| `bun install`     | Instala todas las dependencias del proyecto         |
| `bun run dev`     | Inicia el servidor de desarrollo en localhost:4321  |
| `bun run build`   | Construye el sitio optimizado para producción       |
| `bun run preview` | Previsualiza la build de producción localmente      |
| `bun run astro`   | Ejecuta comandos específicos de Astro               |

## 📁 Estructura del Proyecto

```text
Portfolio-Gabriel/
├── 📁 public/
│   ├── 📁 assets/
│   │   ├── 📁 icon/          # Iconos de tecnologías
│   │   ├── 📁 images/        # Imágenes de proyectos
│   │   └── 📁 pdf/           # CV y certificaciones
│   ├── favicon.svg
│   └── Logo.png
├── 📁 src/
│   ├── 📁 components/        # Componentes Astro reutilizables
│   │   ├── contact.astro     # Formulario de contacto
│   │   ├── cursor.astro      # Cursor personalizado
│   │   ├── header.astro      # Hero section
│   │   ├── navbar.astro      # Navegación
│   │   ├── proyect.astro     # Grid de proyectos
│   │   ├── skills.astro      # Tecnologías y habilidades
│   │   └── work.astro        # Experiencia laboral
│   ├── 📁 css/
│   │   └── main.css          # Estilos globales
│   ├── 📁 data/              # Contenido en formato JSON
│   │   ├── contact.json      # Información de contacto
│   │   ├── header.json       # Datos del hero
│   │   ├── proyect.json      # Lista de proyectos
│   │   └── skills.json       # Tecnologías y skills
│   ├── 📁 pages/
│   │   ├── index.astro       # Página principal
│   │   └── 📁 proyects/      # Páginas de proyectos
│   └── 📁 scripts/
│       └── aos-init.ts       # Inicialización de animaciones
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.js        # Configuración de Tailwind
└── tsconfig.json             # Configuración de TypeScript
```

## 🎯 Secciones del Portfolio

### 🏠 **Hero Section**

- Presentación personal con animaciones elegantes
- Efectos visuales geométricos flotantes
- Enlaces directos a CV y contacto
- Iconos sociales interactivos

### 💼 **Proyectos**

- Showcase de proyectos destacados
- Páginas detalladas para cada proyecto
- Enlaces a demos en vivo y repositorios
- Screenshots y descripciones técnicas

### 🛠️ **Habilidades Técnicas**

- Grid visual de tecnologías
- Iconos personalizados para cada skill
- Organización por categorías

### 💼 **Experiencia Laboral**

- Timeline de experiencia profesional
- Detalles de responsabilidades y logros

### 📬 **Contacto**

- Formulario funcional con Formspree
- Información de contacto completa
- Validación del lado cliente

## 🚀 Deployment

El sitio está desplegado automáticamente en [Vercel](https://vercel.com/) con cada push a la rama main.

### Variables de Entorno

Para el formulario de contacto, configura:

```bash
FORMSPREE_ENDPOINT=tu_endpoint_de_formspree
```

## 🎨 Personalización

### Modificar Contenido

Todos los textos y datos se encuentran en archivos JSON dentro de `src/data/`:

- `header.json` - Información personal y enlaces sociales
- `proyect.json` - Lista de proyectos con detalles
- `skills.json` - Tecnologías y habilidades
- `work.json` - Experiencia laboral
- `contact.json` - Información de contacto

### Agregar Nuevos Proyectos

1. Añade las imágenes en `public/assets/images/`
2. Actualiza `src/data/proyect.json`
3. Opcionalmente, crea una página detallada en `src/pages/proyects/`

### Personalizar Estilos

Los estilos principales están en:

- `src/css/main.css` - Estilos globales
- Componentes individuales tienen sus propios estilos con `<style>`

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 **Móviles**: 320px - 768px
- 📚 **Tablets**: 768px - 1024px  
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Screens**: 1440px+

## ⚡ Optimización de Rendimiento

- **Static Site Generation** con Astro
- **Lazy loading** de imágenes
- **CSS y JS minificados** en producción
- **Preload** de recursos críticos
- **WebP** para imágenes optimizadas

## 🔒 SEO y Accesibilidad

- Meta tags optimizados
- Estructura semántica HTML5
- Alt text en todas las imágenes
- Contraste de colores accesible
- Navegación por teclado
- ARIA labels donde corresponde

## 👤 Autor

**Gabriel Enrique Vargas Perez**

- 🌐 **Portfolio**: [gabrielvargas.dev](https://portfolio-gabriel-mu.vercel.app/)
- 💼 **LinkedIn**: [Gabriel Vargas](https://www.linkedin.com/in/gabriel-enrique-vargas-648048202/)
- 💻 **GitHub**: [@GabrielEVP](https://github.com/GabrielEVP)
- 📧 **Email**: gabrielenriquevargas2001@gmail.com

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella en GitHub!
