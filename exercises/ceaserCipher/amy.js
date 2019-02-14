import "./styles.css";

let pictureArray = ["a", "b", "c"];

let currentPhotoIndex = 0;

let display = pictureArray[currentPhotoIndex];

let onClick = () => {
if (currentPhotoIndex === pictureArray.length - 1) {
currentPhotoIndex = 0;
} else {
currentPhotoIndex++;
}
};

document.getElementById("app").innerHTML = `
<h1>HI SAM</h1>
<div>${display}</div>
<button onClick=${onClick}>click me</button>
`;