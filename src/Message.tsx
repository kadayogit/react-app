
// PacalCase for the function name
function Message() {

    const name = "Guled";
    const location = "Hargeisa";
    if(name){
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello {location}</h1>
}

export default Message;