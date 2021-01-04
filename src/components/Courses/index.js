import Course from "../Course";

function Courses(props) {
    return (
        <div>
            {props.data.map((course, key) => {
                return <Course key={key} course={course} />;
            })}
        </div>
    );
}

export default Courses;
