
const console = require('console');

const DW1JSON = [
    {
        "login": "Bryan10dms",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-03-15T19:44:00.000+01:00",
        "saml_name_id": null
    },
    {
        "login": "CarlosVega01",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-14T17:28:38.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "cgimeno00",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T18:02:42.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "danifurgo",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T19:20:16.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "DavidTobia89",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T19:19:24.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "DavidZhouGH",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "No activity",
        "saml_name_id": null
    },
    {
        "login": "Dolores592",
        "name": "Dolores Rubio",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T16:39:30.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "fppablosan",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T15:20:40.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "HughPF",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-17T18:15:51.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "joanh",
        "name": "Jose Angel Heras",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Owner",
        "last_active": "2023-04-19T19:26:43.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "LauraMihaela",
        "name": "Laura Gheorghiu",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-14T23:37:05.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "LiuZhouqi",
        "name": "Zhouqi Liu",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T19:17:13.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "mariamartinhndz",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-14T18:58:48.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "MARRCITO",
        "name": "EstefanyM.Cano",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T17:05:11.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "morebor",
        "name": "Borja Moreno",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T18:11:06.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "PebblesSoft",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-14T17:22:45.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "PolGomez1",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-03-28T18:34:45.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "Realhagane",
        "name": "Nicolas Ray Redondo",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T17:01:24.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "rmartinees",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-03-23T20:24:49.000+01:00",
        "saml_name_id": null
    },
    {
        "login": "Rome-sergio",
        "name": "Sergio",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T19:17:13.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "Sergiobdc",
        "name": "Sergio Barroso",
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T19:41:30.000+02:00",
        "saml_name_id": null
    },
    {
        "login": "Willoxey",
        "name": null,
        "tfa_enabled": false,
        "is_public": false,
        "role": "Member",
        "last_active": "2023-04-19T15:27:27.000+02:00",
        "saml_name_id": null
    }
]

const arrObj = JSON.stringify(DW1JSON);
const arrObjS = JSON.parse(arrObj);

console.table(arrObjS);

for (let i = 0; i < arrObjS.length; i++) {
    console.log(i + 1);
    console.log(arrObjS[i].login);
}

