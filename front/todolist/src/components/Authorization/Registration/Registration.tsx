import React from 'react'
import { FormWrapper, FormItem } from '../styled'

const Registration: React.FC = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      const data = JSON.stringify({
        username,
        password,
        email
      })

      await fetch('http://localhost:8000/api/users/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
      window.location.href = '/'
    },
    [username, password, email]
  )

  return (
    <FormWrapper>
      <form>
        <FormItem>
          <label htmlFor="username">Login</label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="e-mail"
            name="e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormItem>
        <button type="submit" onClick={onSubmit}>
          Register
        </button>
      </form>
    </FormWrapper>
  )
}

export default Registration