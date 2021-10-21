import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const port = 8080;
const dev = process.env.NODE_ENV !== 'production';
// const handle = app.getRequestHandler();

const server = express();

server.get('/', (req, res) => {
    res.send('Graphql is amazing!');
})

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

// server.get('/people2', (req, res) => {
//     return app.render(req, res, '/page1');
// })

// server.get('/people3', (req, res) => {
//     return app.render(req, res, '/page2');
// })

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`Ready on http://localhost:${port}`);
})
