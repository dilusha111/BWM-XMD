const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3rVHpCbYkRHLCAXBRW8ohvzUECBJVLSVKFNd/jvG2h39DzszPa+VdQlT1ZmnvMOyBlT5KIGDN9BWeELZKhdsqZEYAj0Ok1RBboggQyCIegYcod78/vVspPt6KDu+dzhIiXyej3WXqDB0T0vmBvmhGH+DG5dUNbRCcd/ACzVeENVXfMlYW0qgjuXD1rCv5QT3pkFx2bTWapNyenW9BQ8g1uLCHGFSWaWB1SgCp5c1PgQV9+jrxnKSvGyedWMZ6+ZPs3wVTVDm85eE/uyuLDQ9TpM6dCzeP4efeav1iK1LSE8cJ4oO/nbYp3tXDO1Jnt1py2jsknW7lE7C/RBn+KMoGScIMIwa76t+3iuxcokUtRqw70s/VUcMyjNia4aoyBMUeL7drm/rC61803de7GaV/u1xAeaa56c0JqaY3joTND+uCdrbSpSeQyvM6wZ/K/E/eozK/n/0d11rKyv5I43kWIzKdbbqVEU/IkbyJ35YUZcY0xXRS8eOeH0e/RJkcbR/miHs93LFL7Wag9lxJ+uHXOvhEfrSC1OKsK3+CxKX/Qhq6s/sZwV/X3YdGzH3vSOUJ3H5qzcju2+zNlBoF/6kW1pO7XoJJY/E7Ntx5q/eF4J5Vg/kUMtlfloORopDuSDyGGWrB1DzTsEz/cf5agZJ2DYu3VBhTJMWQUZPpP7njToAphcliiuELvLC65WlJUhj+rW8YZaApcNRLdON4ZguePcm2jlkukLJZcGz6ALyuocI0pR4mDKzlUzRZTCDFEw/PtnFxD0yh7GteVEsQtSXFG2JnV5OsPk09XPQxjH55qwZUNio12gCgz5r23EGCYZbXWsCaziA74g4wAZBcMUnii6dUGCLjhGLR4gcGa8aRO80rcBDuV4rwU7R2spH87kcaUXi0LED5QnyPPqk6TEylMkx+oTzwtizKtQHcgS6AL80TPtm99aiGM7NZVKtbi1ISxmW8G3nWi3dSQuu9vw0B5VKAFDVtWoCyIY53W5OueI/AF3YZl2s5lLB3fnqauRRdLQx044V/3rL7gPT8Hw/WtOGeekxZM9zwx7wgB0QXGPIG5/rkp9hRdFSRGkofAX/XFtZYRl+YMgBrqAwPYuWGJ2qNsiHw60zxPEID5RMASGK4x5qhnmlFsUfWrb+i7TjKyV+NOxz+g/ojXWT6PrEfdUGZc1NfxyuxzBBSJ5rr8oHQGlcj07ks7gKObP/wIChoDudN1L5f3rYS1lxMTacbNmxVWbloH+lqzmy+sumPeMzXZ+1uHCg+miQHlynuT70WLgElf27NVl0Hh5TxDn8ZZ4pvumac9ttUdyfi1Ww5VHosAsxxtabfqYXdbq5W03LV+XO0mKKnFgnbasKHrahJR+LAVcf5D30gYH6pWztOBErGzuCNx2Y0bIHYRjj/Oy7NGU96Fw+hjG+N4u7x85SzG6z7YPD/7Dqa/A87fuLwgfs/I3odKX2j4YjCWWot1LVGlHZZNnQh6W8kSD9YUR0omOO5m7jFUZ3G4/u6A8QZaeq6I1oYgg6IITpEz7atgVLhBlsCjBsNcXpb7al0Xx9g+xXjuX5gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "SITHU BHH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
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
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || 'https://wa.me/94760334624?text=@Hi_SITHU_BHH🤭🫶',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
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

