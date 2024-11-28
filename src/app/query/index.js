export async function getPosts () {
    const response = await  fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await response.json()
    console.log(result)
}