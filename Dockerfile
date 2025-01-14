FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
VOLUME ["/var/log/subway"]
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=test","/app.jar"]

# 출처 https://spring.io/guides/gs/spring-boot-docker/
