'use client'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';


export default function Login(){
    const { data: session } = useSession();
    if(session){
    return(
        <div>
            <button onClick={() => signOut()} type="button" className='btn btn-primary'>
                SignOut
            </button>
        </div>
        )
    }
        return(
            <div>
                <button onClick={() => signIn(
                ) } type="button" className='btn btn-primary'>
                    SignIn
                </button>
            </div>
            )
};