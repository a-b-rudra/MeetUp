import AllMeetUps from './pages/AllMeetUps'
import NewMeetUps from './pages/NewMeetUps'
import Favourites from './pages/Favourites'
import { Route, Switch} from 'react-router-dom'
import Layout from './pages/layout/Layout'

function App() {
    return (
      <Layout >
          <Switch>
        <Route path='/' exact><AllMeetUps /></Route>
        <Route path='/new-meetups'><NewMeetUps /></Route>
        <Route path='/favourites'><Favourites /></Route>
        </Switch>
      </Layout>
        )
  }

  export default App