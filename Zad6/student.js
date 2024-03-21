function getStudentFullName(id) {
    if (id === 0) {
        return "Bartosz Śniadach";
    } else if (id === 1) {
        return "Kacper Nowaki 111222";
    } else if (id === 2) {
        return "Maja Kowalska 222333";
    } else {
        return "Michał Wiśniewski 333444";
    }
}

function getStudentId(id) {
    if (id === 0) {
        return "46163";
    } else if (id === 1) {
        return "111222";
    } else if (id === 2) {
        return "222333";
    } else {
        return "333444";
    }
}



module.exports= {
    getStudentFullName,
    getStudentId,
};