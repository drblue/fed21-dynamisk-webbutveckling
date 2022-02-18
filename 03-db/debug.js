const debug = require('debug');
const express = require('express');
const app = express();

//const log = require('debug')('namespace');

// controller:pokemon_friends
// controller:pokemon_cards
// models:pokemon_friends
// Namespaces
// DEBUG=* (loggar från alla namespaces)
// DEBUG=logger (loggar fån logger-namespace)
// DEBUG=logger:1 (loggar från logger:1-namespacet)
// DEBUG=logger:* (loggar från alla logger:-namespace)

const testLogger = debug('logger');
const testLogger1 = debug('logger:1');
const testLogger2 = debug('logger:2');

testLogger('Detta är min testlogger');
testLogger1('Detta är min testlogger 1');
testLogger2('Detta är min testlogger 1');


const log = debug('log');
log('test');
//log(app);
const person = { id: 12, namn: 'Martin', email: 'martin@email.nu' };
log(person);
log("%o", person);
//log("%O", app);
// %s = sträng, %d = tal/nummer, %j json %%

log("%j", person);
log("%%j", person);

log("%p är min användare", person);
debug.formatters.p = (p) => {
    return p.id;
};
log("%p är min användare", person);