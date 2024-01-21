const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = '';

var games = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
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
var shared_secret2 = '';

var games2 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
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
var shared_secret3 = '';

var games3 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
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
var shared_secret4 = '';

var games4 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
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
var shared_secret5 = '';;

var games5 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
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
var shared_secret6 = '';

var games6 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
var status6 = 1;  // 1 - online, 7 - invisible


user6 = new steamUser();
user6.logOn({"accountName": username6, "password": password6, "twoFactorCode": steamTotp.generateAuthCode(shared_secret6)});
user6.on('loggedOn', () => {
        if(user6.steamID != null) console.log(user6.steamID + ' - Successfully logged on');
        user6.setPersona(status6);               
	user6.gamesPlayed(games6);
});


 var username7 = process.env.username7;
 var password7 = process.env.password7;
 var shared_secret7 = '';

 var games7 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
 var status7 = 1;  // 1 - online, 7 - invisible

 user7 = new steamUser();
 user7.logOn({"accountName": username7, "password": password7, "twoFactorCode": steamTotp.generateAuthCode(shared_secret7)});
 user7.on('loggedOn', () => {
         if(user7.steamID != null) console.log(use7.steamID + ' - Successfully logged on');
         user7.setPersona(status7);               
 	user7.gamesPlayed(game7);
 });

 var username8 = process.env.username8;
 var password8 = process.env.password8;
 var shared_secret8 = '';

 var games8 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
 var status8 = 1;  // 1 - online, 7 - invisible

 user8 = new steamUser();
 user8.logOn({"accountName": username8, "password": password8, "twoFactorCode": steamTotp.generateAuthCode(shared_secret8)});
 user8.on('loggedOn', () => {
         if(user8.steamID != null) console.log(user8.steamID + ' - Successfully logged on');
        user8.setPersona(status8);               
 	user8.gamesPlayed(games8);
});

 var username9 = process.env.username9;
 var password9 = process.env.password9;
 var shared_secret9 = '';

 var games9 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
 var status9 = 1;  // 1 - online, 7 - invisible

 user9 = new steamUser();
 user9.logOn({"accountName": username9, "password": password9, "twoFactorCode": steamTotp.generateAuthCode(shared_secret9)});
 user9.on('loggedOn', () => {
         if(user9.steamID != null) console.log(user9.steamID + ' - Successfully logged on');
        user9.setPersona(status9);               
 	user9.gamesPlayed(games9);
});

 var username10 = process.env.username10;
 var password10 = process.env.password10;
 var shared_secret10 = '';

 var games10 = [570,440,730,259080,630,1222670,1172470,236390,291550];  // Enter here AppIDs of the needed games
 var status10 = 1;  // 1 - online, 7 - invisible

 user10 = new steamUser();
 user10.logOn({"accountName": username10, "password": password10, "twoFactorCode": steamTotp.generateAuthCode(shared_secret10)});
 user10.on('loggedOn', () => {
         if(user10.steamID != null) console.log(user10.steamID + ' - Successfully logged on');
        user10.setPersona(status10);               
 	user10.gamesPlayed(games10);
});

