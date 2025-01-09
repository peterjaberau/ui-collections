module.exports = {
    ignores: ['node_modules', 'dist', 'build'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'tailwindcss'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:tailwindcss/recommended'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-empty': 'off',
    },
};
