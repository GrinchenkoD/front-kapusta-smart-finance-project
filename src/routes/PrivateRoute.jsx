import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  redirectTo = '/homepage',
  ...routeProps
}) {
    //! Написать селектор-флаг isAuthentificated
// TODO  const isAuthentificated = useSelector(authSelectors.isAuthentificated);
    
  const isAuthentificated = true;
  return (
    <>
      {isAuthentificated ? (
        <Route {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
}
