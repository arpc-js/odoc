// server.js
import {createServer} from 'http';
import {exists, statSync, readFile} from 'fs';
import {parse} from 'path';
import {parse as _parse} from 'url';

const PORT = process.env.PORT || 8080;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2',
    '.ttf': 'application/font-sfnt'
};

const server = createServer((req, res) => {
    let parsedUrl = _parse(req.url);
    let pathname = `./vitepress/dist${parsedUrl.pathname}`;

    exists(pathname, (exist) => {
        if (!exist) {
            // If the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }

        // If a directory is requested, serve index.html
        if (statSync(pathname).isDirectory()) {
            pathname += '/index.html';
        }

        // Read file from file system
        readFile(pathname, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                // Based on the URL path, extract the file extension
                const ext = parse(pathname).ext;
                // If the file is found, set Content-type and send data
                res.setHeader('Content-type', mimeTypes[ext] || 'text/plain');
                res.end(data);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
