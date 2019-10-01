let HinhChuNhat = function () {
    this.setchieudai = function (chieudai) {
        this.chieudai= chieudai;
    };
    this.getchieudai = function (chieudai) {
        return this.chieudai;
    };
    this.setchieurong = function (chieurong) {
        this.chieurong=chieurong;
    };
    this.getchieurong = function (chieurong) {
        return this.chieurong;
    };
    this.chuvi =function () {
        return (this.chieudai*1 +this.chieurong*1)*2;
    };
    this.dientich = function () {
        return (this.chieudai*this.chieurong)

    }
    
};