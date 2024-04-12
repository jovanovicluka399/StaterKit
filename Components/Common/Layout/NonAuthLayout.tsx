import { useProfile } from '@common/UserHooks';
import { useRouter } from 'next/router';
import React, { useEffect, useCallback } from 'react';
import { ReactNode } from 'react'

interface NonAuthLayoutProps {
  children: ReactNode
}

const NonAuthLayout = ({ children }: NonAuthLayoutProps) => {
  const { userProfile, loading } = useProfile();
  const router = useRouter();

  const redirectLoginFunction = useCallback(() => {
    if (typeof window !== 'undefined') { // Check if we're on the client-side
      if (!userProfile) {
        router.push('/auth/login');
      }
    }
  }, [userProfile, router]);

  useEffect(() => {
    redirectLoginFunction();
  }, [redirectLoginFunction])
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default NonAuthLayout;