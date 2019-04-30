import React, { Component } from 'react'
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import config from './config'

import UsersTable from './Components/UsersTable'
import UsersSelect from './Components/UsersSelect'
import UserForm from './Components/UserForm'

import CompaniesTable from './Components/CompaniesTable'
import CompaniesSelect from './Components/CompaniesSelect'
import CompanyDetail from './Components/CompanyDetail'

import FeaturesSelect from './Components/FeatureSelect'

import './App.css';
import Authorize from './Components/Authorize';
import sessionService from './Service/sessionService'

class App extends Component {

  state = {
    sessionId: undefined,
    session: undefined,
    currentUserId: undefined,
    currentFeatureId: undefined,
    currentCompanyId: undefined,
  }

  constructor(props) {
    super(props)
    let sessionId = sessionService.extractSessionId(props)
    this.state = { sessionId: sessionId }
  }

  setSession = (session) => {
    this.setState(() => { return { session } })
  }

  setCurrentUserId = (currentUserId) => {
    this.setState(() => { return { currentUserId } })
  }

  setCurrentCompanyId = (currentCompanyId) => {
    this.setState(() => { return { currentCompanyId } })
  }

  setCurrentFeatureId = (currentFeatureId) => {
    this.setState(() => { return { currentFeatureId } })
  }

  cache = new InMemoryCache()
  link = new HttpLink({ uri: config.apiGatewayAdmin.URL })
  client = new ApolloClient({
    cache: this.cache,
    link: this.link
  })

  render() {
    // if (this.state.session) {
      return (
        <ApolloProvider client={this.client}>
          <ApolloProviderHooks client={this.client}>
            {/* <FeaturesSelect
              currentUserId={this.state.currentUserId}
              currentFeatureId={this.state.currentFeatureId}
              setCurrentFeatureId={this.setCurrentFeatureId}
            />
            <CompaniesTable
              currentCompanyId={this.state.currentCompanyId}
              setCurrentCompanyId={this.setCurrentCompanyId}
            /> */}
            {/* <CompaniesSelect
              currentCompanyId={this.state.currentCompanyId}
              setCurrentCompanyId={this.setCurrentCompanyId}
            /> */}
            <CompanyDetail
              currentCompanyId={this.state.currentCompanyId}
              setCurrentCompanyId={this.setCurrentCompanyId}
            />
            {/* <UsersTable
              currentUserId={this.state.currentUserId}
              setCurrentUserId={this.setCurrentUserId}
            />
            <UsersSelect
              currentUserId={this.state.currentUserId}
              setCurrentUserId={this.setCurrentUserId}
            />
            <UserForm
              currentUserId={this.state.currentUserId}
              setCurrentUserId={this.setCurrentUserId}
            /> */}
          </ApolloProviderHooks>
        </ApolloProvider>
      )
    // } else {
    //   return (
    //     <Authorize
    //       sessionId={this.state.sessionId}
    //       setSession={this.setSession}
    //     />
    //   )
    // }
  }
}

export default App;
