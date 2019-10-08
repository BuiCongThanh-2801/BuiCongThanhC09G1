var Customer=function () {
    this.setNameCustomer=function (namecustomer) {
        this.NameCustomer= namecustomer;
    }
    this.getNameCustomer=function () {
        return this.NameCustomer;
    };
    this.setIdCard=function (idcard) {
        this.IdCard=idcard;
    };
    this.getIdCard=function () {
        return this.IdCard;
    };
    this.setBirthDayCustomer=function (birthdaycustomer) {
        this.BirthDayCustomer=birthdaycustomer;
    };
    this.getBirthDayCustomer=function () {
        return this.BirthDayCustomer;
    };
    this.setEmailCustomer=function (emailcustomer) {
        this.EmailCustomer=emailcustomer;
    };
    this.getEmailCustomer=function () {
        return this.EmailCustomer;
    };
    this.setAddressCustomer=function (addresscustomer) {
        this.AddressCusotmer= addresscustomer;
    };
    this.getAddressCustomer=function () {
        return this.AddressCusotmer;
    };
    this.setTypeCustomer=function (typecustomer) {
        this.TypeCustomer= typecustomer;
    };
    this.getTypeCustomer=function () {
        return this.TypeCustomer;
    };
    this.setDiscount=function (discount) {
        this.Discount=discount;
    };
    this.getDiscount=function () {
        return this.Discount;
    };
    this.setNumberOfAccompanying=function (numberofaccompanying) {
        this.NumberOfAccompanying=numberofaccompanying;
    };
    this.getNumberOfAccompanying=function () {
        return this.NumberOfAccompanying;
    };
    this.setTypeRoom=function (typeroom) {
        this.TypeRoom=typeroom;
    };
    this.getTypeRoom=function () {
        return this.TypeRoom;
    };
    this.setRentDay=function (rentday) {
        this.RentDay=rentday;
    };
    this.getRentDay=function () {
        return this.RentDay;
    };
    this.setTypeService=function (typesevervice) {
        this.TypeService=typesevervice;
    };
    this.getTypeService=function () {
        return this.TypeService;
    };
    this.totalPay=function () {
        let moneyPerDay=0;
        if (this.TypeService()==="Villa"){
            moneyPerDay=500;
        }
        else if (this.TypeService()==="HomeStay"){
            moneyPerDay=300;
        }
        else {
            moneyPerDay=200;
        }
        return moneyPerDay*parseFloat(this.getRentDay())*(1-parseFloat(this.getDiscount())/100);
    };
};