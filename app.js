'use strict'

// The NPM I installed
const chalk = require('chalk');

// Ignores [0][1] and jumps straight to [2]
const args = process.argv.slice(2)

// Set entry points 
const choice = args[0]
const door = Number(args[1])

// Setting up arguments for console logs
// Using CHALK to change arguments different colors
// Green is good!
// Yellow means that you died!

if (choice === 'door'){
    if(door === 1){
      console.log(chalk.green('You walk through door 1. You find the code to make minecraft!'))
     }else if(door === 2){
      console.log(chalk.yellow('You walk through door 2. You fell into a snake pit!'))
    }else if(door === 3){
      console.log(chalk.green('You walk through door 3. You find a chest full of treasure!'))
    }else if(door === 4){
        console.log(chalk.yellow('You walk through door 4. Pennywise the clown smiles at you!'))
    }else if(door === 5){
        console.log(chalk.yellow('You walk through door 5 but you walk right into the mouth of a dragon!'))
    }else{
      console.log(chalk.red('Please enter "door 1, 2, 3, 4 or 5."'))
    }
  }
  else{
    // Using CHALK to change error messages red
  console.log(chalk.red('Please enter a door with a number from 1-5.'))
  } 