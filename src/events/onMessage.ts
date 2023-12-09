import { Message } from "discord.js";

import { ExtendedClient } from "../interfaces/ExtendedClient";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the messageCreate event from Discord.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 * @param {Message} message The message payload from Discord.
 */
export const onMessage = async (bot: ExtendedClient, message: Message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (
      message.content.toLowerCase().includes("naomi") ||
      message.mentions.users.has("465650873650118659")
    ) {
      await message.channel.send({
        content: `<@!465650873650118659> is a bitch.`,
      });
    }
  } catch (err) {
    await errorHandler(bot, "on message", err);
  }
};
