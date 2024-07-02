const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");

const mocks = {
    Query: () => ({
      tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => ({
        name: "Grumpy Cat",
        photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      }),
      thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  };

async function startApolloServer() {
  const schema = makeExecutableSchema({ typeDefs });
  const schemaWithMocks = addMocksToSchema({ schema, mocks });
  const server = new ApolloServer({ schema: schemaWithMocks });

  const { url } = await startStandaloneServer(server);
  console.log(`Yo Server is running boi query at ${url}`);
}

startApolloServer();
