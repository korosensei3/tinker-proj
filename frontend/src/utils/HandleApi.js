import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios.get(baseUrl).then(({data}) => {
        console.log('data --- > ', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoID, text, setToDo, setText, setisUpdating) => {

    axios
    .patch(`${baseUrl}/update`, {_id : toDoID, text})
    .then((data) => {
        setText("")
        setisUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}   


const deleteToDo = (toDoID, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id: toDoID })
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

export {getAllToDo, addToDo, updateToDo, deleteToDo}