import withAuth from '../hoc/withAuth';

const ProtectedRoute = (props) => {
  return <div>This is a protected route</div>;
};

export default withAuth(ProtectedRoute);