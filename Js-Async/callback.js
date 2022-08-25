const mail = "ulvi@gmail.com";
const password = 1234;

function getIdByAuth(mail, password, successCallback, errorCallback) {
    setTimeout(() => {
        if (mail === "ulvi@gmail.com" && password === 1234) {
            const user = { id: 1 };
            return successCallback(user);
        } else {
            return errorCallback({ err: "error" });
        }
    }, 200)
}

function getUserInfo(id, successCallback, errorCallback) {
    setTimeout(() => {
        if (id === 1) {
            const info = { name: "Ulvi", surname: "Mammadzada", age: 20 }
            return successCallback(info);
        } else {
            return errorCallback({ err: "error" })
        }
    }, 200)
}

function checkAge(age, successCallback, errorCallback) {
    setTimeout(() => {
        let canDrink
        if (age >= 18) {
            canDrink = true;
            return successCallback(canDrink);
        }
        else if (age < 18) {
            canDrink = false;
            return successCallback(canDrink);
        }
        else {
            return errorCallback({ err: "error" })
        }
    }, 200)
}

const drinkList = ["drink1", "drink2", "drink3", "drink4"];
function checkDrink(CanDrink, successCallback, errorCallback) {
    setTimeout(() => {
        if (CanDrink === true) {
            return successCallback(drinkList);
        }
        else if (CanDrink === false) {
            return errorCallback({ err: "Demeye soz tapa bilmirem" });
        }
        else {
            return errorCallback({ err: "error" });
        }
    }, 200)
}

function getIdByDrink(drinkname, successCallback, errorCallback) {
    setTimeout(() => {
        if (drinkname) {
            const icki = { id: 1001 }
            return successCallback(icki);
        }
        else {
            return errorCallback({ err: "error" })
        }
    }, 200)
}

function getDrinkInfo(drinkid, successCallback, errorCallback) {
    setTimeout(() => {
        if (drinkid === 1001) {
            return successCallback({ name: drinkList[0], permission: "haram" });
        } else {
            return errorCallback({ err: "error" })
        }
    }, 200)
}

getIdByAuth(
    mail,
    password,
    (user) => {
        getUserInfo(
            user.id,
            (userInfo) => {
                checkAge(
                    userInfo.age,
                    (CanDrink) => {
                        checkDrink(
                            CanDrink,
                            (drinkList) => {
                                getIdByDrink(
                                    drinkList[0],
                                    (icki) => {
                                        getDrinkInfo(icki.id,
                                            (info) => {
                                                console.log("Successful", info);
                                            }, 
                                            (err) => console.log("error", err)
                                        )
                                    },
                                    (err) => console.log("error", err)
                                )
                            },
                            (err) => console.log("error", err)
                        )
                    },
                    (err) => console.log("error", err)
                )
            },
            (err) => console.log("error", err)
        )
    },
    (err) => console.log("error", err)
);