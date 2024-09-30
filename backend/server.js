require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectToDB = require('./config/connectToDb')
connectToDb()

const notesController = require('./controllers/notesController')


app.use(express.json())
// ------------------------[Routes (HTTP methods)=> GET POST PUT PATCH DELETE]
app.get('/notes',notesController.fetchNotes)
// -->Retrieve all notes in DB
app.get('/notes',notesController.fetchNote)
// -->Retrieve Specific note in DB
app.post('/notes',notesController.createNote)
// -->Add a Note to DB
app.put('/notes/:id',notesController.updateNote)
// -->Update a Note in DB
app.patch('/notes/:id',notesController.updateNote)
// -->Delete a Note from DB
app.delete('/notes/:id',notesController.deleteNote)


app.listen(PORT,()=>{
    console.log('ServerConnected: ${PORT}')
})