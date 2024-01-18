import { Route, Switch } from 'react-router-dom';

import AllMetetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMetetupsPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
