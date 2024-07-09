const express = require('express');
const { handle } = require('./handlers');

const app = express();
const port = 3001;

//*************************Endpoint*************************//
app.get('/', (req, res) => res.json({hello: 'world'}));


//*************************Error Handlers************************//
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log('Server started on port ${port}'));
