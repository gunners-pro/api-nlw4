import express from 'express';

const app = express()

app.get('/users', (request, response) => {
    return response.send('Olá mundo !')
})

app.listen(process.env.PORT || 3333, () => console.log('Server in running...'))