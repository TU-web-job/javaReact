# 1. ビルド用
FROM maven:3.9.0-eclipse-temurin-17 AS build
WORKDIR /app
COPY back/pom.xml .
COPY back/src ./src
RUN mvn clean package -DskipTests

# 2. 実行用
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]