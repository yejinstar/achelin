# Gradle 빌드 단계
FROM gradle:7.4-jdk17-alpine as builder
WORKDIR /build

# Gradle 프로젝트 파일 복사
COPY build.gradle settings.gradle /build/
RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true

# 빌드 수행
COPY . /build
RUN gradle build -x test --parallel

# APP 실행 단계
FROM openjdk:17.0-slim
WORKDIR /app

# 빌드된 JAR 파일을 복사
COPY --from=builder /build/build/libs/*-SNAPSHOT.jar ./app.jar

# 컨테이너 내에서 JAR 파일 실행
ENTRYPOINT ["java", "-jar", "app.jar"]
