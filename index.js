const { printSchema } = require("graphql");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

// const typeDefs = loadSchemaSync("./**/*.graphql", {
const typeDefs = loadSchemaSync("schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

console.log(printSchema(typeDefs));
