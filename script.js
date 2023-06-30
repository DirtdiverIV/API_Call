function printConsole() {
  const jsonData = {
    "results": []
  };
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      jsonData.results = data;
      const results = jsonData.results;
      results.forEach(item => {
        console.log(item);
      });
    })
    .catch(error => console.log(error));
}

printConsole();




function printTable() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const tableContainer = document.getElementById('table-container');

    const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      const headerRow = document.createElement('tr');
      const idHeader = document.createElement('th');
      idHeader.textContent = 'Id';
      const nameHeader = document.createElement('th');
       nameHeader.textContent = 'Nombre';
      const cityHeader = document.createElement('th');
       cityHeader.textContent = 'Ciudad';

      headerRow.appendChild(idHeader);
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(cityHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);

        data.forEach(item => {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          idCell.textContent = item.id;
          const nameCell = document.createElement('td');
          nameCell.textContent = item.name;
          const cityCell = document.createElement('td');
          cityCell.textContent = item.address.city;

          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(cityCell);
          tbody.appendChild(row);});

        table.appendChild(tbody);
        tableContainer.appendChild(table);
      })
      .catch(error => console.log(error));}

printTable();


function getUserData() {
  const userId = document.getElementById('userIdInput').value;

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
        const userDataContainer = document.getElementById('userDataContainer');
        userDataContainer.innerHTML = '';

      const name = data.name;
      const phone = data.phone;

      const nameElement = document.createElement('p');
      nameElement.textContent = `Name: ${name}`;

      const phoneElement = document.createElement('p');
      phoneElement.textContent = `Phone Number: ${phone}`;

        userDataContainer.appendChild(nameElement);
        userDataContainer.appendChild(phoneElement);})
    .catch(error => console.log(error));
}
