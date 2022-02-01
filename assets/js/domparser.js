// to load the XML file using XMLHttpRequest api
function loadxml() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            printTable();
        }
    };

    xmlhttp.open("GET", "users.xml", true);
    xmlhttp.send();
}

// to print the table
function printTable() {
    var i;
    var table = "<tr><th>cid</th><th>Name</th><th>Age</th><th>Nationality</th><th>Designation</th><th>Email ID</th><th>Contact</th></tr>";
    var x = xmlDoc.getElementsByTagName("user");
    for (i = 0; i < x.length; i++) {

        table += "<tr><td>" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("age")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("nationality")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("designation")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("contact")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    document.getElementById("table").innerHTML = table;
}

// to delete a node based upon the index of the record
function del_node() {
    var i = document.getElementById("to-del").value;
    y = xmlDoc.getElementsByTagName("user")[i];
    xmlDoc.documentElement.removeChild(y);
    printTable();
}

// to add a new node in the table
function add_node() {
    var i
    var add = []
    var x = document.getElementById("to-add")
    user = xmlDoc.createElement("user")
    add[0] = xmlDoc.createElement("cid")
    add[1] = xmlDoc.createElement("name")
    add[2] = xmlDoc.createElement("age")
    add[3] = xmlDoc.createElement("nationality")
    add[4] = xmlDoc.createElement("designation")
    add[5] = xmlDoc.createElement("email")
    add[6] = xmlDoc.createElement("contact")

    for (i = 0; i < 7; i++) {
        add[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        user.appendChild(add[i])
    }
    xmlDoc.documentElement.appendChild(user);
    console.log("Record added: " + x.elements[0].value)
    printTable()
}

//to set cookie
function setcookie() {}

//to get cookie
function getcookie() {}

//to clear cookie
function clearcookie() {}