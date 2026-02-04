import useForm from '../hooks/formHooks';
import type {RegisterCredentials} from '../types/LocalTypes';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const {postRegister} = useUser();

  const initValues: RegisterCredentials = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    // console.log(inputs);
    // eslint-disable-next-line react-hooks/immutability
    const result = await postRegister(inputs as RegisterCredentials);
    console.log('doRegister result', result);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
