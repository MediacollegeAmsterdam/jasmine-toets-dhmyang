function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.showVoorrad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);
    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad -1;
    }

    this.verhoogVoorraad = function () {
        voorraad = voorraad +1;
    }

    this.verhoogVoorraadVaker = function (amount){
        voorraad = voorraad +amount;
    }

    this.verlaagVoorraadVaker = function (amount) {
        voorraad = voorraad -amount;
    }
}


function Auto(merk, bouwjaar) {

    let brand = merk;
    let year = bouwjaar;

    this.getBrand = function () {
        return brand;
    }

    this.getYear = function () {
        return year;
    }
   
    this.showDetails = function () {
        console.log('Automerk: ' + brand + ‘ bouwjaar: ' + bouwjaar);
    }
   
}




