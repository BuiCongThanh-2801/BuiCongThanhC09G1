let PhuongTrinhBac2= function() {
    this.setNumber1=function (number1) {
        this.number1=number1
    };
    this.setNumber2= function (number2) {
        this.number2=number2
    };
    this.setNumber3= function (number3) {
        this.number3 =number3;
    };
    this.getNumber1=function () {
        return this.number1;
    };
    this.getNumber2=function () {
        return this.number2;
    };
    this.getNumber3=function () {
        return this.number3;
    };
    this.Denta =function () {
        return  Math.pow(this.number2,2 )-this.number1*this.number3*4;
    };
    this.x1 =function () {
        return (-this.number2+Math.sqrt(this.Denta))/2*this.number1;
    };
    this.x2 = function () {
        return (-this.number2-Math.sqrt(this.Denta))/2*this.number1;

    };
    this.txt=function () {
        return (-this.number3 / this.number2);

    }

};