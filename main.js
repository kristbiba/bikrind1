import "./firebase-config.js";

const database = firebase.database();

database.ref("exchangeRates").on("value", (snapshot) => {
    const rates = snapshot.val();
    document.getElementById("usd_buy_display").innerText = rates.USD.buy;
    document.getElementById("usd_sell_display").innerText = rates.USD.sell;
    document.getElementById("eur_buy_display").innerText = rates.EUR.buy;
    document.getElementById("eur_sell_display").innerText = rates.EUR.sell;
    document.getElementById("chf_buy_display").innerText = rates.CHF.buy;
    document.getElementById("chf_sell_display").innerText = rates.CHF.sell;
    document.getElementById("gbp_buy_display").innerText = rates.GBP.buy;
    document.getElementById("gbp_sell_display").innerText = rates.GBP.sell;
    document.getElementById("dkk_buy_display").innerText = rates.DKK.buy;
    document.getElementById("dkk_sell_display").innerText = rates.DKK.sell;
    document.getElementById("nok_buy_display").innerText = rates.NOK.buy;
    document.getElementById("nok_sell_display").innerText = rates.NOK.sell;
    document.getElementById("sek_buy_display").innerText = rates.EUR.buy;
    document.getElementById("sek_sell_display").innerText = rates.EUR.sell;
    document.getElementById("cad_buy_display").innerText = rates.CAD.buy;
    document.getElementById("cad_sell_display").innerText = rates.CAD.sell;
    document.getElementById("aud_buy_display").innerText = rates.AUD.buy;
    document.getElementById("aud_sell_display").innerText = rates.AUD.sell;
    document.getElementById("jpy_buy_display").innerText = rates.JPY.buy;
    document.getElementById("jpy_sell_display").innerText = rates.JPY.sell;
    document.getElementById("try_buy_display").innerText = rates.TRY.buy;
    document.getElementById("try_sell_display").innerText = rates.TRY.sell;
});
