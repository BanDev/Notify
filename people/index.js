module.exports = class People{
    
    // Is nasty to russell
    russell(channel){
        switch(Math.floor(Math.random() * 10)){
            case 0:
                channel.send("russell stinks")
                break;
            case 1:
                channel.send("russell is bad")
                break;
            case 2:
                channel.send("russell is not as cool as jack")
                break;
            case 3:
                channel.send("russell is stupid")
                break;
            case 4:
                channel.send("russell is stupid")
                break;
            case 5:
                channel.send("russell is a raging sexist")
                break;
            case 6:
                channel.send("russell loves java")
                break;
            case 7:
                channel.send("russell is actually pretty cool")
                break;
            case 8:
                channel.send("no russell joke for you")
                break;
            default:
                channel.send("russell is a spaget coder")
                break;
        }
    }

    // Hollie's quotes
    hollie(channel){
        channel.send("Hollie once said:")
        switch(Math.floor(Math.random() * 10)){
            case 0:
                channel.send("```russell has destroyed me```")
                break;
            case 1:
                channel.send("```Shit up```")
                break;
            case 2:
                channel.send("```Scones woke```")
                break;
            case 3:
                channel.send("```Russell is stinky```")
                break;
            case 4:
                channel.send("```I love Byte it is the best discord bot ever```")
                break;
            default:
                channel.send("```I thought r kink was punishment```")
                break;
        }
    }

    // Jack is cool
    jack(channel){
        channel.send("jack is the best. He is so so so seggsy. https://jackisa.ninja")
    }
    
    // Hannah smeels
    hannah(channel){
        channel.send("hannah smeels")
    }

    // Protends to kick someone
    kick(channel, user){
        channel.send("Kicking " + user + " ...")
    }

    // Davo innit
    bigd(channel){
        channel.send("You're gonna need a new pair of trousers 😳")
    }
}
