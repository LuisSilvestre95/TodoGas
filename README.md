# 🌐 TODO GAS - Sistema de Cálculos Avanzados para Diseño de Instalaciones de Gas

![Estado](https://img.shields.io/badge/Estado-Producción%20Activa-brightgreen?style=for-the-badge&logo=checkmark)
![Versión](https://img.shields.io/badge/Versión-2.2.0-0078D4?style=for-the-badge&logo=semantic-release)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge&logo=opensource)
![Responsive](https://img.shields.io/badge/Responsive-HTML5%2FJS-FF9F00?style=for-the-badge&logo=html5)
![NTC2505](https://img.shields.io/badge/Normativa-NTC%202505-purple?style=for-the-badge)

> 🎯 **Solución integral profesional para diseño, cálculo y optimización de redes de gas natural y GLP con precisión ingenieril según estándares internacionales**

---

## 📋 Tabla de Contenidos

- [🎯 Descripción General](#-descripción-general)
- [✨ Características Principales](#-características-principales)
- [📦 Stack Tecnológico](#-stack-tecnológico)
- [🛠️ Requisitos del Sistema](#️-requisitos-del-sistema)
- [📖 Guía de Instalación](#-guía-de-instalación)
- [⚙️ Parámetros de Validación](#️-parámetros-de-validación)
- [🧪 Motor de Cálculos](#-motor-de-cálculos)
- [💾 Almacenamiento de Datos](#-almacenamiento-de-datos)
- [📊 Ejemplos Prácticos](#-ejemplos-prácticos)
- [🛠 Resolución de Problemas](#-resolución-de-problemas)
- [🚀 Roadmap de Mejoras](#-roadmap-de-mejoras)
- [📞 Contacto y Soporte](#-contacto-y-soporte)

---

## 🎯 Descripción General

**TODO GAS** es una plataforma web profesional de código abierto para cálculo avanzado de redes de gas natural y GLP. Implementa algoritmos de termodinámica e hidrodinámica según la norma técnica colombiana NTC 2505 y estándares internacionales.

### 👥 Público Objetivo

| Usuario              | Caso de Uso                                         |
| -------------------- | --------------------------------------------------- |
| 👨‍💼 Ingenieros Diseño | Cálculo preciso de redes domésticas e industriales  |
| 🏭 Empresas Gas      | Validación de proyectos y cumplimiento normativo    |
| 📋 Consultores       | Asesoría técnica y peritaje                         |
| 👷️ Contratistas      | Diseño de instalaciones comerciales y residenciales |
| 📊 Supervisores      | Revisión y validación de proyectos                  |

---

## ✨ Características Principales

### 🔧 **Funcionalidades Núcleo**

✅ **Gestión Integral de Clientes** - Registro, validación y almacenamiento persistente
✅ **Cálculo de Pérdida de Presión** - Algoritmos Renouard (Baja ≤30mbar) y Müller (Media 100-5000mbar)
✅ **Análisis de Velocidad** - Validación de velocidades según normativa
✅ **Validación Inteligente** - Verificación automática de parámetros críticos
✅ **Reportes PDF Profesionales** - Exportación con gráficos y tablas detalladas
✅ **Interfaz Responsiva** - Compatible con desktop, tablet y mobile
✅ **Almacenamiento Local** - Datos persistentes sin dependencia de servidor
✅ **Análisis de Red** - Validación de topología y ciclos

### 📊 **Capacidades Técnicas Avanzadas**

| Función                       | Descripción                                             |
| ----------------------------- | ------------------------------------------------------- |
| 🌐 **Análisis Topológico**    | Detección de ciclos, validación de conectividad         |
| 📈 **Visualización Gráfica**  | Gráficas interactivas de presión vs longitud            |
| 📄 **Continuidad de Presión** | Validación de presión final = presión inicial siguiente |
| 🎫 **Validación Dinámica**    | Alertas en tiempo real de parámetros fuera de rango     |
| 🎯 **Factores de Material**   | PE AL PE (1.2), Cobre (1.15), Acero (1.25)              |
| ⚡ **Cálculo Simultáneo**     | Procesamiento en paralelo de múltiples caudales         |

---

## 📦 Stack Tecnológico

### 🖥️ **Frontend**

```json
{
  "html5": "5.0 (Semántica y estructura)",
  "javascript": "ES6+ (Vanilla - sin frameworks)",
  "css3": "3.0 (Grid, Flexbox, Transiciones)",
  "responsive-design": "Mobile First"
}
```

### 📚 **Librerías Externas**

| Librería         | Versión | Propósito              | Tamaño  |
| ---------------- | ------- | ---------------------- | ------- |
| **jsPDF**        | 2.5.1   | Generación de PDFs     | ~175 KB |
| **AutoTable**    | 3.7.1   | Tablas en PDF          | ~45 KB  |
| **SweetAlert2**  | 11.x    | Notificaciones modales | ~60 KB  |
| **Font Awesome** | 6.4.0   | Iconos profesionales   | ~60 KB  |
| **Chart.js**     | 3.x     | Gráficos interactivos  | ~85 KB  |

### 🔧 **Tecnologías de Apoyo**

- **localStorage API** - Persistencia de datos (5-10 MB)
- **Canvas API** - Renderizado de gráficos
- **Fetch API** - Comunicaciones asincrónicas
- **ES6 Modules** - Modularización de código

---

## 🛠️ Requisitos del Sistema

### Navegadores Soportados

| Navegador | Versión Mínima | Estado              |
| --------- | -------------- | ------------------- |
| Chrome    | 90+            | ✅ Completo soporte |
| Firefox   | 88+            | ✅ Completo soporte |
| Safari    | 14+            | ✅ Completo soporte |
| Edge      | 90+            | ✅ Completo soporte |

### 💾 Requisitos de Almacenamiento

- **Caché local**: ~10 MB (almacenamiento localStorage)
- **Sesión**: ~500 KB (datos de trabajo actual)
- **Reportes PDF**: 1-5 MB por descarga

### 🌐 Conectividad

- **Online**: Acceso completo a todas las funcionalidades
- **Offline**: Funciones núcleo disponibles (sin exportación PDF)
- **Ancho de banda mínimo**: 1 MB para descarga inicial

---

## 📖 Guía de Instalación

### 🚀 Opción 1: Instalación Local (Recomendado para Desarrollo)

**Paso 1:** Clonar el repositorio

```bash
git clone https://github.com/todogas/sistema-calculos.git
cd sistema-calculos
```

**Paso 2:** Servir los archivos localmente

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server -p 8000 -c-1

# Con Live Server en VS Code
# Clic derecho → Open with Live Server
```

**Paso 3:** Acceder a la aplicación

```text
http://localhost:8000
```

### 📦 Opción 2: Instalación en Servidor Web

```bash
# Copiar archivos al directorio web
cp -r . /var/www/html/todogas/

# Verificar permisos
chmod -R 755 /var/www/html/todogas/
```

### ☁️ Opción 3: Despliegue en Vercel (Hosting Gratuito)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# El aplicativo estará en: https://todogas.vercel.app
```

### 🐳 Opción 4: Contenedor Docker

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t todogas .
docker run -p 80:80 todogas
```

---

## ⚙️ Parámetros de Validación

### 📊 Tabla de Criterios por Régimen de Presión

#### 🔴 **BAJA PRESIÓN (≤30 mbar) - Renouard Lineal**

| Parámetro     | Mínimo | Máximo  | Unidad | Descripción                    |
| ------------- | ------ | ------- | ------ | ------------------------------ |
| Velocidad     | 0.1    | **8.0** | m/s    | Máxima permitida NTC 2505      |
| Pérdida       | 0      | **15%** | %      | Pérdida máxima permisible      |
| Presión Final | **18** | 30      | mbar   | Presión mínima en punto final  |
| Diámetro      | 13     | 35      | mm     | Rango de tuberías normalizadas |
| Caudal        | 0.01   | 50      | m³/h   | Rango de operación típico      |

**Fórmula Implementada:**

```text
ΔP = 25078 × s × LE × Q^1.82 / D^4.82

Donde:
- s = Gravedad específica (0.6 para Gas Natural)
- LE = Factor de equivalencia (1.2 para PE AL PE)
- Q = Caudal (m³/h)
- D = Diámetro interior (mm)
```

#### 🟡 **MEDIA PRESIÓN (100-5000 mbar) - Müller**

| Parámetro       | Mínimo | Máximo   | Unidad | Descripción                     |
| --------------- | ------ | -------- | ------ | ------------------------------- |
| Velocidad       | 0.1    | **15.0** | m/s    | Máxima permitida para Media     |
| Pérdida         | 0      | **12%**  | %      | Pérdida máxima en Media presión |
| Presión Inicial | 100    | 5000     | mbar   | Rango del régimen Media         |
| Presión Final   | **10** | 5000     | mbar   | Presión mínima final            |
| Diámetro        | 20     | 100      | mm     | Tuberías de distribución        |

**Fórmula Implementada:**

```text
P₂² = P₁² - (Q × G^0.425 × L^0.576 / (4.61E-5 × D^2.725))^1.74

Donde:
- P₁ = Presión inicial (mbar)
- P₂ = Presión final (mbar)
- Q = Caudal (m³/h)
- G = Gravedad específica (0.6 Gas Natural)
- L = Longitud de tramo (m)
- D = Diámetro interior (mm)
```

#### 🔵 **VELOCIDAD DEL GAS**

```text
V = 354 × Q × (P + 0.7236)^-1 × D^-2

Donde:
- V = Velocidad (m/s)
- Q = Caudal (m³/h)
- P = Presión (mbar)
- D = Diámetro (mm)
- 354 = Constante de conversión
```

#### 🟢 **PROPIEDADES DEL GAS**

| Gas Natural (GN)      | GLP                   |
| --------------------- | --------------------- |
| Gravedad: 0.6         | Gravedad: 1.52        |
| PATM: 723.6 mbar      | PATM: 101.325 kPa     |
| Densidad: ~0.73 kg/m³ | Densidad: ~1.87 kg/m³ |

---

## 🧪 Motor de Cálculos

### 📝 Algoritmo de Cálculo Baja Presión

```javascript
// Función: calculateRowBAJA(tr, rowIndex)
// Implementación: Renouard Lineal

const caudal = parseFloat(
  document.querySelector('input[data-row="${rowIndex}"][data-col="q"]').value,
);
const longitud = parseFloat(
  document.querySelector('input[data-row="${rowIndex}"][data-col="l"]').value,
);
const diametro = parseFloat(
  document.querySelector('input[data-row="${rowIndex}"][data-col="d"]').value,
);

// Gravedad específica (Gas Natural)
const s = 0.6;

// Cálculo de pérdida de presión
const numerador = 25078 * s * 1.2 * Math.pow(caudal, 1.82);
const denominador = Math.pow(diametro, 4.82);
const perdidaMbar = (numerador / denominador).toFixed(3);

// Cálculo de velocidad
const velocidad = (
  354 *
  caudal *
  Math.pow(pi + 0.7236, -1) *
  Math.pow(diametro, -2)
).toFixed(2);

// Validación de parámetros
const estado =
  velocidad > 8 || perdidaPorcentaje > 15 || pfVal < 18
    ? "RECHAZADO"
    : "APROBADO";
```

### 📝 Algoritmo de Cálculo Media Presión

```javascript
// Función: calculateRowMedia(tr, rowIndex)
// Implementación: Müller

const caudal = getInputValue(rowIndex, "q");
const longitud = getInputValue(rowIndex, "l");
const diametro = getInputValue(rowIndex, "d");

// Gravedad para Gas Natural
const G = 0.6;

// Término de pérdida Müller
const term1 = caudal * Math.pow(G, 0.425) * Math.pow(longitud, 0.576);
const term2 = 4.61e-5 * Math.pow(diametro, 2.725);
const term3 = Math.pow(term1 / term2, 1.74);

// Cálculo de presión final
const p2Squared = Math.pow(pi, 2) - term3;
const pf = Math.sqrt(Math.max(0, p2Squared));

// Validación
const estado =
  velocidad > 15 || perdidaPorcentaje > 12 ? "RECHAZADO" : "APROBADO";
```

### 📈 Ejemplo Práctico de Cálculo

**Escenario:** Apartamento tipo - Estufa 7.38 kW + Calentador 16 kW (Ejemplo Jorge Góngora)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ TRAMO 1: Medidor → Ramales Principales              │
├─────────────────────────────────────────────────────────────────────────┤
│ Caudal: 23.38 m³/h                                  │
│ Diámetro: 16 mm (PE AL PE)                          │
│ Longitud: 35 m                                      │
│ LE: 35 × 1.2 = 42 m                                 │
├─────────────────────────────────────────────────────────────────────────┤
│ ΔP = 25078 × 0.6 × 1.2 × 23.38^1.82 / 16^4.82      │
│ ΔP = 1.471 mbar (1.471%)                            │
│ P Final = 28.529 - 1.471 = 27.058 mbar ✓           │
│ Velocidad = 7.82 m/s ✓ (< 8)                       │
│ Estado: ✅ APROBADO                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 💾 Almacenamiento de Datos

### 📱 localStorage - Estructura

```javascript
{
  "todogas_clientes": {
    "cliente_001": {
      "id": "cliente_001",
      "nombre": "Apartamento 402",
      "ubicacion": "Bogotá D.C.",
      "contacto": "3015949331",
      "fecha_creacion": "2024-01-15T10:30:00Z",
      "estado": "activo"
    }
  },
  "todogas_proyectos": {
    "proyecto_001": {
      "cliente_id": "cliente_001",
      "tipo_gas": "GN",
      "presion": "baja",
      "tramos": [
        {
          "id": 1,
          "q": 23.38,
          "l": 35,
          "d": 16,
          "pi": 28.5,
          "pf": 27.058,
          "perdida": 1.471
        }
      ]
    }
  }
}
```

### 🔐 Política de Privacidad de Datos

- ✅ Todos los datos se almacenan **localmente** en el navegador
- ✅ **Cero transmisión** a servidores externos
- ✅ Usuario tiene control total de sus datos
- ✅ Opción de exportar/importar en JSON
- ✅ Limpieza de datos mediante clear localStorage

### ⚠️ Notas de Seguridad

```bash
# Los datos se guardan en:
# Windows: %APPDATA%\<browser>\User Data\Default\Local Storage\
# Mac:     ~/Library/Application Support/<browser>/
# Linux:   ~/.config/<browser>/

# Límite de almacenamiento:
# - localStorage: 5-10 MB típico
# - sessionStorage: 5-10 MB
# - IndexedDB: 50+ MB disponible
```

---

## 📊 Ejemplos Prácticos

### 📋 Caso 1: Red Residencial Baja Presión

**Datos de Entrada:**

```text
Caudal total: 35 m³/h
Presión inicial: 30 mbar
Tipo de gas: Gas Natural
Material tubería: PE AL PE (LE = 1.2)
```

**Resultados Esperados:**

```text
Tramo 1 (0-20m): Ø16mm → ΔP=2.15%, V=7.5 m/s ✓
Tramo 2 (20-35m): Ø12mm → ΔP=8.43%, V=9.2 m/s ✗ (V>8)
Tramo 3 (35-50m): Ø10mm → ΔP=14.7%, V=10.1 m/s ✗ (V>8)

Recomendación: Cambiar Tramo 2 a Ø16mm y Tramo 3 a Ø12mm
```

### 📋 Caso 2: Red Industrial Media Presión

**Datos de Entrada:**

```text
Caudal total: 150 m³/h
Presión inicial: 2000 mbar
Tipo de gas: Gas Natural
Material tubería: Acero (LE = 1.25)
```

**Resultados Esperados:**

```text
Tramo 1 (0-100m): Ø32mm → ΔP=3.2%, V=12.8 m/s ✓
Tramo 2 (100-250m): Ø25mm → ΔP=7.8%, V=15.3 m/s ✓
Presión Final: 1920 mbar ✓

Estado: ✅ RED VÁLIDA
```

---

## 🛠 Resolución de Problemas

### ❓ Logo no se muestra

**Síntoma:** La imagen del logo aparece rota
**Causas posibles:**

1. Ruta incorrecta en `index.html`
2. Archivo no existe en carpeta `img/`
3. Permisos de lectura incorrectos

**Solución:**

```bash
# Verificar estructura
ls -la img/
# Debe mostrar: logo.png, logo.svg u similar

# Si está en subcarpeta
<img src="img/logo.png" alt="TODO GAS">
<img src="img/favicon/favicon.ico" alt="Favicon">
```

### ❓ Datos no se guardan

**Síntoma:** Los datos ingresados desaparecen al recargar
**Causas posibles:**

1. localStorage deshabilitado
2. Navegador en modo privado
3. Límite de almacenamiento excedido
4. JavaScript deshabilitado

**Solución:**

```javascript
// Verificar disponibilidad de localStorage
if (typeof Storage !== "undefined") {
  localStorage.setItem("test", "1");
  console.log("✅ localStorage disponible");
} else {
  console.log("❌ localStorage no soportado");
  alert("Active JavaScript y deshabilite modo privado");
}

// Limpiar espacio si es necesario
localStorage.clear(); // Cuidado: borra todo
```

### ❓ PDF no se genera

**Síntoma:** Error al exportar a PDF
**Causas posibles:**

1. jsPDF no cargó correctamente
2. Datos vacíos en la tabla
3. Navegador bloquea ventanas emergentes

**Solución:**

```javascript
// Verificar jsPDF
console.log(typeof jsPDF); // Debe ser "function"

// Verificar datos antes de exportar
if (tableData.length === 0) {
  alert("⚠️ Agregue datos antes de exportar");
  return;
}

// Permitir ventanas emergentes en navegador
// Settings → Privacy → Pop-ups → Permitir
```

### ❓ Cálculos no coinciden

**Síntoma:** Resultados diferentes a cálculo manual
**Causas posibles:**

1. Factor LE incorrecto
2. Unidades diferentes (mbar vs bar vs kPa)
3. Fórmula seleccionada incorrecta
4. Redondeo de decimales

**Solución:**

```text
Verificar:
1. ¿Presión inicial en mbar? (NO en bar o kPa)
2. ¿Caudal en m³/h? (NO en l/h o m³/s)
3. ¿Diámetro en mm? (NO en cm o pulgadas)
4. ¿LE correcta? Baja: 1.2, Media: 0.2
5. ¿Gas correcto? GN (0.6) vs GLP (1.52)

Ejemplo verificación:
Input:  Q=10 m³/h, L=20m, D=13mm, LE=1.2
Cálculo: ΔP = 25078×0.6×1.2×10^1.82/13^4.82
       = 25078×0.6×1.2×62.59/11,068.5
       = 0.855 mbar ✓
```

### ❓ Red no se calcula

**Síntoma:** La red completa no procesa los cálculos
**Causas posibles:**

1. Ciclos detectados en topología
2. Datos incompletos en tramos
3. Presión inicial < presión final
4. Conexiones inválidas

**Solución:**

```bash
# Verificar estructura de red
- Cada nodo debe tener entrada y salida
- No debe haber ciclos cerrados
- Presión debe disminuir en cada tramo
- Todos los campos obligatorios llenos

# Usar validación previa
console.log("Nodos:", red.nodos.length);
console.log("Tramos:", red.tramos.length);
console.log("Ciclos:", detectarCiclos(red));
```

---

## 🚀 Roadmap de Mejoras

### 🔵 v2.3.0 (Próximo - Q1 2026)

- [ ] Selector dinámico GLP/GN en interfaz
- [ ] Exportación a Excel con múltiples hojas
- [ ] Gráficos de velocidad vs presión
- [ ] Historial de cambios y versioning
- [ ] Undo/Redo en edición de tablas
- [ ] Validación de unidades automática

### 🟢 v3.0.0 (Mediano Plazo - Q2-Q3 2026)

- [ ] Backend Node.js + Base de datos
- [ ] Autenticación de usuarios
- [ ] Sincronización en la nube
- [ ] Colaboración en tiempo real
- [ ] Control de versiones de proyectos
- [ ] API REST para integración

### 🟡 v3.1.0 (Largo Plazo - Q4 2026+)

- [ ] Análisis de ciclo de vida (LCA)
- [ ] Optimización automática de diámetros
- [ ] Simulación 3D de redes
- [ ] Machine Learning para predicción
- [ ] Móvil app iOS/Android nativa
- [ ] Integración con sensores IoT
- [ ] Reportes automatizados por correo

### 🔴 Características Futuras

- [ ] Multiidioma (EN, FR, PT)
- [ ] Integración con CAD (AutoCAD, DWG)
- [ ] Costos de materiales en tiempo real
- [ ] Análisis de confiabilidad
- [ ] Auditoría completa de cambios
- [ ] Integración SCADA/HMI

---

## 📞 Contacto y Soporte

### 🆘 Canales de Atención

| Canal        | Contacto                                                    | Disponibilidad | Respuesta |
| ------------ | ----------------------------------------------------------- | -------------- | --------- |
| 📧 Email     | [todogassyr@hotmail.com]                                    | 24/7           | 24 horas  |
| 💬 WhatsApp  | +57 301 594 9331                                            | L-V 8AM-5PM    | 1 hora    |
| 🐛 Issues    | GitHub Issues                                               | 24/7           | 48 horas  |

### 🏢 Información Corporativa

```text
TODO GAS SYR S.A.S
Dirección: Tunja - Boyacá Calle 28 N° 18 - 38
NIT: 901126243-3
Contacto: todogassyr@hotmail,com
Teléfono: +57 322 361 8360
```

### 🤝 Contribución

¡Contribuciones bienvenidas! Para reportar bugs o sugerir features:

1. Fork el repositorio
2. Crea rama: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Abre Pull Request

### 📜 Licencia

Este proyecto está bajo licencia **MIT** - ver archivo [LICENSE](LICENSE) para detalles.

```text
MIT License

Copyright (c) 2026 TODO GAS SYR S.A.S

Permission is hereby granted, free of charge...
```

### 🎯 Más Información

- **Documentación Técnica:** [docs/TECNICA.md](docs/TECNICA.md)
- **Guía de Contribución:** [CONTRIBUTING.md](CONTRIBUTING.md)
- **Código de Conducta:** [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- **Cambios Recientes:** [CHANGELOG.md](CHANGELOG.md)

---

## ⭐ Reconocimientos

- 📚 **Normativa:** Basado en NTC 2505 - Instalaciones de Gas Natural
- 🎓 **Referencias:** Manuales de cálculo Jorge Góngora y Renouard
- 🙏 **Comunidad:** Gracias a todos los usuarios y contribuidores

---

**Hecho con ❤️ por LUIS SILVESTRE - TODOGAS** - _2026_
