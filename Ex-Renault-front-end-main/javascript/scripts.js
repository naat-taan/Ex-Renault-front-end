function selectCar(carName) {
    localStorage.setItem('selectedCar', carName);
    window.location.href = 'customizacao.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.getElementById('car-image');
    const interiorColorInput = document.getElementById('interior-color');
    const exteriorColorInput = document.getElementById('exterior-color');
    const interiorColorResult = document.getElementById('interior-color-result');
    const exteriorColorResult = document.getElementById('exterior-color-result');

    const selectedCar = localStorage.getItem('selectedCar');
    if (selectedCar) {
        const imagePath = `../imagens/${selectedCar.toLowerCase().replace(' ', '_')}.jpg`;
        console.log('Selected Car:', selectedCar);
        console.log('Image Path:', imagePath);
        carImage.innerHTML = `<img src="${imagePath}" alt="${selectedCar}">`;
    }

    interiorColorInput.addEventListener('input', function() {
        interiorColorResult.textContent = this.value;
    });

    exteriorColorInput.addEventListener('input', function() {
        exteriorColorResult.textContent = this.value;
    });
});
