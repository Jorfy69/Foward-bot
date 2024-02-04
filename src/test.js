ChannelIds.slice(1).forEach(channelId => {
    const channel = guild.channels.cache.get(channelId);
    if (!channel) {
        //console.log(`Channel with ID ${channelId} not found in guild ${guild.name}.`);
        return;
    }
    
    // Define the role ID mapping for each channel
    let roleMapping = {};
    switch (channelId) {
        case ChannelIds[1]:
            roleMapping = { originalRole: RoleIds[0], newRole: RoleIds[1] };
            break;
        case ChannelIds[2]:
            roleMapping = { originalRole: RoleIds[0], newRole: RoleIds[2] };
            break;
        // Add cases for other channels if needed
    }

    // Send the message with role mention replacement
    sendMessageWithRoleReplacement(message.content, channel, roleMapping, guild);
});

// Function to send message with role mention replacement
function sendMessageWithRoleReplacement(content, channel, roleMapping, guild) {
    const { originalRole, newRole } = roleMapping;

    // Replace role mentions in the message content
    const contentToSend = content.replace(new RegExp(`<@&${originalRole}>`, 'g'), `<@&${newRole}>`);

    // Send the modified message content
    channel.send(contentToSend)
        .then(sentMessage => console.log(`Message sent to ${channel.name} in guild ${guild.name}: ${sentMessage.content}`))
        .catch(console.error);
}
