import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './HomePage'
import Projects from './ProjectsPage'
import Contact from './ContactPage'
import FullBlog from './BlogPage'
import Post from './PostPage'
import Admin from './DashboardPage'
import HigherEdit from './EditPostPageHigher'
import FormSubmissions from './FormSubmissions'

const Main = (props) => (
  <main className="readable mainarea">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/blog' component={FullBlog}/>
      <Route path='/post/:post' component={Post}/>
      <Route exact path='/admin' component={Admin}/>
      <Route path='/edit/:post' component={HigherEdit}/>
      <Route path='/admin/forms' component={FormSubmissions}/>
    </Switch>
  </main>
)

export default Main
