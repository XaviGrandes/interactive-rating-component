let numberContainer = document.querySelector('.rating-state__form__list-inputs');
let numberSelected = document.querySelector('#result');
let submitButton = document.querySelector('.rating-state__form__button');
let ratingState = document.querySelector('.rating-state')
let thankyouState = document.querySelector('.thank-you-state')

numberContainer.addEventListener('click', (event) => {
    let number = event.target.defaultValue;
    numberSelected.innerText = number

    if (number > 0 || number < 5)
    submitButton.addEventListener('click', (event)=> {
        event.preventDefault()
        ratingState.style.display = 'none';
        thankyouState.style.display = 'flex'
    });
});


