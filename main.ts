const port = 8080;

const handler = (request: Request): Response => {
    const body = `Your user-agent is:\n\n${request.headers.get("user-agent") ?? "Unknown"}`;

    return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
const server = Deno.serve({ port, handler });

// Attendez l'arrêt du serveur
await server;

// Cela ne sera jamais atteint tant que le serveur est actif
console.log("Serveur arrêté.");