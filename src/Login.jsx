
import './App.css'

function Login() {
  const usuario = "Douglas"

  return (
    <>
      <body id='Login'>
        <form>

          <h1 className='loginH1'>Faça seu Login {usuario}!</h1>

          <label>Email: </label>
          <input type="email" name='email' id='email' required />

          <label>Senha: </label>
          <input type="password" name='senha' id='senha' required />

          <button type="button">Entrar</button>

          <a href="Cadastro.jsx">Não possui conta? Faça seu cadastro</a>

        </form>
      </body>
    </>
  )
}

export default Login