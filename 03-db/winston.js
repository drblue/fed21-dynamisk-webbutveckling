const { transports } = require('winston');
const winston = require('winston'); 
// [13:12:23] [info] [controller_authors] Något gick fel i…
const myFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
    return `[${timestamp}] [${level}] [${meta.file}] ${message} `;
});
/*
const myFormat = winston.format.printf(({ level, message, timestamp, }) => {
    return `${timestamp} ${level} ${message}`;
});
*/

const log = winston.createLogger({
    level: 'info', 
    format: winston.format.combine(
        winston.format.colorize(), 
        winston.format.timestamp({
            format: 'HH:mm:ss'  // YYYY-MM-DD HH:mm:ss
        }),
        winston.format.splat(),
        myFormat
    ),
    defaultMeta: { file : "" },  
    transports: [
        new winston.transports.Console()
    ]
});



log.error('Ett error meddelande');
log.warn('Ett warn meddelande');
log.info('Ett info meddelande');
log.http('Ett http meddelande');
log.verbose('Ett verbose meddelande');
log.debug('Ett debug meddelande');
log.silly('Ett silly meddelande');

log.defaultMeta = { file: "author_controller" };

const person = { id: 10, name: "martin", email: "martin@email.nu"};
log.info("%s loggade precis in med lösenordet %s", person.name, person.email);