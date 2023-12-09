import { GuildMember, Interaction } from "discord.js";

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

    if (interaction.isButton()) {
      if (interaction.customId.startsWith("rr-")) {
        await interaction.deferReply({ ephemeral: true });
        const { guild, customId, member: untypedMember } = interaction;
        const roleId = customId.split("-")[1];
        const role = await guild?.roles.fetch(roleId);
        const member = untypedMember as GuildMember;

        if (!role) {
          await interaction.editReply({
            content: "Cannot find that role. Please contact Naomi.",
          });
          return;
        }

        let content = "";

        if (member.roles.cache.has(role.id)) {
          const success = await member.roles.remove(role).catch(() => false);
          content = success
            ? `I have removed the ${role.name} role from you.`
            : `I failed to remove that role. Please contact Naomi.`;
        } else {
          const success = await member.roles.add(role).catch(() => false);
          content = success
            ? `I have given the ${role.name} role to you.`
            : `I failed to remove that role. Please contact Naomi.`;
        }
        await interaction.editReply({ content });
      }
    }
  } catch (err) {
    await errorHandler(bot, "on interaction", err);
  }
};
