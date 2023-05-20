import { NextPage } from 'next';

interface Props{}

const Signup: NextPage = (props): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>SIGNUP</h1>
        <input type="email" placeholder='john@email.com' />
        <input type="password" placeholder='**********' />
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup