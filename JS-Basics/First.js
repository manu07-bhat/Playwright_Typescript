console.log("second")
console.log(12)

const wifiPassword = require('wifi-password');

wifiPassword().then(password => {
    console.log('Current Wi-Fi Password:', password);
}).catch(err => {
    console.error('Error retrieving password:', err);
});   