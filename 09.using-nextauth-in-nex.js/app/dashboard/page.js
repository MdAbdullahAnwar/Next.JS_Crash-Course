"use client";
import {useSession, signIn, signOut} from "next-auth/react";

export default function Dashboard() {

    const {data: session, status} = useSession();

    if(status==="loading"){
        return <p>Loading...</p>;
    }

    if(session){
        return(
            <div>
                <p>The user is logged in</p>
                <p>Signed in as : {session.user.name || session.user.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }

    return(
        <div>
            <p>Not Signed in</p>
            <button onClick={() => signIn("github")}>Sign in</button>
        </div>
    )
}

