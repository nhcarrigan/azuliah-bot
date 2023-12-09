import { Client, WebhookClient } from "discord.js";

import { Command } from "./Command";

export interface ExtendedClient extends Client {
  debug: WebhookClient;
  commands: Command[];
}
