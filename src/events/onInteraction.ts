import { Interaction } from "discord.js";

import { ExtendedClient } from "../interfaces/ExtendedClient";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the interaction event from Discord.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const onInteraction = async (
  bot: ExtendedClient,
  interaction: Interaction
) => {
  try {
    if (interaction.isChatInputCommand()) {
      const name = interaction.commandName;
      const target = bot.commands.find((c) => c.data.name === name);
      if (target) {
        await target.run(bot, interaction);
        return;
      }
      await interaction.reply({
        content: `${name} is not valid command oopsie whoopsie`,
      });
    }
  } catch (err) {
    await errorHandler(bot, "on interaction", err);
  }
};
