require('./database');
const app = require('./app');

async function main() {
    const server=await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();