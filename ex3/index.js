
let moment = require('moment')
console.log(`Current date: ${moment().format('YYYY-MM-DD')}`)
let yearsSince = moment().diff(moment('1976-11-26', 'YYYY-MM-DD'), 'years')
console.log(`Years since November 26, 1976: ${yearsSince}`)
