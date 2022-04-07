const Discord = require ("discord.js")
require("dotenv").config()

const TOKEN = "OTYwOTc5NzMzMzA5NDUyMzYy.YkyUHg.I1TZIlJizoO4Wp-gqBRdrn631iI"

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
////            BESKEDER        ////
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello There!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello There!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Send Twitch"){
        message.reply("https://www.twitch.tv/fragzui")
    }
})

////            BESKEDER        ////

const welcomeChannelId = "956235351477874808"
   
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to the server!`,
        files: [img]     

    })
})

client.login(process.env.TOKEN)