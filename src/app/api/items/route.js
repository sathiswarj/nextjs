// export async function GET(){
//     return new Response( "TEST")
// } 

// export async function GET(){
//     return Response.json(
//         [
//             {title:"Todo"},
//             {title:"Todo 1"}
//         ]
//     )
// } 

//Query parameter
// Example : type: mobile
export async function GET(req){
   const type = req.nextUrl.searchParams.get(("type"))
   console.log("Type is : ",type)
    return Response.json(
        [
            {title:"Todo"},
            {title:"Todo 1"}
        ]
    )
} 


// export async function POST(){
//     return Response.json({message : "Post success"})
// } 


export async function POST(req){
    const body = await req.json()
    console.log("Body is :",body)
    return Response.json({message : "Post success"})
} 