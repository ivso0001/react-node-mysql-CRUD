import Head from 'next/head'
import React, { Component } from 'react'
import UserList from '../src/components/UserList'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Head>
          <title>Create Next App</title>
        </Head>
        <main>
          <div className='d-flex align-items-center mt-3 mb-2'>
            <h1 className='title'>
              Branch Connect Client
            </h1>
          </div>
          <UserList />
        </main>
      </div>
    )
  }
}

export default App