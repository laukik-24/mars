// pages/dashboard.tsx
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import supabase from '../../../utils/client';

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Or a redirect message while checking
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: { session } } = await supabase.auth.getSession(context.req);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Return empty props
  };
};

export default Dashboard;
