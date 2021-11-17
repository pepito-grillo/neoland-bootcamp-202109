const express = require('express')
const { readFile } = require('fs')

const server = express()

const mimeTypes = {
    html: 'text/html',
    css: 'text/css',
    webp: 'image/webp',
    png: 'image/png',
    jpg: 'image/jpeg'
}

server.get('*', function (req, res) {
    let { path } = req

    if (path === '/')
        path += 'index.html'

    readFile('public' + path, 'utf8', (error, content) => {
        if (error) return res.status(404).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,  initial-scale=1.0">
            <title>404 Not Found</title>
        </head>
        <body>
            <h1>404 Not Found</h1>
        </body>
        </html>`)

        const ext = path.substring(path.indexOf('.') + 1)

        const mimeType = mimeTypes[ext]

        res.setHeader('Content-type', mimeType)

        res.send(content)
    })
})

server.listen(8000)