import { ExtendedClient } from "../interfaces/ExtendedClient";
import { registerCommands } from "../utils/registerCommands";

/**
 * Handles the ClientReady event from Discord.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 */
export const onReady = async (bot: ExtendedClient) => {
  await bot.debug.send(
    `Logged in as ${bot.user?.displayName || bot.user?.username}`
  );
  await registerCommands(bot);
};
