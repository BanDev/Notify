module.exports = async (interaction) => {

    // Get the member who begun the
    // interaction.
    let member = interaction.member;

    // If member is not in any VC.
    if(!member.voice.channel) {
        await interaction.reply({ content: `You must be in a VC to run this command!`, ephemeral: true });
        return;
    }

    // Get the VC that the member 
    // is in.
    let vc = member.voice.channel;

    // Iterate through VC members
    // and remove caller and bots.
    var members = []
    vc.members.forEach(it => {
        if(it != member && !it.user.bot) members.push(it.displayName)
    });

    // Decide on what should be
    // said after the caller.
    var after;
    if(members.length == 1) {
        // Just one other member
        after = `with ${members[0]}`
    } else if(members == 0) {
        // No other members :(
        after = ``;
    } else {
        // A few members
        let final = members[members.length - 1];
        members.pop();
        after = `with ${members.join(`, `)} and ${final}`;
    }

    // Reply to the interaction.
    await interaction.reply(`@everyone, ${member.displayName} is in **${vc.name}** ${after}`);
}