let studentData = [
    {id:1, name:"John Doe"},
    {id:2, name:"Jane Smith"},
    {id:3, name:"Alice Johnson"}
]

export function GET(){
    return Response.json(studentData);    
}

export async function POST(request){
    let data = await request.json();
    let newUser = {
        id: studentData.length + 1,
        name: data.name
    }
    studentData.push(newUser);
    return Response.json(newUser, {status: 201});
}