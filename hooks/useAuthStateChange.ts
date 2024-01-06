'use client';

import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app_firebase } from '@/firebase';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';

const useAuthStateChange = () => {
  const auth = getAuth(app_firebase);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User present
        dispatch(setCurrentUser(currentUser));
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, dispatch]);
};

export default useAuthStateChange;
