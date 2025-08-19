# node-docker-simple

App mínima con **Express** y **dayjs**.

## Rutas
- `GET /` → `{ ok, message, now }`
- `GET /saludo/:nombre` → saludo con timestamp

## Correr sin Docker
```bash
npm install
npm start
# http://localhost:3002
```

## Construir y correr con Docker
```bash
docker build -t node-simple:1.0 .
docker run --rm -d -p 3002:3002 --name node-simple node-simple:1.0
# http://localhost:3002
```
