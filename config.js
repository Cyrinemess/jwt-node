require("dotenv/config")

const jwtConfig = {
    privateKey : "",
    publicKey : "",
}

const serverConfig = {
    port : process.env.PORT
}

const databaseConfig = {
    url : process.env.DATABASE_URL,
    dbname : process.env.DATABASE_NAME ,

}

module.exports = {
    SERVER_CONFIG : serverConfig,
    DATABASE_CONFIG : databaseConfig,
}