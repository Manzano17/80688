package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ){
        System.out.println( "Hello World!" );
        get("/", 
                (request, response) -> "<h1>Bienvenido!</h1>"
        );
        get("/hola", 
                (request, response) -> "<h1>Hola Mundo!</h1>"
        );
        get("/adios", 
                (request, response) -> "<h1>Adios Mundo!</h1>"
        );
        get("/fin", 
                (request, response) -> "<h1>Fin Mundo!</h1>"
        );
    }
}
