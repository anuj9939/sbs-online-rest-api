// const http = require("http")
const app=require('./app')
// const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.listen(port,console.log(`Server is running on ${port}`))