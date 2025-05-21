/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// Definindo os tipos para as props do seu componente
interface MyRouteProps {
  component: React.ElementType; // Tipo para um componente React
  isClosed?: boolean; // Opcional: true se a rota requer login
  // ... quaisquer outras props que o Componente possa esperar
  [key: string]: any; // Para capturar outras props com ...rest
}

export default function MyRoute({
  component: Component,
  isClosed,
  ...rest
}: MyRouteProps) {
  const isLoggedIn = false; // Apenas para fins de demonstração, substitua pela sua lógica de autenticação real
  const location = useLocation(); // Hook para obter a localização atual

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Component {...rest} />;
}
