const express = require('./kpress');
const app = express();
app.get('/', (req, res) => {
    res.end('Hello world');
})

app.get('/users', (req, res) => {
    res.end(JSON.stringify({ name: 'abc' }));
})

app.listen(3003, () => {
    console.log('server start');
})