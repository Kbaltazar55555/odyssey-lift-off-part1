const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
    "Query types"
        tracksForHome: [Track!]!
    }

  "A track is a group of Modules that teaches about a specific topic" 
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the Track's approximate length to complete, in minutes"
    length: Int
    "the number of modules"
    modulesCount: Int
  }
  
  "author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
