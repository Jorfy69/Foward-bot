client.on('messageCreate', (message) => {
    if (message.channel.id === ChannelIds[0] && message.author.id === PARENT_ID){
        console.log(`Received message '${message.content}' from ${message.author.tag} in the specific channel`);
        
        GuildIds.forEach(guildId => {
            const guild = client.guilds.cache.get(guildId);

            ChannelIds.slice(1).forEach(channelId => {
                const channel = guild.channels.cache.get(channelId);
                if (!channel) {
                    console.log(`Channel with ID ${channelId} not found in guild ${guild.name}.`);
                    return;
                }
             
                
                // Replace mentions with the appropriate role mention
                const mentionedRoles = message.mentions.roles;
                let contentToSend = message.content;
                mentionedRoles.forEach(mentionedRole => {
                    contentToSend = contentToSend.replace(`<@&${mentionedRole.id}>`, mentionedRole.toString());
                });

                channel.send(contentToSend)
                    .then(sentMessage => console.log(`Message sent to ${channel.name} in guild ${guild.name}: ${sentMessage.content}`))
                    .catch(console.error);
            });
        })
    } 
});
