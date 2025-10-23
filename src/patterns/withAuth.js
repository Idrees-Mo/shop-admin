import { useAuth } from "../contexts/AuthContext";

export const withAuth = (Component) => {
  return (props) => {
    const { user, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <div>Please log in to access this page.</div>;
    }

    return <Component {...props} />;
  };
};
