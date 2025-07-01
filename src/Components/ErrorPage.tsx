import React from 'react'

const ErrorPage = ({error}:{error:Error}) => {
  return (
    <div>
      <h1>Areee Yaaar Error Aagya</h1>
      <h2>Error:{error.message}</h2>
    </div>
  )
}

export default ErrorPage
