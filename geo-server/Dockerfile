# backend/geo-server/Dockerfile
FROM python:3.12-slim

WORKDIR /app

# Instalar dependencias necesarias
RUN pip install --no-cache-dir pygeoapi psycopg2-binary flask-cors

# Copiar configuración
COPY config/pygeoapi-config.yml /app/pygeoapi-config.yml
COPY config/openapi.yml /app/openapi.yml

# Variables de entorno (como hacíamos en Colab)
ENV PYGEOAPI_CONFIG=/app/pygeoapi-config.yml
ENV PYGEOAPI_OPENAPI=/app/openapi.yml

EXPOSE 5000

CMD ["pygeoapi", "serve"]