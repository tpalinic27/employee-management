# employee-management
Frontend - React / Backend - Spring Boot Java 8


Employee management system using <b>React</b> as frontend, <b>Spring Boot</b> as backend and <b>MySQL database</b>.

Basic <b>CRUD</b> operations.
In addition there is a <b>VIEW employee</b> component in which Employee details are seen. 

To start this project download <b>Spring Tool Suite 4, Visual Studio Code and MySQL</b>. Make sure you've downloaded MySQL community installer 
and installed all necessary components. In MySQLworkbench connect to server and make a database.

Open Spring Tool Suite 4 and import springboot-backend. In application.properties change: 

spring.datasource.url=jdbc:mysql://localhost:3306/<b>db_name</b>?allowPublicKeyRetrieval=true&useSSL=false

spring.datasource.username= <b>your MySQL username</b>

spring.datasource.password= <b>your MySQL password</b> and save. Go to EmployeeBackendApplication.java and run it. The port should be localhost:8080. 

Open Studio Code. Make sure you've installed react and necessary components. Go to terminal and type cd react-frontend. Then type npm start. It should
open your default browser to localhost:3000 and show the project. 
