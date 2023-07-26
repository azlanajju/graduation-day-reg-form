const vegCountInput = document.getElementById('vegCount');
const nonVegCountInput = document.getElementById('nonVegCount');
const vegCountField = document.getElementById('vegCoutField');
const nonVegCountField = document.getElementById('nonVegCoutField');

function incrVeg() {
  document.getElementById('nonVegBtn').removeAttribute('disabled');
  var counterVeg = document.getElementById('vegCount');
  var vegBtn = document.getElementById('vegBtn');
  counterVeg.value++;
  if (parseInt(counterVeg.value) >= 4) {
    vegBtn.setAttribute('disabled', 'true');
  }
  updateNonVegOptions();

  // Display the updated value in vegCoutField
  vegCountField.innerText = counterVeg.value;
}

function incrNonVeg() {
  document.getElementById('vegBtn').removeAttribute('disabled');
  var counterVeg = document.getElementById('nonVegCount');
  var vegBtn = document.getElementById('nonVegBtn');
  counterVeg.value++;
  if (parseInt(counterVeg.value) >= 4) {
    vegBtn.setAttribute('disabled', 'true');
  } else { // Here's the correction
    vegBtn.removeAttribute('disabled');
  }
  updateVegOptions();

  // Display the updated value in nonVegCoutField
  nonVegCountField.innerText = counterVeg.value;
}

vegCountInput.addEventListener('change', updateNonVegOptions);
nonVegCountInput.addEventListener('change', updateVegOptions);

function updateNonVegOptions() {
  const maxNonVegAllowed = 4 - parseInt(vegCountInput.value);
  nonVegCountInput.max = maxNonVegAllowed;
  if (parseInt(nonVegCountInput.value) > maxNonVegAllowed) {
    nonVegCountInput.value = maxNonVegAllowed;
  }

  // Display the updated value in nonVegCoutField
  nonVegCountField.innerText = nonVegCountInput.value;
}

function updateVegOptions() {
  const maxVegAllowed = 4 - parseInt(nonVegCountInput.value);
  vegCountInput.max = maxVegAllowed;
  if (parseInt(vegCountInput.value) > maxVegAllowed) {
    vegCountInput.value = maxVegAllowed;
  }

  // Display the updated value in vegCoutField
  vegCountField.innerText = vegCountInput.value;
}