import "./styles.scss";
function Course(props) {
    return (
        <div classname="cardContainer">
            <div
                style={{
                    backgroundColor: props.course.bgc,
                    backgroundImage: `url(${props.course.img})`
                }}
                classname="imageContainer"
            ></div>
            <h1 className="title">{props.course.name}</h1>
            <p classname="desc">{props.course.desc}</p>
        </div>
    );
}

export default Course;
