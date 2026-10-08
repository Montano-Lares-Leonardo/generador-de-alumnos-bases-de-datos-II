        var salida = "", opcion = "";
        const apellidos = [
            "Hernández", "García", "Martínez", "González", "López", "Rodríguez", "Pérez", "Sánchez",
            "Ramírez", "Flores", "Gómez", "Torres", "Díaz", "Vásquez", "Cruz", "Morales", "Gutiérrez",
            "Reyes", "Ruíz", "Jiménez", "Mendoza", "Aguilar", "Ortiz", "Álvarez", "Castillo", "Ramos",
            "Rivera", "Chávez", "Santiago", "Herrera", "Vargas", "Medina", "Rojas", "Muñoz", "Salazar",
            "Guzmán", "Rueda", "Valdez", "Soto", "Delgado", "Romero", "Guerrero", "Villarreal", "Luna",
            "Campos", "Marín", "Cortés", "Núñez", "Pineda", "Lara", "Bravo", "Cabrera", "Espinoza",
            "Carrillo", "Barrios", "Camacho", "Ochoa", "Márquez", "Valencia", "Benítez", "Pacheco",
            "Valle", "Peña", "Cárdenas", "Domínguez", "Ponce", "Arias", "Cano", "Montoya", "Sandoval",
            "Tapia", "Zamora", "Estrada", "Cardenas", "Acosta", "Castañeda", "Mejía", "Solis", "Fuentes",
            "Serrano", "Ayala", "Guajardo", "Palacios", "Páez", "Ceniceros", "Ibarra", "Quintero",
            "Barrera", "Vega", "Salinas", "Mata", "Montero", "Soto", "León", "Mora", "Escobar", "Pastrana",
            "Montes", "Orozco", "Santana", "Sierra", "Camacho", "Rosales", "Cordero", "Paz", "Blanco",
            "Coronado", "Bernal", "Valenzuela", "Guevara", "Alvarado", "Ortega", "Moreno", "Sosa",
            "Cervantes", "Bravo", "Juárez", "Camacho", "Cardoza", "Cisneros", "Cervantes", "Duarte",
            "Nava", "Crespo", "Gallegos", "Alfaro", "Molina", "Bravo", "Bautista", "Galván", "Salgado",
            "Téllez", "Rocha", "Arellano", "Valdés", "Vélez", "Casillas", "Camacho", "Del Río", "De León",
            "Balderas", "Esqueda", "Figueroa", "Cruz", "Cabrera", "Lucero", "Aguilera", "Zepeda",
            "Terán", "Villalobos", "Navarro", "Cuevas", "Quijano", "Alonso", "Rosario", "Zapata",
            "De La Rosa", "Cordero", "Murillo", "Correa", "Monroy", "Vallejo", "Rebolledo", "Portillo",
            "Barragán", "Alonso", "Negrete", "Gaitán", "Ramírez", "Becerra", "Palma", "Trejo",
            "Tovar", "Banda", "Rivas", "Luna", "Gómez", "Uribe", "Solano", "Salcedo",
            "Barrón", "Dueñas", "Vázquez", "Zamudio", "Morán", "Medrano", "Paez", "Cañedo",
            "Lugo", "Carrasco", "Porras", "Carranza", "Dávila", "Badillo"];
        const apellidosRusos = [
            "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
            "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
            "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
            "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
            "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
            "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
            "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
            "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
            "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
            "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"]; 
        const nombresM = [
            "José", "Juan", "Luis", "Carlos", "Jesús", "Miguel", "Alejandro", "Manuel", "Francisco",
            "Jorge", "Fernando", "Ricardo", "Roberto", "Daniel", "Eduardo", "Antonio", "Raúl",
            "Pedro", "Ángel", "Mario", "Óscar", "Guillermo", "Rafael", "Sergio", "Andrés", "Hugo",
            "Iván", "Víctor", "Alberto", "Arturo", "Emilio", "Enrique", "Marco", "Ramón", "Salvador",
            "Julio", "Armando", "Israel", "Gerardo", "Felipe", "Ignacio", "Héctor", "Martín",
            "Pablo", "Alexis", "Samuel", "Tomás", "Adrián", "Esteban", "Nicolás", "Rubén",
            "Benjamín", "Cristian", "Leonardo", "Rodrigo", "Fabián", "Gael", "Sebastián",
            "Jonathan", "Mauricio", "Ernesto", "Abraham", "Aarón", "Emanuel", "Brandon", "Kevin",
            "Axel", "Ian", "Emmanuel", "Matías", "Josué", "Ismael", "Elías", "Camilo", "Thiago",
            "Damián", "Ulises", "Omar", "Saúl", "César", "Edgar", "Alfredo", "Agustín", "Lorenzo",
            "Simón", "Bruno", "Diego", "Maximiliano", "Cristóbal", "Noé", "Ezequiel", "Isaac",
            "Joaquín", "León", "Darío", "Alan", "Álvaro", "Hernán", "René", "Efraín", "Valentín",
            "Federico", "Baltazar", "Félix", "Patricio", "Vicente", "Ramiro", "Rogelio", "Teodoro",
            "Bernardo", "Clemente", "Guadalupe", "Porfirio", "Cruz", "Amado", "Aníbal",
            "Silvestre", "Leobardo", "Gonzalo", "Isidro", "Bonifacio", "Cipriano", "Modesto",
            "Evaristo", "Nazario", "Macario", "Filemón", "Casimiro", "Aureliano", "Severiano",
            "Toribio", "Anselmo", "Apolinar", "Aurelio", "Belisario", "Benito", "Candelario",
            "Crescencio", "Eleazar", "Epifanio", "Eulogio", "Faustino", "Florencio", "Fortunato",
            "Gervasio", "Heliodoro", "Herminio", "Hilario", "Ildefonso", "Januario", "Laureano",
            "Leandro", "Luciano", "Maclovio", "Marcelino", "Mateo", "Melchor", "Nabor",
            "Nicanor", "Olegario", "Pantaleón", "Perfecto", "Primitivo", "Procopio",
            "Quirino", "Rosendo", "Sabino", "Saturnino", "Secundino", "Silverio", "Tiburcio",
            "Timoteo", "Tranquilino", "Urbano", "Valeriano", "Venancio", "Wenceslao",
            "Zacarías", "Adolfo", "Alonso", "Américo", "Ariel", "Braulio", "Ciro", "Dionisio",
            "Eliseo", "Estanislao", "Eugenio", "Ezequías", "Froylán", "Gaspar", "Genaro",
            "Guillén", "Honorio", "Jacinto", "Jerónimo", "Joel", "Jonás", "Levi", "Lisandro",
            "Manlio", "Mariano", "Neftalí", "Ovidio", "Plácido", "Reinaldo", "Samir", "Teófilo",
            "Uziel", "Valdemar", "Wilfredo", "Xavier", "Yahir", "Zaid", "Abel", "Aldo", "Amador",
            "Camilo", "Carmelo", "Cayetano", "Demetrio", "Emeterio", "Erasmo", "Fausto",
            "Gregorio", "Ismael", "Justino", "Lázaro", "Máximo", "Nemesio", "Octavio",
            "Próspero", "Rigoberto", "Tadeo", "Vidal", "Zeno"];
        const nombresF = [
            "María", "Guadalupe", "Juana", "Margarita", "Leticia", "Patricia", "Rosa", "Elizabeth",
            "Verónica", "Alicia", "Norma", "Gloria", "Silvia", "Claudia", "Sandra", "Teresa",
            "Gabriela", "Ana", "Laura", "Martha", "Angélica", "Carmen", "Sofía", "Alejandra",
            "Daniela", "Andrea", "Paola", "Valeria", "Fernanda", "Natalia", "Camila", "Regina",
            "Ximena", "Renata", "Mariana", "Lucía", "Victoria", "Jimena", "Fátima", "Brenda",
            "Diana", "Vanessa", "Karen", "Karla", "Montserrat", "Itzel", "Yolanda", "Rocío",
            "Adriana", "Beatriz", "Lourdes", "Araceli", "Esperanza", "Irma", "Josefina",
            "Consuelo", "Socorro", "Aurora", "Elena", "Magdalena", "Dolores", "Refugio",
            "Amparo", "Soledad", "Natividad", "Concepción", "Eulalia", "Candelaria",
            "Bernarda", "Francisca", "Petra", "Anastasia", "Guillermina", "Hortensia",
            "Crescencia", "Macrina", "Severina", "Trinidad", "Maricela", "Paulina",
            "Melanie", "Ashley", "Kimberly", "Brittany", "Alexa", "Emily", "Samantha",
            "Abril", "Aitana", "Zoe", "Mía", "Alma", "Ariana", "Bianca", "Romina", "Catalina",
            "Elisa", "Sara", "Inés", "Noemí", "Rebeca", "Miriam", "Raquel", "Esther", "Susana",
            "Clara", "Olga", "Elsa", "Mónica", "Cecilia", "Pilar", "Ofelia", "Bárbara",
            "Carolina", "Isabel", "Lorena", "Nora", "Perla", "Ruth", "Tatiana", "Violeta",
            "Yesenia", "Zulema", "Adela", "Alondra", "Amalia", "Antonia", "Brígida", "Casilda",
            "Celestina", "Clementina", "Dorotea", "Edith", "Efigenia", "Elvira", "Enriqueta",
            "Ester", "Felícitas", "Genoveva", "Gertrudis", "Hilaria", "Jacinta", "Leocadia",
            "Lidia", "Manuela", "Matilde", "Mercedes", "Nicolasa", "Olimpia", "Petronila",
            "Prudencia", "Ramona", "Rosalía", "Salomé", "Teodora", "Tomasa", "Ursula",
            "Valentina", "Vicenta", "Virginia", "Xochitl", "Yaretzi", "Zenaida", "Abril",
            "Alejandrina", "Anabel", "Apolonia", "Artemisa", "Brunilda", "Carmela",
            "Cayetana", "Dominga", "Emilia", "Ernestina", "Eugenia", "Florinda", "Gregoria",
            "Hermelinda", "Ignacia", "Josefa", "Leonor", "Marcela", "Modesta", "Natividad",
            "Otilia", "Priscila", "Reyna", "Sabina", "Silvina", "Teresa", "Viviana", "Zoraida"];
            const nombresFranceses = [
            "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
            "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
            "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
            "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
            "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
            "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
            "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
            "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
            "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
            "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"];
        function generar() {
            opcion = document.getElementById("opcion").value;

            switch(opcion){
                case "1":
                    generarSQL();
                    break;
                case "2":
                    generarPostgre();
                    break;
                case "3":
                    generarCSV();
                    break;
                case "4":
                    generarJSON();
                    break;
            }
        }

        function generarSQL(){
            salida = `CREATE DATABASE IF NOT EXISTS sistema_escolar;<br>
            USE sistema_escolar;<br>
            CREATE TABLE IF NOT EXISTS alumnos(<br>
            expediente INTEGER NOT NULL UNIQUE CHECK (LENGTH(expediente) = 9 AND expediente > 0),<br>
            app1 VARCHAR(255) NOT NULL CHECK (LENGTH(TRIM(app1))>0),<br>
            app2 VARCHAR(255) CHECK (app2 IS NULL OR LENGTH(TRIM(app2))>0),<br>
            nombre VARCHAR(255) NOT NULL CHECK (LENGTH((TRIM(nombre)))>0),<br>
            correo VARCHAR(225) NOT NULL UNIQUE CHECK (correo = CONCAT("a",expediente,"@unison.mx"))<br>
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci; <br>
            INSERT INTO alumnos VALUES <br>`;
            var matricula = 224204735;
            var registros = 0;
            registros = document.getElementById('registros').value;
            if (registros > 50000) registros = 50000;
            for (let i = 0; i < registros; i++) {
                var apellido2 = `${apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)]}`
                if (apellido2 != "NULL") {
                    apellido2 = "UPPER('" + apellido2 + "')"
                }
                var nombre = "UPPER('";
                var nombres;
                if ((Math.random() * 10) >= 5) nombres = nombresM;
                else nombres = nombresF;
                var a = 90, b = 0, c = 1;
                while (a > b) {
                    var nombres2;
                    if((c % 2) == 1) nombres2 = nombres;
                    else nombres2 = nombresFranceses;
                    nombre += `${nombres2[Math.floor(Math.random() * nombres2.length)]}`;
                    b = Math.random() * 1;
                    a *= 0.01;
                    nombre += " ";
                    c++;
                }
                nombre = nombre.trim();
                nombre += "')";
                salida += `(${matricula + i}, UPPER('${apellidos[Math.floor(Math.random() * apellidos.length)]}'), ` + apellido2 + `, ` + nombre + `, 'a${matricula + i}@unison.mx')`;
                if (i < (registros - 1)) {
                    salida += `, <br>`;
                } else {
                    salida += `;`
                }
            }
            if (registros > 0) document.getElementById("salida").innerHTML = salida;
        }
        function generarPostgre(){
                        salida = `
CREATE DATABASE sistema_escolar; <br>
\\c sistema_escolar <br>
CREATE TYPE sexo_enum AS ENUM ('HOMBRE','MUJER','NO BINARIO'); <br>
CREATE TABLE alumnos ( <br>
    expediente INTEGER NOT NULL <br>
        CHECK (length(expediente::text) = 9 AND expediente > 0), <br>

    app1 VARCHAR(255) NOT NULL <br>
        CHECK (length(trim(app1)) > 0), <br>

    app2 VARCHAR(255) <br>
        CHECK (app2 IS NULL OR length(trim(app2)) > 0), <br>

    nombre VARCHAR(255) NOT NULL <br>
        CHECK (length(trim(nombre)) > 0), <br>

    correo VARCHAR(225) NOT NULL <br>
        CHECK (correo = 'a' || expediente || '@unison.mx'), <br>

    fecha_nacimiento DATE, <br>

    sexo sexo_enum NOT NULL, <br>

    UNIQUE (expediente), <br>
    UNIQUE (correo) <br>
); <br>
INSERT INTO alumnos VALUES <br>`;
            var matricula = 224204735;
            var registros = 0;
            registros = document.getElementById('registros').value;
            if (registros > 50000) registros = 50000;
            for (let i = 0; i < registros; i++) {
                var apellido2 = `${apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)]}`
                if (apellido2 != "NULL") {
                    apellido2 = "UPPER('" + apellido2 + "')"
                }
                var nombre = "UPPER('";
                var nombres, sexo;
                if ((Math.random() * 10) >= 5){ 
                    nombres = nombresM;
                    sexo = 1;
                }
                else{
                    nombres = nombresF;
                    sexo = 2;
                }
                var a = 90, b = 0, c = 1;
                while (a > b) {
                    var nombres2;
                    if((c % 2) == 1) nombres2 = nombres;
                    else nombres2 = nombresFranceses;
                    nombre += `${nombres2[Math.floor(Math.random() * nombres2.length)]}`;
                    b = Math.random() * 1;
                    a *= 0.01;
                    nombre += " ";
                    c++;
                }
                nombre = nombre.trim();
                nombre += "')";

                if ((Math.random() * 1) > 0.9) sexo = 3;

                //nombre += `${nombres2[Math.floor(Math.random() * nombres2.length)]}`;

                    const hoy = new Date();

    // Edad mínima y máxima
    const edadMin = 18;
    const edadMax = 60;

    // Fechas límite
    const fechaMax = new Date(hoy.getFullYear() - edadMin, hoy.getMonth(), hoy.getDate());
    const fechaMin = new Date(hoy.getFullYear() - edadMax, hoy.getMonth(), hoy.getDate());

    // Generar fecha aleatoria entre fechaMin y fechaMax
    const fechaRandom = new Date(
        fechaMin.getTime() + Math.random() * (fechaMax.getTime() - fechaMin.getTime())
    );

    // Formato YYYY-MM-DD (PostgreSQL compatible)
    const yyyy = fechaRandom.getFullYear();
    const mm = String(fechaRandom.getMonth() + 1).padStart(2, '0');
    const dd = String(fechaRandom.getDate()).padStart(2, '0');

    switch(sexo){
        case 1: sexo = 'HOMBRE'; break;
        case 2: sexo = 'MUJER'; break;
        case 3: sexo = 'NO BINARIO'; break;
        default: sexo = 'NO BINARIO'; break;
    }

                salida += `(${matricula + i}, UPPER('${apellidos[Math.floor(Math.random() * apellidos.length)]}'), ` + apellido2 + `, ` + nombre + `, 'a${matricula + i}@unison.mx', '${yyyy}-${mm}-${dd}', '${sexo}')`;
                if (i < (registros - 1)) {
                    salida += `, <br>`;
                } else {
                    salida += `;`
                }
            }
            if (registros > 0) document.getElementById("salida").innerHTML = salida;
        }
        function generarCSV(){
            salida = "matricula, app1, app2, nombre, correo ";
            var matricula = 224204735;
            var registros = 0;
            registros = document.getElementById('registros').value;
            if (registros > 50000) registros = 50000;
            for (let i = 0; i < registros; i++) {
                var apellido2 = `${apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)]}`
                /*if (apellido2 != "NULL") {
                    apellido2 = "UPPER('" + apellido2 + "')"
                }*/
                var nombre = "";
                var nombres;
                if ((Math.random() * 10) >= 5) nombres = nombresM;
                else nombres = nombresF;
                var a = 90, b = 0, c = 1;
                while (a > b) {
                    var nombres2;
                    if((c % 2) == 1) nombres2 = nombres;
                    else nombres2 = nombresFranceses;
                    nombre += `${nombres2[Math.floor(Math.random() * nombres2.length)]}`;
                    b = Math.random() * 1;
                    a *= 0.01;
                    nombre += " ";
                    c++;
                }
                nombre = nombre.trim();
                salida += `<br>${matricula + i}, ${apellidos[Math.floor(Math.random() * apellidos.length)]}, ` + apellido2 + `, ` + nombre + `, a${matricula + i}@unison.mx`;
            }
            if (registros > 0) document.getElementById("salida").innerHTML = salida;
        }
        function generarJSON(){
            salida = "[<br>"; 
            var matricula = 224204735;
            var registros = 0;
            registros = document.getElementById('registros').value;
            if (registros > 50000) registros = 50000;
            for (let i = 0; i < registros; i++) {
                var nombre = "";
                var nombres;
                if ((Math.random() * 10) >= 5) nombres = nombresM
                else nombres = nombresF
                var a = 90, b = 0, c = 1;
                while (a > b) {
                    var nombres2;
                    if((c % 2) == 1) nombres2 = nombres;
                    else nombres2 = nombresFranceses;
                    nombre += `${nombres2[Math.floor(Math.random() * nombres2.length)]}`;
                    b = Math.random() * 1;
                    a *= 0.01;
                    nombre += " ";
                    c++;
                }
                nombre = nombre.trim();
                salida += `{<br>"matricula":${matricula + i},<br>"app1":"${apellidos[Math.floor(Math.random() * apellidos.length)]}",<br>"app2":"${apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)]}",<br>"nombre":"` + nombre + `",<br>"correo":"a${matricula + i}@unison.mx"<br>}`;
                if (i < (registros - 1)) {
                    salida += `,<br>`;
                } else {
                    salida += `<br>]`
                }
            }
            if (registros > 0) document.getElementById("salida").innerHTML = salida;
        }

        function generarArchivo() {
            if(opcion != ""){
                alert("Generando archivo...");
                var var1 = document.createElement("a");
                salida = salida.replaceAll("<br>", "\r\n");
                var1.setAttribute("href","data:text/plain;charset=UTF-8," + encodeURIComponent(salida));
                var fileName = "sistema_escolar."
                switch(opcion){
                    case "1":
                        fileName += "sql";
                        break;    
                    case "2":
                        fileName += "sql";
                        break; 
                    case "3":
                        fileName += "csv";
                        break;
                    case "4":
                        fileName += "json";
                        break;
                }
                var1.setAttribute("download", fileName);
                var1.style.display = "none";
                document.body.appendChild(var1);
                var1.click();
                document.body.removeChild(var1);
                }
    }