const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://kpd:@cluster0.jlje5.mongodb.net/?retryWrites=true&w=majority',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94766494699',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94766494699'    // Enter Your Bot Number
};
