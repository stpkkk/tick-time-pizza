'use client';

import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app_firebase } from '@/firebase';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ExtendedUser } from '@/types';

const useAuthStateChange = (user: ExtendedUser | null) => {
  const auth = getAuth(app_firebase);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async () => {
      if (user) {
        // User present
        dispatch(setCurrentUser(user));
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, dispatch, user]);
};

export default useAuthStateChange;
