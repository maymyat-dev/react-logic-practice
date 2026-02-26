import React from 'react'
import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  return (
    <div>
      <Input label="Email Address" type="email" />
      <Input label='Password' type='password' error="Password is too short" />
      
      <Button type='submit' className='w-full' variant='primary' size='md' isLoading={false}>Save</Button>
    </div>
  )
}

export default App