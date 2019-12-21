//Create express framework manually
const http = require('http');
const url = require('url');

//Create router
const router = [];


class Application {
    get(path, handler) {
        router.push({
            path,
            method: 'GET',
            handler
        })
    }

    listen() {
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true);
            console.log(pathname);
            for (const item of router) {
                const {path, method, handler} = item;
                if(pathname === path && req.method === method){
                    return handler(req, res);
                }
            }
        })
        server.listen(...arguments)
    }
}


module.exports = function createApplication() {
    return new Application()
}