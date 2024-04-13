const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "DISCORD_BOT_TOKEN",
  prefix: "DISCORD_BOT_PREFIX",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage",
"onInteractionCreate"],
database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});
require("./handler/variavel.js")(client);
require("./handler/antiCrash.js")(client);
const loader = new LoadCommands(client);
loader.load(client.cmd, "./comandos/")