const { transports } = require('winston');
const winston = require('winston'); 

const logger = () => { 

    const myFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
        return `[${timestamp}] [${level}] [${meta.file}] ${message} `;
    });

    var log = winston.createLogger({
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

    return log;
}

module.exports = logger;