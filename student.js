fetch('name.json')
.then(function(response) {
    return response.json();
})
.then(function(student) {
    let placeholder = document.querySelector("#output");
    let displayData = "";
    
    for(let bruh of student){
        displayData += `
        <tr>
            <td>${bruh.bounty}</td>
            <td>${bruh.name}</td>
            <td>${bruh.age}</td>
            <td>${bruh.crew}</td>
            <td><img src='${bruh.image}' width='150'></td>
        </tr>
        `;
    }
    
    placeholder.innerHTML = displayData;
})
.catch(error => console.error("Error loading JSON:", error));