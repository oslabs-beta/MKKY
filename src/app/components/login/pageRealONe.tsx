'use client'
import {signIn, signOut, useSession} from 'next-auth/react';


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
                
                <button onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
                    SignIn
                </button>
            </div>
            )
};