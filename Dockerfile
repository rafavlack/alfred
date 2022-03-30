FROM openjdk:17-alpine
VOLUME /tmp
EXPOSE 8082
ARG JAR_FILE=target/alfred-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]