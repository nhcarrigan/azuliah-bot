import { Client, Events, WebhookClient } from "discord.js";

import { Intents } from "./config/Intents";
import { ExtendedClient } from "./interfaces/ExtendedClient";
import { loadCommands } from "./utils/loadCommands";
import { onReady } from "./events/onReady";
import { onInteraction } from "./events/onInteraction";

(async () => {
  const bot = new Client({ intents: Intents }) as ExtendedClient;
  bot.debug = new WebhookClient({ url: process.env.DEBUG_HOOK as string });
  await loadCommands(bot);

  bot.on(Events.ClientReady, async () => {
    await onReady(bot);
  });

  bot.on(Events.InteractionCreate, async (interaction) => {
    await onInteraction(bot, interaction);
  });

  await bot.login(process.env.TOKEN);
})();
