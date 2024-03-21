const http=require("http");
const student = require('./student');

const PORT=3000;

function requestListener(request, response){
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentID()}`);
};


const server=http.createServer(requestListener);

server.listen(PORT);
