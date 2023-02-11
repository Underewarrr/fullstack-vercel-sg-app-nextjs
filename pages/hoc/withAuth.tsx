import axios from 'axios';
import Router from 'next/router';
import { useEffect, useState } from 'react';


const withAuth = (WrappedComponent) => {
const WithAuth = (props) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const result = window.localStorage.getItem('email');
       
        const getUserInfo = async () => {
            try {
                const { data } = await axios.post(
                  "/api/user/get",
                  { result },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                setUser(data)          
                console.log(data.message)
                return data;
              } catch (error) {
                console.log(error)
              }
        }
        getUserInfo()
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        Router.push('/user/login');
        return null;
    }

    return <WrappedComponent {...props} />;
};

WithAuth.getInitialProps = async (ctx) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : {};

       return { ...wrappedComponentInitialProps };
    };

   return WithAuth;
};

export default withAuth;