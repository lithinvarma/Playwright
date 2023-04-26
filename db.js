var data

let mysql = require('mysql2');
let { Client } = require('ssh2');
let fs=require('fs')
let sshClient = new Client();
var dat=fs.readFileSync("/Users/lithin/WebstormProjects/Playwright/tenv/remote-env.json")
const params = JSON.parse(dat);
var dhost=JSON.stringify(params.db_config.dbHost).replaceAll('"', '')
var dport='3306'
var duser=JSON.stringify(params.db_config.dbUserName).replaceAll('"', '')
var dpass=JSON.stringify(params.db_config.dbPassword).replaceAll('"', '')
var db=JSON.stringify(params.db_config.dbName).replaceAll('"', '')
var sshhost=JSON.stringify(params.db_config.dbSSHHost).replaceAll('"', '')
var sshuser=JSON.stringify(params.db_config.dbSSHUser).replaceAll('"', '')
var sshport=22

let dbServer = {
    host: dhost,
    port: dport,
    user: duser,
    password: dpass,
    database: db
}
let tunnelConfig = {
    host:sshhost,
    port: sshport,
    username: sshuser,
    privateKey: fs.readFileSync('/Users/lithin/.ssh/id_rsa')
}
let forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
function fetch(q,f) {
    return new Promise(function (resolve, reject) {
        sshClient.on('ready', async () => {
            await sshClient.forwardOut(
                forwardConfig.srcHost,
                forwardConfig.srcPort,
                forwardConfig.dstHost,
                forwardConfig.dstPort,
                (err, stream) => {
                    if (err) console.log(err);
                    let updatedDbServer = {
                        ...dbServer,
                        stream
                    };
                    let connection = mysql.createConnection(updatedDbServer);
                    connection.connect((error) => {
                        if (error) {
                            console.log(error);
                        } else {

                            ///console.log("DB Connected successfully")

                        }
                       


                    });
                });
        }).connect(tunnelConfig);
    });
}