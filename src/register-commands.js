require('dotenv').config()
const {REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [  
       
    new SlashCommandBuilder()
    .setName('mail')
    .setDescription('Sends your message to all the servers you want')
    .options(() =>{
        
    }),

    
];
const rest = new REST({ version: '10'}).setToken(process.env.Client_Token);
(async () => {
    try {
        console.log('Registering slash commands....');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        
        console.log('The slash commands were registered');
    } catch (error){
        console.log(`There was an error: ${error}`)
    }
})();