import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {

    // verifica se está rodando no docker
    const isDocker = process.env.IS_DOCKER === "true";

    // ambiente
    const environment = isDocker ? "docker" : "local";

    // database
    const database = {
        host: process.env.NODE_WEB_PORT,
        port: Number(process.env.NODE_WEB_PORT)
    };

    // web
    const web = {
        host: isDocker ? "nodeweb_host" : "localhost",

        port: isDocker
            ? Number(process.env.NGINX_PORT)
            : Number(process.env.PORT)
    };

    // resposta JSON
    return response.json({
        environment,
        database,
        web
    });

}
