const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileInfo = {};

rl.question(chalk.yellow("What's your name? Nicknames are also acceptable :) "), (answer) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  profileInfo.name = answer;
  rl.question(chalk.green("What's an activity you like doing? "), (answer) => {
    profileInfo.activity = answer;
    rl.question(chalk.yellow("What do you listen to while doing that? "), (answer) => {
      profileInfo.music = answer;
      rl.question(chalk.green("Which meal is your favourite (eg: dinner, brunch, etc.) "), (answer) => {
        profileInfo.meal = answer;
        rl.question(chalk.yellow("What's your favourite thing to eat for that meal? "), (answer) => {
          profileInfo.food = answer;
          rl.question(chalk.green("Which sport is your absolute favourite? "), (answer) => {
            profileInfo.sport = answer;
            rl.question(chalk.yellow("What is your superpower? In a few words, tell us what you are amazing at! "), (answer) => {
              profileInfo.power = answer;
              console.log(`${profileInfo.name} loves listening to ${profileInfo.music} while ${profileInfo.activity}, devouring ${profileInfo.food} for ${profileInfo.meal}, prefers ${profileInfo.sport} over any other sport, and is amazing at ${profileInfo.power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});