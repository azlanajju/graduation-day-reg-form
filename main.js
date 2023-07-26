const vegCountInput = document.getElementById('vegCount');
const nonVegCountInput = document.getElementById('nonVegCount');

function incrVeg() {


    document.getElementById('nonVegBtn').removeAttribute('disabled');
    var counterVeg = document.getElementById('vegCount');

    var counterNonVeg = document.getElementById('nonVegCount');

    var vegBtn = document.getElementById('vegBtn');
    counterVeg.value++;
    if (parseInt(counterVeg.value) >= 4) {
        vegBtn.setAttribute('disabled', 'true');


    }
    updateNonVegOptions();




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
}


vegCountInput.addEventListener('change', updateNonVegOptions);
nonVegCountInput.addEventListener('change', updateVegOptions);

function updateNonVegOptions() {
    const maxNonVegAllowed = 4 - parseInt(vegCountInput.value);
    nonVegCountInput.max = maxNonVegAllowed;
    if (parseInt(nonVegCountInput.value) > maxNonVegAllowed) {
        nonVegCountInput.value = maxNonVegAllowed;
    }
}

function updateVegOptions() {
    const maxVegAllowed = 4 - parseInt(nonVegCountInput.value);
    vegCountInput.max = maxVegAllowed;
    if (parseInt(vegCountInput.value) > maxVegAllowed) {
        vegCountInput.value = maxVegAllowed;
    }
}

