const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const searchInput = document.getElementById('search-input').value.toUpperCase();
  const tableRows = document.getElementsByTagName('tr');

  
  for (let i = 0; i < tableRows.length; i++) {
    const tableData = tableRows[i].getElementsByTagName('td');
    let found = false;

    for (let j = 0; j < tableData.length && !found; j++) {
      if (tableData[j].innerHTML.toUpperCase().indexOf(searchInput) > -1) {
        found = true;
      }
    }

    if (found) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
});
