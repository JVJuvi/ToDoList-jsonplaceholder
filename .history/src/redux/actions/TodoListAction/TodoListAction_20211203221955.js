


export const GetToDoListAction = () => {
    return async(dispatch) => {
        await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((res) => res.json())
        .then((data) => dispatch({
            
        }))
    }
}