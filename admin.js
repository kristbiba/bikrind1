import "./firebase-config.js";

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = "login.html";
    }
});

const database = firebase.database();

document.getElementById("exchangeRatesForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const exchangeRates = {
        USD: { buy: parseFloat(document.getElementById("usd_buy").value), sell: parseFloat(document.getElementById("usd_sell").value) },
        EUR: { buy: parseFloat(document.getElementById("eur_buy").value), sell: parseFloat(document.getElementById("eur_sell").value) },
        CHF: { buy: parseFloat(document.getElementById("chf_buy").value), sell: parseFloat(document.getElementById("chf_sell").value) },
        GBP: { buy: parseFloat(document.getElementById("gbp_buy").value), sell: parseFloat(document.getElementById("gbp_sell").value) },
        DKK: { buy: parseFloat(document.getElementById("dkk_buy").value), sell: parseFloat(document.getElementById("dkk_sell").value) },
        NOK: { buy: parseFloat(document.getElementById("nok_buy").value), sell: parseFloat(document.getElementById("nok_sell").value) },
        SEK: { buy: parseFloat(document.getElementById("sek_buy").value), sell: parseFloat(document.getElementById("sek_sell").value) },
        CAD: { buy: parseFloat(document.getElementById("cad_buy").value), sell: parseFloat(document.getElementById("cad_sell").value) },
        AUD: { buy: parseFloat(document.getElementById("aud_buy").value), sell: parseFloat(document.getElementById("aud_sell").value) },
        JPY: { buy: parseFloat(document.getElementById("jpy_buy").value), sell: parseFloat(document.getElementById("jpy_sell").value) },
        TRY: { buy: parseFloat(document.getElementById("try_buy").value), sell: parseFloat(document.getElementById("try_sell").value) },
    };

    database.ref("exchangeRates").set(exchangeRates)
        .then(() => {
            alert("Exchange rates updated successfully!");
        })
        .catch((error) => {
            alert("Error updating rates: " + error.message);
        });
});
