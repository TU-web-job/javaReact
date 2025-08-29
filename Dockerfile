# 1. フロントのビルド
FROM node:22-alpine AS frontend-build
WORKDIR /front
COPY ./front/package*.json ./
RUN npm install
COPY ./front/ ./
RUN npm run build
RUN npm run export   # out/フォルダ生成

# 2. バックエンドのビルド
FROM gradle:8.3-jdk17 AS backend-build
WORKDIR /back
COPY ./back/.gradle ./back/settings.gradle ./back/gradlew ./
COPY ./back/gradle ./gradle
COPY ./back/src ./src
# フロントの静的ファイルを Spring Boot にコピー
COPY --from=frontend-build /front/out ./src/main/resources/static
RUN ./gradlew clean build -x test

# 3. 実行用
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=backend-build /back/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]