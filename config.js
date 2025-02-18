const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKH7mDVnXVAHq8K4qt6NR5CBAxXAKEgGKX/z5F213dD3PO9PCUCsnaK2utvV8ByXCJZqgB/VeQU1xDhtola3IE+sCsTidEAQcCyCDog8JMG72ZB+vLcqLqcx93RRoWRncXnkee+rNZJzuyjzaoI2XP4M6BvPIS7P8BcDOlCVLX1wuLxqS+HNXzcq2bN1Jfx5l2dJxp5nhiOuCvO+MZ3FtEiCkm4TA/oxRRmMxQY0NMv0l/pjSKFi1umx7du4NTXkqbyr1Q02fT7ZTnF+YufEkGevUSf49+ehx3Yq/Y6TcmuMvAGQ6vk5pM9igt1DxWiomNMjgi2/2Vf9AvcUhQMAkQYZg139b9Mj/EcWpplnsdxMe5Ph2O8ji5MXtLLl5z8+ZGPU5y20L7w/eIB2plKjj2FXV703eqHwn7o+hmQ0vXXT6pnG0YpZa2DWzr5Stxm35kJf4/uqeDhKCQBhvTDjvba7CZCbr7ggcxlgtYQ+9iFy5i+tKQ/O/R7+1H+cVJokwdZfnyeNQ3XX5zzSohzXf0dBNUd1OOa4+tr+Enfcgq+ieW13qVBUl36knFyDhM8UmDBZvb0erlog9UBZ0zKTz6wXCnrTPLJ+LIWWkHf5Zds1Czdwv5as4E2Tqzba/G5d7mm+igRMbz24ti1EwC0BfuHKAoxCWjkOGMtHsir3EABrWDfIrYm7xgKzvFamedEr9ayTd3NOWLma8P5Dw1pHlyFk9rahxVKo3nh2fAgZxmPipLFIxxyTLaLFBZwhCVoP/3Lw4QdGUP49pyksCBE6YleyFVnmQw+HD14yf0/awizGmIb7ULREGf/9xGjGESlq2OFYHUP+MaWWfIStA/waREdw4EqMY+avGALPaGOzeNtk6qVm49hbskEi8t5XNGHkd4FEAVqdqTqKjSk+zJ/lNPFOCTfJKkAJ6EAGoB4AB+75n2zm8tvHXJMC4dbGsChO7KTcso3ZAr3mP9zYaH9oiiAPQZrRAHPOjHVb7NYkT+gKvNt4lRrbqq7/NONNYWV88dGMnsPDK+4D48Bf3XzzllZUGLN17Ohpq22QEOpG8RxO3Le7KmioooabrSV/8qf1xaGWGe/yCIAQ4Q2J4FMMANbIu8O9BeDxCDOClBH1gzdcKXhjVcOive40cj4xAaVmiAT8c+ov+I1sRMBpcICz0F51Vp2fneGcANInFsFmpHRCelWkako0dS/PwvIKAP8nGw6QnesZpNSvmwXm7O7l6ShmWh1arOr462tIj8Az3b+aySV3rAJr7tSfpKrBdzU9z+dKaCLqorKo3cxVDd+4NCla31c1vtkZyvxW68oc5D5HZHaq/20rBIXN14Ga+twXIsjfn9TFDo8edSzMxyfA4czVwvmJR0O7FRkOjnYNEhkwsyTFuOV2dd3s90+0ai8NGUb0MheR/G+K1dXt9zdsLobba9e/AfTn0Gnr9zXxDeZ+VvQmU6xnGtT2R2QofCo0ak7uJQjN1cmRqwqhkhHS86KN160lPA/f6LA3kC2SmjKeiDMvUg4EACS2Z8NuwWp6hkMM1BX9Cknq7qPC9yIG2MPHcYZB99Doz2G+yO4P4P2LH9MQMIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "SITHU BHH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || 'hi',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

