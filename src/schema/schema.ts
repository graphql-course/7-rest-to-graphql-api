import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import resolvers from '../resolvers/resolverMap';

import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all: true });

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;