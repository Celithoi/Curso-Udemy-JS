// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"; // <-- Importar plugin react-hooks
import pluginPrettier from "eslint-plugin-prettier"; // <-- Importar plugin prettier
import configPrettier from "eslint-config-prettier"; // <-- Importar config prettier (desativa regras conflitantes)

export default tseslint.config(
    // tseslint.config é um helper conveniente, mas defineConfig([]) também funciona
    // 1. Configuração Base Recomendada do ESLint
    js.configs.recommended,

    // 2. Configurações Recomendadas para TypeScript (já inclui parser e plugin @typescript-eslint)
    ...tseslint.configs.recommended, // Usa spread operator se for um array

    // 3. Configuração Recomendada para React (plana)
    pluginReact.configs.flat.recommended,

    // 4. Configuração Específica do Projeto (para arquivos JS/TS/JSX/TSX)
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // <-- Corrigido para incluir subdiretórios
        languageOptions: {
            globals: {
                ...globals.browser, // Globais do navegador
                // ...globals.node, // Descomente se for um projeto Node.js
                // Adicione outros ambientes se necessário (ex: jest: true em um objeto separado para testes)
            },
            parserOptions: {
                ecmaFeatures: { jsx: true }, // Habilitar parsing de JSX
            },
        },
        plugins: {
            // O plugin "@typescript-eslint" já é incluído por tseslint.configs.recommended
            // O plugin "react" já é incluído por pluginReact.configs.flat.recommended
            "react-hooks": pluginReactHooks, // <-- Registrar plugin react-hooks
            prettier: pluginPrettier, // <-- Registrar plugin prettier
        },
        rules: {
            // Ativar regras do Prettier (mostra erros de formatação como erros do ESLint)
            "prettier/prettier": "error",

            // Ativar regras essenciais do React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn", // Ou "error" se preferir ser mais estrito

            // Exemplo: Desligar regra do React 17+ (JSX transform) se não for necessária
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",

            // Adicione outras regras personalizadas ou sobrescreva regras aqui
            // Ex: "@typescript-eslint/explicit-function-return-type": "warn"
        },
        settings: {
            react: {
                version: "detect", // Detectar automaticamente a versão do React
            },
        },
    },

    // 5. Configuração do Prettier (IMPORTANTE: Deve ser a ÚLTIMA)
    // Desativa regras do ESLint que conflitam com o Prettier
    configPrettier,
);
