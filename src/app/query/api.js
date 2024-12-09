export async function getPosts () {
    const response = await  fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await response.json()
    console.log(response)
    console.log(result)
}

export async function postFn (post) {
    const response = await  fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(post)
    })
   return response.json()
 }

 