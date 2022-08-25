const mail = "ulvi@gmail.com";
const password = 1234;

function getIdByAuth(mail, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mail === "ulvi@gmail.com" && password === 1234) {
                const user = { id: 1 };
                return resolve(user);
            } else {
                return reject({ err: "error" });
            }
        }, 200)
    })
}

function getUserInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                const info = { name: "Ulvi", surname: "Mammadzada", age: 20 }
                return resolve(info);
            } else {
                return reject({ err: "error" })
            }
        }, 200)
    })
}

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let canDrink
            if (age >= 18) {
                canDrink = true;
                return resolve(canDrink);
            }
            else if (age < 18) {
                canDrink = false;
                return resolve(canDrink);
            }
            else {
                return reject({ err: "error" })
            }
        }, 200)
    })
}

const drinkList = ["drink1", "drink2", "drink3", "drink4"];
function checkDrink(canDrink) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canDrink === true) {
                return resolve(drinkList);
            }
            else if (canDrink === false) {
                return reject({ err: "Demeye soz tapa bilmirem" });
            }
            else {
                return reject({ err: "error" });
            }
        }, 200)
    })
}

function getIdByDrink(drinkname) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drinkname) {
                const icki = { id: 1001 }
                return resolve(icki);
            }
            else {
                return reject({ err: "error" })
            }
        }, 200)
    })
}

function getDrinkInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1001) {
                return resolve({ name: drinkList[0], permission: "haram" });
            } else {
                return reject({ err: "error" })
            }
        }, 200)
    })
}


getIdByAuth(mail, password)
    .then(
        user => getUserInfo(user.id)
            .then(
                info => checkAge(info.age)
                    .then(
                        canDrink => checkDrink(canDrink)
                            .then(
                                drinkList => getIdByDrink(drinkList[0])
                                    .then(
                                        icki => getDrinkInfo(icki.id)
                                            .then(successful => console.log(successful)).catch(err => console.log(err))
                                    ).catch(err => console.log(err))
                            ).catch(err => console.log(err))
                    ).catch(err => console.log(err))
            ).catch(err => console.log(err))
    ).catch(err => console.log(err))