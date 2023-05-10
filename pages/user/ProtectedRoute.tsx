import withAuth from '../hoc/withAuth';

const ProtectedRoute = (props) => {
  return <div>PROCTED ROUTE</div>;
};

export default withAuth(ProtectedRoute);