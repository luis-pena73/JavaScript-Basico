const winston = require('winston');

const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
}); 


logger.info("te puedo ayudar en algo")
logger.debug("si quiere lo podemos eliminar")
logger.warn ("esta accion puede tener consecuencias")
logger.error("esta accion es errada")


const miFuncion = saludar => {
    if (typeof saludar === "string") {
        return saludar + "luis"
    }
    return false
}
console.log(miFuncion("hola "))