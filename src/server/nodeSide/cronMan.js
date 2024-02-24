const cron = require("node-cron");
// m h d m y
cron.schedule('* * * * *', () => {
    console.log("called",new Date().toISOString() , Date.now());
})

// cron.getTasks()
// cron.validate("0 0 * * *")