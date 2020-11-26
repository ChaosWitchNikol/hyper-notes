import { Switch, Route } from 'react-router-dom';

import HomeView from 'views/Home';
import NoteView from 'views/Note';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact="/notes/:noteId">
        <NoteView />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
