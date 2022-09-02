let mobiles = {
    apple: {
        iphone7: {
            ram: 128,
            color: 55555,
            price: 35000
        },
        iphoneX: {
            ram: 234,
            color: 55565,
            price: 40000
        },
        iphone8: {
            ram: 64,
            color: 555,
            price: 3000
        },
    },


    samsung: {
        j3: {
            ram: 16,
            color: 888,
            price: 15000
        },
        s6: {
            ram: 64,
            color: 11111,
            price: 2500,
        },
        s5: {
            ram: 128,
            color: 22222,
            price: 40000
        },
    },



    infinix :{
    note11: {
            ram: 64,
            color:44444,
            price: 2500
        },
        note11Pro: {
            fullphone :11,
            price: 2500,
        },
        smart5Pro: {
            ram: 64,
            color: 1111,
            price: 55000
        },
    },




}

let mobileCompany = document.getElementById('comapany');
let mobileModel  = document.getElementById('model');


function searchVal(){
let result = mobiles[company.value][mobileModel.value];
console.log(result); 



}
