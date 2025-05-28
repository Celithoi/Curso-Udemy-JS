/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/modules/rootReducer';

interface MyRouteProps {
  component: React.ElementType;
  isClosed?: boolean;
  [key: string]: any;
}

export default function MyRoute({
  component: Component,
  isClosed,
  ...rest
}: MyRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Component {...rest} />;
}
