const selects = document.querySelectorAll('select');

// Add an event listener to each select element
selects.forEach(select => {
  select.addEventListener('change', () => {
    // Get the selected option value
    const selectedValue = select.value;
    if (selectedValue == "") {
        selects.forEach(s => s.disabled = false ) ;
    }
    else{
        selects.forEach(s => {
            if (s !== select) {
              s.disabled = true;
            } else {
              // Enable the selected select element
              s.disabled = false;
            }
          });
    }
    // Disable all the select elements except the selected one
    
  });
});
