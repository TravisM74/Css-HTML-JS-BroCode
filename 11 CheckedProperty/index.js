// html elements
const checkBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypal = document.getElementById("paypal");

const submitBtn = document.getElementById("mySubmit");

const submitP = document.getElementById("subResult");
const paymentP = document.getElementById("paymentResult");

submitBtn.onclick = handleSubmit;

function handleSubmit(){

    if(checkBox.checked){
        submitP.textContent = "You are subscribed";
        if(visaBtn.checked){
        paymentP.textContent = "Paying with Visa card.";
        } else if(masterBtn.checked){
            paymentP.textContent = "Paying with MasterCard card.";
        }
        else if(paypal.checked){
            paymentP.textContent = "Paying with PayPal.";
        } else {
            paymentP.textContent = "Please pick a payment method.";
        }
    } else {
        submitP.textContent = "You are NOT subscribed";
        paymentP.textContent = "";
    }

    
}