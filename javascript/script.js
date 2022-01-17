function subTotal(unitPrice, qty){
    let subT = unitPrice * qty;
    return subT;
}

function taxAmt(cleanTot){
    let taxAmount = 0.1 * cleanTot;
    return taxAmount;
}

function netPrice(cleaningTot, tax){
    let net = cleaningTot + tax;
    return net;
}

function display(){
    let unit_price_shirt = document.getElementById("up_shirt").value;
    let quantityShirt = document.getElementById("qty_shirt").value;

    let unit_price_pants = document.getElementById("up_pants").value;
    let quantityPants = document.getElementById("qty_pants").value;

    let unit_price_duvet = document.getElementById("up_duvet").value;
    let quantityDuvet = document.getElementById("qty_duvet").value;

    let unit_price_bedSpread = document.getElementById("up_bedSpread").value;
    let quantityBedSpread = document.getElementById("qty_bedSpread").value;

    let unit_price_towel = document.getElementById("up_towel").value;
    let quantityTowel = document.getElementById("qty_towel").value;

    let unit_price_native = document.getElementById("up_native").value;
    let quantityNative = document.getElementById("qty_native").value;

    let sub_total_shirt = subTotal(unit_price_shirt, quantityShirt);
    let sub_total_pants = subTotal(unit_price_pants, quantityPants);
    let sub_total_duvet = subTotal(unit_price_duvet, quantityDuvet);
    let sub_total_bedSpread = subTotal(unit_price_bedSpread, quantityBedSpread);
    let sub_total_towel = subTotal(unit_price_towel, quantityTowel);
    let sub_total_native = subTotal(unit_price_native, quantityNative);

    let cleaningTotal = sub_total_shirt + sub_total_pants +sub_total_duvet + sub_total_bedSpread + sub_total_towel + sub_total_native;
    let taxAmount = taxAmt(cleaningTotal);
    let net = netPrice(cleaningTotal, taxAmount);

    document.getElementById("st_shirt").value = sub_total_shirt;
    document.getElementById("st_pants").value = sub_total_pants;
    document.getElementById("st_duvet").value = sub_total_duvet;
    document.getElementById("st_bedSpread").value = sub_total_bedSpread;
    document.getElementById("st_towel").value = sub_total_towel;
    document.getElementById("st_native").value = sub_total_native;

    document.getElementById("cleaningTotal").value = cleaningTotal;
    document.getElementById("taxAmount").value = taxAmount.toFixed(2);
    document.getElementById("netPrice").value = net.toFixed(2);
}


