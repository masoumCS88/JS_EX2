async function fetchFromUrl() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Invalid URL or network issue");
        }

        let data = await response.json();
        createTable(data);
    } catch (error) {
        console.error("Error:", error);
    }
}





function createTable(data) {
    const tableContainer = document.getElementById("tableContainer");
    let table = "<table border='1' cellspacing='0' cellpadding='5'>";

    table += "<tr>";
    Object.keys(data[0]).forEach(key => {
        table += `<th>${key}</th>`;
    });
    table += "</tr>";

    data.forEach(item => {
        table += "<tr>";
        Object.values(item).forEach(value => {
            if(typeof(value) == 'object'){
                var output = createStringOfObjectValue(value);
                table += `<td>${output}</td>`;
            }
            else{
                table += `<td>${value}</td>`;
            }
        });
        table += "</tr>";
    });

    table += "</table>";

    tableContainer.innerHTML = table; 
}


function createStringOfObjectValue(obj) {
    let values = [];

    function concatination(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                concatination(obj[key]); 
            } else {
                values.push(obj[key]);
            }
        }
    }

    concatination(obj);
    return values.join(', ');
}




fetchFromUrl();
