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
const displayPhone = (phone) => {

}