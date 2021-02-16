
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

let db = lowdb(new FileSync('db.json'));

db.defaults({ todos: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 4000

app.get("/todos", (req, res) => {
  const data = db.get("todos").value()
  return res.json(data)
})

app.post("/todos", (req, res) => {
  const todos = req.body
  db.set("todos", todos).write()
  res.json({ success: true })
})

app.listen(port, () =>
  console.log(
    `Backend running on http://localhost:${port}!`
  )
)