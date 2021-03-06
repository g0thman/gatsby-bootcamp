import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const indexPage = () => {
  return (
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Othman, full-stack developer from Algeria.</h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      </Layout>
  )

}

export default indexPage