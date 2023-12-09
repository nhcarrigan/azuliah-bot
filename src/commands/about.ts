import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const about: Command = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Read about this bot.")
    .setDMPermission(false),
  run: async (bot, interaction) => {
    try {
      await interaction.deferReply();
      const embed = new EmbedBuilder();
      embed.setTitle("Azulibot");
      embed.setDescription(
        "This is just a smol lil bot built by Naomi to ~~bully~~ help Azuliah."
      );
      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler(bot, "about command", err);
      await interaction.editReply({
        content: "Something went wrong. Please contact Naomi.",
      });
    }
  },
};
