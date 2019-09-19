function cal() {
    document.getElementById("results").innerHTML = "";
    var totalKWh = document.getElementById("txtKW").value;
    var totalPrice = getPice(totalKWh);
    var old = document.getElementById("results").innerHTML;
    document.getElementById("results").innerHTML = old + "<tr><td>" + totalKWh + "</td><td></td><td>" + totalPrice + "R</td></tr>";
}

function getPice(totalKWh) {
    var old = document.getElementById("results").innerHTML;
    var unitPrice = getUnitPrice(totalKWh);
    var KWh;
    var price;
    if (totalKWh > 200) {
        KWh = totalKWh - 200;
        price = KWh * unitPrice;
        console.log(">200/"+unitPrice+"/"+KWh+"/"+price);
        document.getElementById("results").innerHTML = old + "<tr><td>" + KWh + "</td><td>" + unitPrice + "R</td><td>" + price + "R</td></tr>";
        return price + getPice(200);
    }
    else if (totalKWh >150) {
        KWh = totalKWh - 150;
        price = KWh * unitPrice;
        console.log(">150/"+unitPrice+"/"+KWh+"/"+price);
        document.getElementById("results").innerHTML = old + "<tr><td>" + KWh + "</td><td>" + unitPrice + "R</td><td>" + price + "R</td></tr>";
        return price + getPice(150);
    }
    else if (totalKWh >100) {
        KWh = totalKWh - 100;
        price = KWh * unitPrice;
        console.log(">100/"+unitPrice+"/"+KWh+"/"+price);
        document.getElementById("results").innerHTML = old + "<tr><td>" + KWh + "</td><td>" + unitPrice + "R</td><td>" + price + "R</td></tr>";
        return price + getPice(100);
    }
    else if (totalKWh >50) {
        KWh = totalKWh - 50;
        price = KWh * unitPrice;
        console.log(">50/"+unitPrice+"/"+KWh+"/"+price);
        document.getElementById("results").innerHTML = old + "<tr><td>" + KWh + "</td><td>" + unitPrice + "R</td><td>" + price + "R</td></tr>";
        return price + getPice(50);
    }
    else {
        KWh = totalKWh;
        price = KWh * unitPrice;
        console.log("<50/"+unitPrice+"/"+KWh+"/"+price);
        document.getElementById("results").innerHTML = old + "<tr><td>" + KWh + "</td><td>" + unitPrice + "R</td><td>" + price + "R</td></tr>";
        return price;
    }
}

function getUnitPrice (KWh) {
    if (KWh <= 50) {
        return 500;
    }
    else if(KWh <= 100){
        return 700;
        
    }
    else if(KWh <= 150){
        return 1000;
        
    }
    else if(KWh <= 200){
        return 1500;
    }
    else {
        return 1700;
    }
}

function clearText() {
    document.getElementById("txtKW").value = "";
    document.getElementById("results").innerHTML = "";
}