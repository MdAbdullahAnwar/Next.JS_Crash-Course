export default function DynamicRoute({params}){
    const { dynamicroute } = params;
    return(
        <h1>This is the {dynamicroute} Route</h1>
    );
}