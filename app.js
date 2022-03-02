// search button
const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = "";
    // get url
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
// disply phone
const displayPhone = (phones) => {
    const container = document.getElementById('display-phone');
    const container2 = document.getElementById('show-details');
    // clear data 
    container2.textContent = '';
    container.textContent = '';
    if (phones.length == 0) {
        const error2 = document.getElementById('error2');
        error2.style.display = "block";
    }
    else {
        const slc = phones.slice(0, 20);
        slc.forEach(phone => {
            console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
                        <img src="${phone.image}" class=" w-75 card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.brand}</h5>
                            <p class="card-text">${phone.phone_name}</p>
                            <button onclick="details('${phone.slug}')" class="bg-success px-3 text-white py-1">DETAILS</button>
                        </div>
                    </div>
            `;
            container.appendChild(div);
        });
        const error2 = document.getElementById('error2');
        error2.style.display = "none";
    }
}

// get id name
const details = (idName) => {
    console.log(idName)
    const url = `https://openapi.programming-hero.com/api/phone/${idName}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))
}

// show details 
const showDetails = (idName) => {
    const container = document.getElementById('show-details');
    container.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${idName.image}" class="card-img-top img-fluid"  alt="...">
    <div class="card-body">
       <p class="card-text">Name: ${idName.name}</p>
       <p class="card-text">Release Date: ${idName?.releaseDate}</p>
       <p class="card-text">Sensor: ${idName?.mainFeatures?.sensors[0, 1, 2, 3, 4]}</p>
       <p class="card-text">Others:
       wlan: ${idName?.others.WLAN}
       bluetooth: ${idName?.others?.Bluetooth}</p>
       <p class="card-text"></p>
      </div>
    `;
    container.appendChild(div);

}