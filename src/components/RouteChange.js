import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as actions from '../context/actions';
import { useGlobalStore } from '../context/GlobalStore';

let prev = '';

function RouteChange({ children }) {
  const { dispatch } = useGlobalStore();

  const history = useHistory();

  useEffect(() => {
    history.listen(location => {
      if (location.pathname !== prev) {
        prev = location.pathname;
        dispatch({ type: actions.LOCATION_CHANGE, payload: location });
      }
    });
  }, [dispatch, history]);

  return children;
}

export default RouteChange;
