FROM openjdk:17-jre
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]