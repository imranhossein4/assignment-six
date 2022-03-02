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
    phones.forEach(phone => {
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
}

// get id name
const details = (idName) => {
    console.log(idName)
    const url = `https://openapi.programming-hero.com/api/phone/${idName}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}

// show details 
const showDetails = (idName) => {
    const container = document.getElementById('show-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${idName.data.image}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    `;
    container.appendChild(div);

}