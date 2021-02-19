const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Hello Friend",
        state: "Rich présence by sq7rt",
        startTimestamp: new Date(),
        largeImageKey: "pp",
        largeImageText: "Fuck society",
        smallImageKey: "ph",
        smallImageText: "..."
    });

    console.log("$Q7RT ta rich présence est active !")
})

rpc.login({
    clientId: ""
});