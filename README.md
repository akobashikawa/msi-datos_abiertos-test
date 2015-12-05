# MSI Datos Abiertos - Test

Para probar el API de datos abiertos de la Municipalidad de San Isidro.

> __Nota:__ Este ejemplo muestra jQuery + Bootstrap + AngularJS en el cliente y NodeJS en el servidor.
> Para ver un ejemplo usando únicamente cliente: https://github.com/akobashikawa/msi-datos_abiertos-test-angular/

## Requiere

- Tener instalado NodeJS. Para comprobarlo: `$ node --version`

## Instrucciones

- Clonar el repositorio
- `$ npm install`
- `$ npm start`
- Entrar a: `http://localhost:3000`

## Para conseguir el API Key

- Entrar a http://datosabiertos.msi.gob.pe/developers
- Hacer click en el botón __¡Obtén tu API key!__

## Para conseguir el GUI

- Entrar a http://datosabiertos.msi.gob.pe/home/
- Elegir una categoría. Por ejemplo, __Educación y Cultura__: http://datosabiertos.msi.gob.pe/dashboards/9235/educacion-y-cultura/
- Elegir algún panel. Por ejemplo, __ACTIVIDADES CULTURALES__, hacer click en el botón __Acciones__. En el menú que se despliega, hacer click en __Obtener GUID__. En este caso resultará: `ACTIV-CULTU-86315`
