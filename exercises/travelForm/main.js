
sub.onclick = function() {
    var first = document.getElementById('first').value;
    var last = document.getElementById("last").value;
    var age = document.getElementById("age").value;
    // var male = document.getElementById("male").value;
    // var female = document.getElementById("female").checked;
    var sex = document.querySelector('input[name=gender]:checked').value;
    var selected = document.getElementById("select").value;
    var veggie = document.getElementById("vegie").checked;
    var kosher = document.getElementById("kosh").checked;
    var lactose = document.getElementById("lack").checked;
    var food;
    if ((kosher && veggie) && lactose) {
        food = 'Kosher & Veggie & Lactose FREE';
    }
    else if (kosher && lactose) {
        food = 'Kosher & Lactose Free';
    }
    else if (veggie && kosher) {
        food = "Veggie & Kosher";
    }
    else if (veggie && lactose) {
        food = "Veggie & Lactose Free";
    }
    else if (kosher) {
        food = 'Kosher';
    }
    else if (lactose) {
        food = 'Lactose Free';
    }
    else if (veggie) {
        food = 'Veggie';
    }
    alert ("First name: " + first + "\n" + "Last name: " + last + "\n" + "Age:" + age + "\n" + "Gender: " + sex + "\n" + "Location: " + selected + "\n" + "Dietary restrictions: " + food);
}