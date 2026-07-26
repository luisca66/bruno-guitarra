# Bruno · práctica de guitarra

Webapp diaria optimizada para iPhone. Reúne preparación del día, nutrición, lectura, técnica de guitarra, CAGED, diapasón, repertorio, modo enfoque e historial. Los datos se guardan únicamente en el navegador mediante `localStorage`.

## Ejecutar

Requiere Node.js 22.13 o posterior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para instalarla en iPhone, abre la dirección publicada en Safari y elige **Compartir → Agregar a pantalla de inicio**.

## Validar

```bash
npm run build
npm run lint
npm test
```

## Datos y respaldos

La pantalla Ajustes permite exportar o importar un respaldo JSON. Los videos seleccionados para sentadilla no se guardan ni se sincronizan; sólo se conserva su nombre. El service worker mantiene una copia básica de la app para uso sin conexión después de la primera visita.
