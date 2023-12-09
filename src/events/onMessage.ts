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
        allowedMentions: {
          parse: [],
        },
      });
    }
    if (
      message.content.toLowerCase().includes("azuliah") ||
      message.mentions.users.has("1126156476847755314")
    ) {
      await message.channel.send({
        content: `Gaslight, Gatekeep, Girl Piss`,
        allowedMentions: {
          parse: [],
        },
      });
    }
    if (message.content.toLowerCase().includes("piss")) {
      await message.channel.send({
        content:
          "https://tenor.com/view/mari-ohara-gamer-girl-pee-sifas-love-live-gif-23412824",
      });
    }
    if (message.content.toLowerCase().includes("pee")) {
      await message.channel.send({
        content:
          "https://tenor.com/view/piss-ed-peepee-fulcrum501-gif-22002454",
      });
    }
  } catch (err) {
    await errorHandler(bot, "on message", err);
  }
};
