/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

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
  const isLoggedIn = false;
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Component {...rest} />;
}
