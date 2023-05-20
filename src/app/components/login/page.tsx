import { NextPage } from 'next';

interface Props{}

const Login: NextPage = (props): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>LOGIN</h1>
        <input type="email" placeholder='john@email.com' />
        <input type="password" placeholder='**********' />
        <input type="submit" value="Login" />

      </form>
    </div>
  )
}

export default Login