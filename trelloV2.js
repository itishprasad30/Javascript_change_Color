let myTodos={
    day:'monday',
    metting:0,
    meetDone:0,
}
let addMetting=function (todo,meet=0){
    todo.meetings=todo.meetings + meet
}
addMetting(myTodos,2)
let meetDone=function(todo,meet=0){
    todo.meetDone=todo.meetDone-meet
}
let resetDay =function(todo){
    todo.meeting=0
    todo.meetDone=0
}
let getSummaryOfDay=function (todo){
    let meetLeft=todo.meetings + todo.meetDone
    return `YOU HAVE ${meetLeft} MEETINGS LEFT TODAY!!!!`

}
addMetting(myTodos,4)
addMetting(myTodos,2)
meetDone(myTodos,5)
console.log(getSummaryOfDay(myTodos));
