# Webapp diaria de Bruno — Especificación para Codex

## Objetivo

Crear una webapp móvil, optimizada para iPhone, que convierta la rutina diaria de Bruno en un sistema visual, claro y fácil de completar.

La app debe seguir las ideas trabajadas en *Your Brain at Work*:

- sacar las tareas de la cabeza;
- reducir la carga de memoria de trabajo;
- agrupar tareas por tipo de esfuerzo;
- priorizar antes de empezar;
- trabajar una sola cosa a la vez;
- registrar el avance sin volver el sistema pesado;
- mostrar progreso diario y semanal.

La experiencia debe sentirse parecida a una app de entrenamiento: abrir, ver el plan del día, completar bloques, registrar resultados y cerrar la sesión.

---

## Instrucción principal para Codex

Construye una webapp completa y funcional para el seguimiento diario de Bruno.

Debe estar pensada principalmente para usarse desde un iPhone, pero también debe funcionar correctamente en escritorio.

No hagas únicamente un prototipo visual. Implementa la lógica, la persistencia local, el progreso diario, el historial y la edición de tareas.

---

## Stack sugerido

Usa:

- Next.js con App Router;
- TypeScript;
- Tailwind CSS;
- componentes accesibles;
- `localStorage` como persistencia inicial;
- sin base de datos en la primera versión;
- sin autenticación en la primera versión;
- PWA instalable;
- diseño responsive;
- modo claro y oscuro;
- iconos con Lucide React.

En caso de que el proyecto existente use otra estructura, adapta la implementación sin romper lo que ya funciona.

---

## Filosofía de uso

La app debe presentar primero lo importante y evitar mostrar todas las tareas como una lista interminable.

Organiza el día en bloques:

1. Preparación del día
2. Cuerpo y nutrición
3. Lectura y atención
4. Guitarra técnica
5. Guitarra aplicada
6. Repertorio
7. Cierre del día

Cada bloque debe poder:

- abrirse y cerrarse;
- marcarse como completado;
- mostrar progreso interno;
- guardar datos;
- editarse;
- reiniciarse para el día siguiente.

La app debe mostrar una sola tarjeta principal a la vez cuando se active el modo de enfoque.

---

# Funcionalidades obligatorias

## 1. Pantalla de inicio

Mostrar:

- saludo breve;
- fecha actual;
- porcentaje de avance del día;
- número de tareas terminadas;
- energía inicial del día;
- botón principal: `Comenzar el día`;
- acceso a historial;
- acceso a configuración;
- resumen semanal pequeño.

Ejemplo:

> Hoy tienes 11 tareas.  
> Empieza por decidir qué requiere más atención.

---

## 2. Preparación del día

Antes de mostrar toda la rutina, pedir:

### Energía inicial

Selector de 1 a 5:

- 1: muy baja;
- 2: baja;
- 3: normal;
- 4: buena;
- 5: muy buena.

### Prioridad del día

Permitir elegir una sola prioridad:

- lectura;
- técnica de guitarra;
- ritmo;
- diapasón;
- repertorio;
- sentadilla;
- nutrición.

### Nota breve

Campo opcional:

`¿Qué necesitas cuidar hoy?`

Ejemplos:

- no correr;
- contar en voz alta;
- revisar postura;
- mantener la atención;
- tocar lento y limpio.

---

## 3. Cuerpo y nutrición

### Calorías y macros

Metas predeterminadas:

- 2000 kcal;
- 180 g de proteína;
- 40 g de grasas;
- 230 g de carbohidratos.

Permitir registrar comidas:

- nombre de la comida;
- calorías;
- proteína;
- grasas;
- carbohidratos.

Mostrar acumulado y restante.

Ejemplo:

- Calorías: `1450 / 2000`
- Proteína: `120 / 180 g`
- Grasas: `32 / 40 g`
- Carbohidratos: `170 / 230 g`

Usar barras de progreso.

No bloquear el día si se excede una meta. Mostrarlo de manera neutral.

### Sentadillas

Tarea:

`Grabar video de sentadillas de frente`

Permitir:

- marcar como completada;
- agregar una nota;
- registrar número de repeticiones;
- registrar sensación técnica del 1 al 5;
- adjuntar o seleccionar un video local cuando el navegador lo permita.

En esta primera versión no es necesario subir el video a un servidor. Basta con permitir seleccionarlo y mostrar su nombre, aclarando que no se sincroniza entre dispositivos.

---

## 4. Lectura y atención

Tarea diaria inicial:

`Leer durante 5 minutos sin perder la atención`

Elementos:

- temporizador;
- botón iniciar;
- pausa;
- continuar;
- terminar;
- duración objetivo editable;
- aumento manual de un minuto;
- historial de duración alcanzada.

Al terminar, pedir:

### Atención

Escala de 1 a 5.

### Comprensión

Escala de 1 a 5.

### Resumen

Campo breve:

`Escribe en una o dos frases lo que entendiste.`

### Palabras desconocidas

Lista editable:

- palabra;
- significado;
- ejemplo opcional.

Debe existir un botón:

`Agregar palabra`

La app no debe aumentar automáticamente el tiempo. Debe sugerirlo cuando Bruno complete al menos tres sesiones con:

- atención de 4 o 5;
- comprensión de 4 o 5;
- sin abandonar el temporizador.

Mensaje sugerido:

> Ya dominas este tiempo. Puedes subir un minuto cuando estés listo.

---

## 5. Guitarra técnica

Separar las tareas en tarjetas independientes.

### Tarjeta A — Rasgueos nivel 1

Texto:

`Ejercicios 1–4 del nivel 1 con enlaces I–V, primero sin drums.`

Controles:

- sin drums;
- contar en voz alta;
- usar el pie;
- repeticiones realizadas;
- nota breve.

### Tarjeta B — C–G

Texto:

`Realizar 20 repeticiones adicionales de C–G.`

Agregar:

- contador grande;
- botón `+1`;
- botón `+5`;
- reiniciar;
- meta 20;
- marcar automáticamente como completa al llegar a 20.

### Tarjeta C — Rasgueos con drums

Texto:

`Nivel 1, ejercicios 5–6, y nivel 2, ejercicios 1–6.`

Condiciones:

- drums a 70 bpm;
- usar el pie;
- contar;
- sin cambio de acordes.

Permitir:

- marcar cada ejercicio por separado;
- registrar bpm;
- registrar limpieza del 1 al 5.

### Tarjeta D — Patrones de Good Riddance

Texto:

`Practicar los patrones de Good Riddance con drums a 60 bpm y velocidad 0.60, con cambio de acordes.`

Controles:

- bpm;
- velocidad;
- cambio de acordes;
- repeticiones;
- evaluación de precisión del 1 al 5.

---

## 6. Diapasón y CAGED

### Pentatónica

Texto:

`Tocar con plumilla todas las posiciones de la pentatónica usando CAGED.`

Mostrar las posiciones:

- C;
- A;
- G;
- E;
- D.

Cada posición debe tener:

- casilla;
- número de repeticiones;
- nota;
- precisión del 1 al 5.

### Posiciones de acordes

Texto:

`Aprender las posiciones E, A, D, C y G e identificar la cuerda que manda.`

Mostrar una tarjeta por posición:

- E;
- A;
- D;
- C;
- G.

Dentro de cada tarjeta:

- cuerda que manda;
- forma aprendida;
- se puede tocar;
- se puede nombrar;
- se puede mover por el diapasón.

### Cejilla de E

Texto:

`Practicar la cejilla de la posición de E diciendo los acordes en sostenido y bemol.`

Incluir:

- selector de nota;
- opción de sostenidos;
- opción de bemoles;
- botón para generar una nota aleatoria;
- campo para que Bruno escriba el nombre;
- botón para mostrar respuesta;
- contador de aciertos;
- contador de intentos.

---

## 7. App de notas del diapasón

Incluir una sección básica dentro de la misma webapp.

Debe mostrar:

- una cuerda;
- un traste;
- una pregunta: `¿Qué nota es?`;
- campo o botones de respuesta;
- respuesta correcta;
- conteo de aciertos;
- conteo de errores;
- precisión total.

Opciones:

- seis cuerdas;
- trastes 0–12;
- sostenidos;
- bemoles;
- modo mixto;
- práctica;
- examen.

La nota debe poder mostrarse en notación latina:

- Do;
- Do♯ / Re♭;
- Re;
- Re♯ / Mi♭;
- Mi;
- Fa;
- Fa♯ / Sol♭;
- Sol;
- Sol♯ / La♭;
- La;
- La♯ / Si♭;
- Si.

---

## 8. Good Riddance completa

Texto:

`Tocar Good Riddance con sus acordes, tocando todos los números y todos los “y” a velocidad 0.55.`

Checklist interno:

- acordes correctos;
- todos los números;
- todos los “y”;
- picking correcto;
- orden correcto;
- dirección arriba/abajo;
- velocidad 0.55;
- tocar de principio a fin.

Agregar:

- tempo o velocidad;
- número de intentos;
- mejor intento del día;
- nota breve;
- evaluación general del 1 al 5.

---

## 9. Repertorio

Canción inicial:

### Wonderwall

Enlace:

`https://www.youtube.com/watch?v=LRXRm0eMZZY`

Mostrar:

- botón para abrir el video;
- acordes dominados;
- patrón rítmico dominado;
- tocar por secciones;
- tocar completa;
- dificultad del día del 1 al 5;
- nota para la próxima sesión.

Permitir agregar más canciones desde configuración.

Cada canción debe tener:

- título;
- enlace;
- estado;
- notas;
- última práctica;
- porcentaje de dominio.

---

## 10. Modo enfoque

Agregar un botón:

`Entrar en modo enfoque`

En este modo:

- ocultar navegación secundaria;
- mostrar una sola tarea;
- mostrar instrucciones breves;
- mostrar temporizador opcional;
- mostrar botón `Completar`;
- mostrar botón `Siguiente`;
- permitir salir.

No mostrar simultáneamente todos los bloques.

El modo enfoque debe recordar la última tarea abierta.

---

## 11. Cierre del día

Al terminar, mostrar:

### Evaluación general

- atención: 1–5;
- energía final: 1–5;
- satisfacción: 1–5.

### Preguntas

- `¿Qué salió mejor hoy?`
- `¿Qué necesitas corregir mañana?`
- `¿Qué tarea requiere prioridad mañana?`

### Resumen automático

Ejemplo:

> Completaste 8 de 11 tareas.  
> Tu mejor bloque fue lectura.  
> Tu menor avance fue diapasón.  
> Mañana conviene empezar por CAGED.

Permitir:

- guardar día;
- reabrir día;
- corregir datos;
- duplicar plan para mañana.

---

# Historial

Crear una pantalla de historial con:

- calendario;
- días completados;
- porcentaje diario;
- minutos de lectura;
- comprensión;
- atención;
- calorías;
- macros;
- tareas de guitarra;
- repertorio;
- notas del día.

Mostrar resumen semanal:

- promedio de cumplimiento;
- promedio de atención;
- minutos totales de lectura;
- días con práctica de guitarra;
- días con nutrición registrada;
- racha actual;
- mejor racha.

No usar gráficas complejas en la primera versión. Barras y tarjetas son suficientes.

---

# Configuración

Permitir editar:

- metas de calorías;
- macros;
- minutos iniciales de lectura;
- bpm;
- velocidad;
- número de repeticiones;
- tareas visibles;
- orden de bloques;
- canciones;
- nombres de ejercicios;
- modo claro u oscuro;
- reinicio manual del día;
- exportación;
- importación.

---

# Persistencia

Usar `localStorage`.

Guardar:

- configuración;
- datos diarios;
- historial;
- progreso;
- canciones;
- palabras desconocidas;
- estadísticas;
- último bloque abierto;
- modo de color.

Usar una estructura versionada.

Ejemplo:

```ts
type AppData = {
  version: 1;
  settings: Settings;
  days: Record<string, DayRecord>;
  repertoire: Song[];
  vocabulary: VocabularyItem[];
};
```

Crear funciones:

- `loadAppData`;
- `saveAppData`;
- `migrateAppData`;
- `exportAppData`;
- `importAppData`;
- `resetCurrentDay`.

Validar la información importada antes de guardarla.

---

# Exportación

Agregar:

- exportar respaldo en JSON;
- importar respaldo en JSON;
- exportar resumen semanal en texto;
- botón para copiar el resumen.

No es necesario generar PDF en esta primera versión.

---

# PWA

La app debe poder instalarse en iPhone.

Agregar:

- `manifest.webmanifest`;
- nombre;
- nombre corto;
- iconos;
- color del tema;
- modo standalone;
- service worker;
- funcionamiento offline básico.

Mostrar una pequeña instrucción para iPhone:

> Compartir → Agregar a pantalla de inicio.

---

# Diseño visual

## Estilo

- limpio;
- sobrio;
- juvenil;
- no infantil;
- fácil de leer;
- sin saturación;
- tarjetas amplias;
- botones grandes;
- buena separación;
- tipografía legible.

## Colores sugeridos

- azul oscuro para encabezados;
- azul claro para nutrición;
- amarillo suave para lectura;
- verde suave para tareas completadas;
- violeta suave para repertorio;
- gris neutro para información secundaria.

## Interacción

- áreas táctiles de al menos 44 px;
- evitar tablas anchas;
- evitar texto pequeño;
- usar barras de progreso;
- usar checkboxes grandes;
- confirmar solo acciones destructivas;
- mostrar mensajes breves de guardado.

---

# Accesibilidad

Implementar:

- etiquetas accesibles;
- navegación por teclado;
- contraste suficiente;
- estados de foco visibles;
- texto alternativo;
- `aria-label` donde sea necesario;
- botones reales, no `div` simulando botones;
- soporte para tamaño de texto aumentado.

---

# Componentes sugeridos

```txt
AppShell
DailyHeader
DailyProgress
EnergySelector
PrioritySelector
FocusMode
TaskBlock
TaskCard
Checklist
Counter
Timer
RatingScale
MacroTracker
MealEntryForm
ReadingSession
VocabularyList
GuitarExerciseCard
CagedTracker
FretboardQuiz
SongCard
DailyReview
WeeklySummary
HistoryCalendar
SettingsPanel
ExportImportPanel
InstallPwaPrompt
```

---

# Modelo de datos sugerido

```ts
type Rating = 1 | 2 | 3 | 4 | 5;

type MealEntry = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};

type ReadingRecord = {
  targetMinutes: number;
  completedMinutes: number;
  attention: Rating | null;
  comprehension: Rating | null;
  summary: string;
  completed: boolean;
};

type VocabularyItem = {
  id: string;
  date: string;
  word: string;
  meaning: string;
  example?: string;
};

type ExerciseRecord = {
  id: string;
  title: string;
  completed: boolean;
  repetitions?: number;
  bpm?: number;
  speed?: number;
  accuracy?: Rating | null;
  notes?: string;
};

type Song = {
  id: string;
  title: string;
  url?: string;
  mastery: number;
  notes: string;
  lastPracticed?: string;
};

type DayRecord = {
  date: string;
  started: boolean;
  completed: boolean;
  initialEnergy: Rating | null;
  finalEnergy: Rating | null;
  attention: Rating | null;
  satisfaction: Rating | null;
  priority: string | null;
  dailyNote: string;
  meals: MealEntry[];
  squatCompleted: boolean;
  squatRepetitions?: number;
  squatTechnique?: Rating | null;
  reading: ReadingRecord;
  exercises: ExerciseRecord[];
  songsPracticed: string[];
  bestResult: string;
  correctionForTomorrow: string;
  nextPriority: string;
  completionPercentage: number;
};
```

---

# Rutas sugeridas

```txt
/
  Inicio del día

/today
  Rutina del día

/focus
  Modo enfoque

/history
  Historial

/repertoire
  Canciones

/fretboard
  App de notas

/settings
  Configuración
```

Puede usarse navegación inferior en móvil:

- Hoy;
- Enfoque;
- Historial;
- Repertorio;
- Ajustes.

---

# Lógica de progreso

Cada tarea debe tener un peso igual en la primera versión.

El porcentaje diario puede calcularse así:

```ts
const percentage = Math.round(
  (completedTasks / totalVisibleTasks) * 100
);
```

Las comidas no deben considerarse completadas por cada registro individual. El bloque de nutrición se considera completado cuando Bruno pulse:

`Cerrar registro de nutrición del día`

La lectura se considera completa cuando:

- termina el temporizador;
- registra atención;
- registra comprensión.

Las tareas de guitarra deben completarse de manera independiente.

---

# Estados vacíos y mensajes

Ejemplos:

### Sin historial

> Todavía no hay días guardados. Completa tu primera sesión.

### Sin comidas

> Aún no has registrado alimentos.

### Sin palabras

> No encontraste palabras nuevas hoy.

### Día completo

> Terminaste el plan de hoy. Guarda el día y descansa.

### Racha

> Llevas 4 días trabajando con constancia.

Evitar mensajes de culpa o castigo.

No usar:

- “fallaste”;
- “perdiste”;
- “mal día”;
- “no cumpliste”.

Preferir:

- “quedó pendiente”;
- “puedes retomarlo mañana”;
- “avanzaste en…”;
- “tu siguiente prioridad es…”.

---

# Criterios de aceptación

La primera versión se considera terminada cuando:

1. Se puede abrir desde iPhone.
2. Se puede instalar como PWA.
3. Bruno puede comenzar un día.
4. Puede elegir energía y prioridad.
5. Puede registrar calorías y macros.
6. Puede usar el temporizador de lectura.
7. Puede registrar comprensión y atención.
8. Puede guardar palabras nuevas.
9. Puede marcar todos los ejercicios de guitarra.
10. Puede usar el contador C–G.
11. Puede practicar el cuestionario básico de notas.
12. Puede registrar Wonderwall.
13. Puede entrar en modo enfoque.
14. Puede cerrar y guardar el día.
15. Los datos sobreviven al recargar la página.
16. Se puede consultar el historial.
17. Se puede exportar e importar un respaldo.
18. Funciona sin conexión después de la primera carga.
19. No hay errores de TypeScript.
20. No hay errores visibles en consola.

---

# Orden de implementación

## Fase 1

- estructura del proyecto;
- navegación;
- modelo de datos;
- `localStorage`;
- pantalla de inicio;
- rutina diaria;
- checklists;
- progreso.

## Fase 2

- nutrición;
- temporizador de lectura;
- vocabulario;
- contadores;
- evaluaciones.

## Fase 3

- diapasón;
- CAGED;
- repertorio;
- modo enfoque;
- historial.

## Fase 4

- PWA;
- exportación e importación;
- modo oscuro;
- accesibilidad;
- pruebas;
- pulido visual.

---

# Pruebas mínimas

Crear pruebas para:

- cálculo de porcentaje;
- guardado y carga;
- migración de datos;
- reinicio del día;
- temporizador;
- contador C–G;
- suma de macros;
- exportación;
- importación inválida;
- generación de notas del diapasón.

Probar manualmente:

- Safari en iPhone;
- Chrome en escritorio;
- pantalla pequeña;
- recarga;
- cierre y reapertura;
- uso offline;
- datos incompletos;
- metas excedidas.

---

# Entrega esperada de Codex

Codex debe:

1. revisar el proyecto existente;
2. explicar brevemente la arquitectura encontrada;
3. proponer un plan de cambios;
4. implementar la app;
5. mantener el código modular;
6. no eliminar funciones existentes;
7. ejecutar lint;
8. ejecutar TypeScript;
9. ejecutar pruebas;
10. corregir errores;
11. dejar instrucciones de ejecución;
12. resumir archivos creados o modificados.

Al terminar debe entregar:

- resumen de implementación;
- rutas creadas;
- decisiones técnicas;
- comandos para ejecutar;
- comandos para probar;
- pendientes reales, si los hay.

---

# Prompt breve para pegar directamente en Codex

```txt
Construye una webapp móvil para el seguimiento diario de Bruno siguiendo completamente la especificación del archivo BRUNO_WEBAPP_SPEC.md.

Primero revisa el repositorio y explícame brevemente su arquitectura. Después propón un plan y ejecútalo sin detenerte a pedir confirmación por cada archivo.

La app debe usar Next.js, TypeScript y Tailwind, adaptándose al stack ya existente. Debe ser una PWA optimizada para iPhone, funcionar offline y guardar los datos en localStorage.

Implementa todas las pantallas, componentes, lógica, historial, modo enfoque, nutrición, lectura con temporizador, vocabulario, ejercicios de guitarra, CAGED, app de notas del diapasón, repertorio, cierre diario, exportación e importación.

No hagas solo un mockup. La aplicación debe ser funcional.

Al terminar:

- ejecuta lint;
- ejecuta TypeScript;
- ejecuta pruebas;
- corrige los errores;
- resume los archivos modificados;
- deja instrucciones claras para correr la app.
```
