# @magrana/ui

Librería de componentes compartidos del **Ecosistema Magrana Edu**.

Permite reutilizar componentes de UI y actividades entre todas las apps (Hub, Exámenes, Actimagen, Control) sin duplicar código. Cualquier cambio en esta librería se refleja automáticamente en todas las apps que la usan.

---

## ⚡ Integración en una app existente

### 1. Añadir la dependencia local

En el `package.json` de tu app, añade:

```json
"dependencies": {
  "@magrana/ui": "file:../packages/magrana-ui"
}
```
> ⚠️ Ajusta el path relativo según dónde esté tu app:
> - Apps en `MagranaEDU/MiApp/` → `"file:../packages/magrana-ui"`
> - Apps en `MagranaEDU/MiApp/frontend/` → `"file:../../packages/magrana-ui"`

### 2. Instalar

```bash
npm install
```

### 3. (Opcional) Importar los tokens de diseño

En el entry point de tu app (`main.tsx`, `main.jsx`, o `globals.css`):

```ts
// En tu main.ts / main.tsx
import '../packages/magrana-ui/src/tokens/index.css';
```

O si prefieres importar los tokens desde el `dist` compilado:
```ts
import '@magrana/ui/style.css';
```

---

## 📦 Componentes disponibles

### Componentes UI Básicos

```tsx
import { Button, Card, Badge } from '@magrana/ui';

// Button — variantes: 'primary' | 'secondary' | 'danger' | 'ghost'
// tamaños: 'sm' | 'md' | 'lg'
<Button variant="primary" size="md" onClick={handleSave}>Guardar</Button>
<Button variant="danger" size="sm" loading>Eliminando...</Button>

// Card — panel glassmorphism
<Card glass padding="2rem">
  <h2>Título de la sección</h2>
</Card>

// Badge — colores: 'primary' | 'orange' | 'magenta' | 'emerald' | 'purple' | 'blue' | 'neutral'
<Badge color="emerald">Secundaria</Badge>
<Badge color="purple">IA</Badge>
```

### Componentes de Actividad

```tsx
import { HeatmapActivity, DragDropActivity } from '@magrana/ui';

// Mapa de Calor — el alumno hace zoom y coloca un pin
<HeatmapActivity
  slide={currentSlide}
  onNext={(score, maxScore, data, isCorrect) => handleNext(...)}
  baseUrl="https://api.tu-app.com"  // Para resolver imágenes relativas
/>

// Arrastrar y Soltar — el alumno arrastra ítems a zonas en la imagen
<DragDropActivity
  slide={currentSlide}
  onNext={(score, maxScore, data, isCorrect) => handleNext(...)}
  baseUrl="https://api.tu-app.com"
/>
```

### Utilidades

```ts
import { shuffleArray, resolveImageUrl, isPinCorrect } from '@magrana/ui';

// Mezclar un array aleatoriamente
const shuffled = shuffleArray(myArray);

// Resolver URL de imagen (relativa o absoluta)
const url = resolveImageUrl('/uploads/imagen.jpg', 'https://api.tu-app.com');

// Comprobar si un pin está dentro de la zona correcta
const correct = isPinCorrect({ x: 45, y: 30 }, { x: 47, y: 28, radius: 10 });
```

---

## 🛠️ Desarrollo de la librería

```bash
# En packages/magrana-ui/
npm run dev    # Compila en modo watch (cambios en tiempo real)
npm run build  # Compila para producción
```

Los cambios en `src/` se reflejan automáticamente en las apps consumidoras que tengan `file:` como dependencia.

---

## 📁 Estructura

```
packages/magrana-ui/
├── src/
│   ├── index.ts                        ← Exportaciones centrales
│   ├── tokens/
│   │   └── index.css                   ← Tokens de diseño del ecosistema
│   ├── components/
│   │   ├── Button/Button.tsx
│   │   ├── Card/Card.tsx
│   │   └── Badge/Badge.tsx
│   └── activities/
│       ├── utils.ts                    ← shuffleArray, resolveImageUrl...
│       ├── DroppableZone/
│       ├── DraggableItem/
│       ├── DragDropActivity/           ← Migrado desde Actimagen
│       └── HeatmapActivity/            ← Migrado desde Actimagen
└── dist/                               ← Bundle compilado (gitignored)
```
