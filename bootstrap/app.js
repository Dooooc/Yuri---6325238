import dotenv from "dotenv";

export default function app() {
    dotenv.config({
        quiet: true,
        path: process.cwd() + "/.env"
    });
}