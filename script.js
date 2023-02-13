const prompt_list = require('./prompts.js');

function RandomPrompt(list){
    const prompts = prompt_list.prompts;
    const text = list[Math.floor(Math.random()*prompts.length)];
    const chosenPrompt = text.title +'\n'+ text.description;
    return chosenPrompt
};

console.log(RandomPrompt(prompt_list.prompts));