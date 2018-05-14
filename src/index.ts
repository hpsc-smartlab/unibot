import { config } from 'dotenv';
config();
class Bot {
  start() : void {
    console.log(process.env.BOT_NAME);
  }
}

const newBot = new Bot();
newBot.start();
