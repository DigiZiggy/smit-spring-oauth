## Spring Security OAuth - Test Assignment

Role based currency exchange website.

### Relevant information:

1. `auth-server` is a Keycloak Authorization Server wrapped as a Spring Boot application
2. There is one OAuth Client registered in the Authorization Server:
   1. Client Id: smitFront
   2. Client secret: clientSecret
   3. Redirect Uri: http://localhost:8089/
3. There is an OAuth Angular Front-end App:
   `angular-client` 
4. `server` is a resource server - Spring Boot based RESTFul API, acting as a backend Application
5. There are two users registered in the Authorization Server:
   1. jaak@smit / 123 
   2. mikk@smit / pass
6. There are two users with different roles registered in Resource Server
   1. ADMIN - jaak@smit
   2. USER - mikk@smit


## Technologies used

- Java 11
- REST API
- Maven
- Spring Boot
- Spring Data JPA
- H2 Embedded Database
- Keycloak
- Angular


## How to use?

To run the Authorization Server
```
cd auth-server
mvn clean install
mvn spring-boot:run
```

To run the Resource Server
```
cd server
mvn clean install
mvn spring-boot:run
```

To run the client
```
cd angular-client
mvn clean install
cd src/main/app
npm start
```

Access ```http://localhost:8089/```