let listCusotmer=[];
let validatebrithday=/^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)((0)[0-9]|(1)[1-2])(\/)\d{4}$/;
let validatemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function displayMainMenu() {
    let choose = prompt(
        "1.Add new Customer" +
        "\n 2 .Edit information Customer" +
        "\n 3 .Delete Customer" +
        "\n 4 .Add new Customer" +
        "\n 5 .Back"
    );
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case 2:
           // displayCustomer();
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            alert("Fail !!!");
            break;
    }
}
function addNewCustomer() {
    let checkday=false;
    let checkemail=false;
    var cus= new Customer();
    cus.setNameCustomer(prompt("Enter name customers:"));
    do {


        cus.setBirthDayCustomer(prompt("Enter birthday customer"));
        if (validatebrithday.test(cus.getBirthDayCustomer())){
        checkday=true;
        }
        else {
        alert("Birthday is invalid. Please try again !!")
        }
    }
    while (!checkday);
    do {
        cus.setEmailCustomer(prompt("Enter Email customer"));
        if (validatemail.test(cus.getEmailCustomer())){
            checkemail=true;
        }
        else {
            alert("Email is invalid. Please try again");
        }
    }
    while(!checkemail);

    cus.setAddressCustomer(prompt("Enter address customer"));
    cus.setIdCard(prompt("Enter Id Card Customers:"));
    cus.setNumberOfAccompanying(prompt("Enter Number of Accompanying:"));
    cus.setDiscount(prompt("Enter discount :"));
    cus.setTypeCustomer(prompt("Enter type customer:"));
    cus.setTypeRoom(prompt("Enter type room"));
    cus.getRentDay(prompt("Enter Rent day"));
    cus.setTypeService(prompt("Enter type service"));
    listCusotmer.push(cus);
}
displayMainMenu();