import "./App.css";
import Search from "./components/Search";
import Courses from "./components/Courses";
import { useState } from "react";

function App() {
    const courses = [
        {
            name: "HTML y CSS",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
            bgc: "#2FA4AB",
            desc:
                "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria"
        },
        {
            name: "Javascript",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
            bgc: "#DE9103",
            desc:
                "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web"
        },
        {
            name: "Terminal",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png",
            bgc: "#712C7D",
            desc:
                "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos"
        },
        {
            name: "Git y Github",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png",
            bgc: "#0F1D44",
            desc:
                "La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios"
        },
        {
            name: "React",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/react.png",
            bgc: "#1275DC",
            desc:
                "Conocé una de las librerías más populares del mercado para crear aplicaciones web robustas y performantes"
        },
        {
            name: "API Context",
            img:
                "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/api-context.png",
            bgc: "#C56FD0",
            desc:
                "Context provee una forma de pasar datos a través del árbol de componentes en React sin tener que pasar props manualmente en cada nivel"
        }
    ];

    const [filteredCourses, setFilteredCourses] = useState(courses);

    function handleChange(inputValue) {
        //esta función me permite filtrar los cursos cuando se comienza a escribir en el Search
        if (inputValue == "") {
            setFilteredCourses(courses);
        }

        const filtered = courses.filter((course) => {
            return course.name.toLowerCase().includes(inputValue.toLowerCase());
        });

        setFilteredCourses(filtered);
    }

    return (
        <div className="App">
            <Search handleCallback={handleChange} />
            <div className="cardsContainer">
                <Courses data={filteredCourses}/>
            </div>
        </div>
    );
}

export default App;
