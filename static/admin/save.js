const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 3333;
const PORTFOLIO_ROOT = 'C:\\Users\\Molton\\.openclaw\\workspace\\portfolio';

// Change these for security
const USERNAME = 'tales';
const PASSWORD_HASH = 'YOUR_PASSWORD_HASH'; // Run: node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

console.log('To set password, edit C:\\Users\\Molton\\.openclaw\\workspace\\portfolio\\static\\admin\\save.js and set PASSWORD_HASH');
console.log('Generate hash: node -e "console.log(require(\'crypto\').createHash(\'sha256\').update(\'your-password\').digest(\'hex\'))"');

const server = http.createServer((req, res) => {
    // Check authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Portfolio Admin"' });
        res.end();
        return;
    }
    
    const base64Credentials = authHeader.slice(6);
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');
    
    // For simple setup, accept any non-empty password
    if (username !== USERNAME || !password) {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Portfolio Admin"' });
        res.end('Unauthorized');
        return;
    }
    
    if (req.method === 'POST' && req.url === '/admin/save') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { project, content } = JSON.parse(body);
                const filePath = path.join(PORTFOLIO_ROOT, 'content', 'projects', project, '_index.md');
                fs.writeFileSync(filePath, content);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: e.message }));
            }
        });
    } else if (req.method === 'POST' && req.url.startsWith('/admin/new-project')) {
        const url = new URL(req.url, `http://localhost:${PORT}`);
        const name = url.searchParams.get('name');
        if (name) {
            const projectPath = path.join(PORTFOLIO_ROOT, 'content', 'projects', name);
            fs.mkdirSync(projectPath, { recursive: true });
            const content = `---
title: "${name.replace(/-/g, ' ')}"
date: "${new Date().toISOString().split('T')[0]}"
type: projects
description: ""
tags: []
importance: 3
thumbnail: ""

content: []

year: ${new Date().getFullYear()}
tools: []
---

Description here...
`;
            fs.writeFileSync(path.join(projectPath, '_index.md'), content);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, name }));
        }
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Admin server running on http://localhost:${PORT}`);
});
