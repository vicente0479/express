# Imagen base liviana
FROM node:18-alpine

# Carpeta de trabajo
WORKDIR /app

# Solo manifests primero (cache)
COPY package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Puerto de la app (documentación)
EXPOSE 3002

# Comando por defecto
CMD ["npm", "start"]
