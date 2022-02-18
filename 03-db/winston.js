const { transports } = require('winston');
const winston = require('winston'); 

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level} ${message}`;
});

const log = winston.createLogger({
    level: 'info', 
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYMMDD HH:mm:ss'
        }),
        winston.format.splat(),
        myFormat
    ),
    // meta,
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

const person = { id: 10, name: "martin", email: "martin@email.nu"};
log.info("%s loggade precis in med lösenordet %s", person.name, person.email);