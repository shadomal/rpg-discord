const { initDiscord } = require("./src/Discord/init");
const { initDatabase } = require("./src/server/database/database");
const { init_routes } = require("./src/server/server");

async function init() {
    
    await init_routes();
    await initDiscord();
    //await initDatabase();
}

init().catch(function(err){
    console.log(err);
});