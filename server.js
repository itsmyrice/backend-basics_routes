import { createServer } from "node:http";

export const server = createServer((request, response) => {
    if(request.url === "/api/fish/1") {
        const answer1 = "Shrimp";
        response.statusCode = 200;
        response.end(answer1);
        return;
    }
    if(request.url === "/api/fish/2") {
        const answer2 = "Anemonefish";
        response.statusCode = 200;
        response.end(answer2);
        return;
    }
    response.statusCode = 404;
    response.end("Not found");
})

export default server;