export default function CatchAllRoute({params}){
    const {catchallroute} = params;
    const nestedRoutes = JSON.stringify(catchallroute);
    return(
        <h1>This is the {nestedRoutes} Route</h1>
    )
}