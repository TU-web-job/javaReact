# 1. フロントのビルド
FROM node:22-alpine AS frontend-build
WORKDIR /front
COPY ./front/package*.json ./
RUN npm install
COPY ./front/ ./
RUN npm run build  # out/フォルダ生成

# 2. バックエンドのビルド
FROM eclipse-temurin:17-jdk AS backend-build
WORKDIR /back
# Gradle wrapper 関連ファイルのみコピー
COPY ./back/ ./
RUN chmod +x ./gradlew
# フロントの静的ファイルを Spring Boot にコピー
COPY --from=frontend-build /front/out ./src/main/resources/static
RUN ./gradlew clean build -x test

# 3. 実行用
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=backend-build /back/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]