import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js';
import resolvers from './resolvers.js';

const app= express();

app.get('/', (req, res) => {
    res.send("Up and running.........")
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(8001, ()=> console.log("running on 8001"))