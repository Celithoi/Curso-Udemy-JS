module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // As configurações que você quer usar
  extends: [
    'eslint:recommended', // Regras básicas do ESLint
    'plugin:@typescript-eslint/eslint-recommended', // Regras para TypeScript
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Regras para React
    'plugin:prettier/recommended', // Integra o Prettier, deve ser o ÚLTIMO
  ],
  // O "cérebro" que vai entender o código
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // <-- A correção para o erro do 'const'
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Para entender a sintaxe do React (JSX)
    },
  },
  // Plugins que adicionam mais regras
  plugins: ['@typescript-eslint', 'react'],
  // Suas regras personalizadas
  rules: {
    // Desliga a necessidade de importar React em todos os arquivos (React 17+)
    'react/react-in-jsx-scope': 'off',
    // Desliga a verificação de prop-types, pois o TypeScript já faz isso
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      // Detecta automaticamente a versão do React instalada
      version: 'detect',
    },
  },
};
