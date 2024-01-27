const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


var username2 = process.env.username2;
var password2 = process.env.password2;
var shared_secret2 = process.env.shared2;

var games2 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status2 = 1;  // 1 - online, 7 - invisible


user2 = new steamUser();
user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
user2.on('loggedOn', () => {
        if(user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
        user2.setPersona(status2);               
	user2.gamesPlayed(games2);
});


var username3 = process.env.username3;
var password3 = process.env.password3;
var shared_secret3 = process.env.shared3;

var games3 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status3 = 1;  // 1 - online, 7 - invisible


user3 = new steamUser();
user3.logOn({"accountName": username3, "password": password3, "twoFactorCode": steamTotp.generateAuthCode(shared_secret3)});
user3.on('loggedOn', () => {
        if(user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
        user3.setPersona(status3);               
	user3.gamesPlayed(games3);
});

var username4 = process.env.username4;
var password4 = process.env.password4;
var shared_secret4 = process.env.shared4;

var games4 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status4 = 1;  // 1 - online, 7 - invisible


user4 = new steamUser();
user4.logOn({"accountName": username4, "password": password4, "twoFactorCode": steamTotp.generateAuthCode(shared_secret4)});
user4.on('loggedOn', () => {
        if(user4.steamID != null) console.log(user4.steamID + ' - Successfully logged on');
        user4.setPersona(status4);               
	user4.gamesPlayed(games4);
});


var username5 = process.env.username5;
var password5 = process.env.password5;
var shared_secret5 = process.env.shared5;

var games5 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status5 = 1;  // 1 - online, 7 - invisible


user5 = new steamUser();
user5.logOn({"accountName": username5, "password": password5, "twoFactorCode": steamTotp.generateAuthCode(shared_secret5)});
user5.on('loggedOn', () => {
        if(user5.steamID != null) console.log(user5.steamID + ' - Successfully logged on');
        user5.setPersona(status5);               
	user5.gamesPlayed(games5);
});


var username6 = process.env.username6;
var password6 = process.env.password6;
var shared_secret6 = process.env.shared6;

var games6 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
var status6 = 1;  // 1 - online, 7 - invisible


user6 = new steamUser();
user6.logOn({"accountName": username6, "password": password6, "twoFactorCode": steamTotp.generateAuthCode(shared_secret6)});
user6.on('loggedOn', () => {
        if(user6.steamID != null) console.log(user6.steamID + ' - Successfully logged on');
        user6.setPersona(status6);               
	user6.gamesPlayed(games6);
});


// var username7 = process.env.username7;
// var password7 = process.env.password7;
// var shared_secret7 = process.env.shared7;

// var games7 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
// var status7 = 1;  // 1 - online, 7 - invisible

// user7 = new steamUser();
// user7.logOn({"accountName": username7, "password": password7, "twoFactorCode": steamTotp.generateAuthCode(shared_secret7)});
// user7.on('loggedOn', () => {
//         if(user7.steamID != null) console.log(use7.steamID + ' - Successfully logged on');
//         user7.setPersona(status7);               
// 	user7.gamesPlayed(game7);
// });

// var username8 = process.env.username8;
// var password8 = process.env.password8;
// var shared_secret8 = process.env.shared8;

// var games8 = [730, 440, 570, 236390, 1222670, 2073850, 578080, 230410, 1172470, 1085660, 552990, 223750, 444200, 1449850, 1284210, 2357570, 1962663, 1677740, 2333480, 238960, 291550, 438100, 386360, 1974050, 761890, 2331260, 1568590, 1286830, 1240440, 1928420, 766570, 1997040];  // Enter here AppIDs of the needed games
// var status8 = 1;  // 1 - online, 7 - invisible

// user8 = new steamUser();
// user8.logOn({"accountName": username8, "password": password8, "twoFactorCode": steamTotp.generateAuthCode(shared_secret8)});
// user8.on('loggedOn', () => {
//         if(user8.steamID != null) console.log(user8.steamID + ' - Successfully logged on');
//         user8.setPersona(status8);               
// 	user8.gamesPlayed(games8);
// });
