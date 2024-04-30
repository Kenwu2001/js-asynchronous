function get_info() {
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let tmp_id = Math.floor(Math.random() * 14000 + 6000);
            setTimeout(() => {
                resolve(tmp_id);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_firstname() {
    first_name_list = ['Adam', 'Eric', 'Peter'];
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let random_num = Math.floor(Math.random() * 3);
            setTimeout(() => {
                resolve(first_name_list[random_num]);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_lastname() {
    last_name_list = ['Jones', 'Smith', 'Johnson'];
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let random_num = Math.floor(Math.random() * 3);
            setTimeout(() => {
                resolve(last_name_list[random_num]);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_username() {
    username_list = ['Toyz', 'Faker', 'Dinter'];
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let random_num = Math.floor(Math.random() * 3);
            setTimeout(() => {
                resolve(username_list[random_num]);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_email() {
    email_list = ['asdf@google.com', 'qwer@microsoft.com', 'zxcv@cs.nthu.edu.tw'];
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let random_num = Math.floor(Math.random() * 3);
            setTimeout(() => {
                resolve(email_list[random_num]);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_address() {
    address_list = ['1027 Alpha Avenue', '3132 Kidd Avenue', '876 Jefferson Street'];

    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.1) {
            let random_num = Math.floor(Math.random() * 3);
            setTimeout(() => {
                resolve(address_list[random_num]);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function initApp() {
    var reSamplebtn = document.getElementById('resamplebtn');
    reSamplebtn.addEventListener('click', retrieve_data);
}

async function retrieve_data() {
    var txtInfoName = document.getElementById('user-info-name');
    var txtFirstName = document.getElementById('firstName');
    var txtLastName = document.getElementById('lastName');
    var txtUserName = document.getElementById('username');
    var txtEmail = document.getElementById('email');
    var txtAddress = document.getElementById('address');
    var boxReSample = document.getElementById('re-sample');
    txtInfoName.innerText = '-';
    txtFirstName.value = '-';
    txtLastName.value = '-';
    txtUserName.value = '-';
    txtEmail.value = '-';
    txtAddress.value = '-';

    try {
        // TODO: get_info first
        let out0 = await get_info();
        txtInfoName.innerText = out0 + '\'s information';

        // TODO: call other function to get other data
        Promise.all([get_firstname(), get_lastname(), get_username(), get_email(), get_address()])
            .then(
                values => {
                    console.log('yes');
                    txtFirstName.value = values[0];
                    txtLastName.value = values[1];
                    txtUserName.value = values[2];
                    txtEmail.value = values[3];
                    txtAddress.value = values[4];
                }
                , err => {
                    console.log('why: ' + err);
                    txtInfoName.innerText = "failed ooo";
                    if(boxReSample.checked == true) {
                        console.log('cc');
                        retrieve_data();
                    }
                }
            );

    } catch (e) {
        txtInfoName.innerText = 'failed';
        if(boxReSample.checked == true) {
            console.log('bb');
            retrieve_data();
        }
    }

}

window.onload = function () {
    initApp();
}