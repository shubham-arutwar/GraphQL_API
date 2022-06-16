const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors=require("cors");

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 };

mongoose.connect('mongodb+srv://localuser:abcxyz123@graphql.zruwr.mongodb.net/library?retryWrites=true&w=majority');
mongoose.connection.once('open',() =>{
    console.log('connected to ddatabase');
});

app.use(cors(corsOptions));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

