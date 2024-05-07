'use client';

import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useLocalStorage } from './useLocalStorage';
import { app_firebase } from '@/firebase';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ExtendedUser } from '@/types';

export const useAuthStateChange = (user: ExtendedUser | null) => {
  const auth = getAuth(app_firebase);
  const dispatch = useAppDispatch();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async () => {
      if (user) {
        // User present
        dispatch(setCurrentUser(user));
        await setUserInLS(user);
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, user, dispatch, setUserInLS]);
};
