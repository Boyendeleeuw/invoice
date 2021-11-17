module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-var': 'error',
        'quotes': [
            'error', 'single'
        ],
        'space-before-function-paren': [
            'error', {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'never'
            }
        ],
        'object-property-newline': 'error',
        'indent': [
            'error', 4
        ],
        'object-curly-newline': [
            'error', {
                'ObjectExpression': 'always',
                'ObjectPattern': {
                    'multiline': true
                },
                'ImportDeclaration': 'never',
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 2
                },
            }
        ],
        'no-trailing-spaces': 'error',
        'semi': [
            'error', 'never'
        ],
        'space-before-blocks': 'error',
        'space-in-parens': [
            'error', 'never'
        ],
        'object-curly-spacing': [
            'error', 'always'
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 1
            }
        ],
        'padded-blocks': [
            'error', 'never'
        ],
        'max-lines-per-function': [
            'error', {
                'max': 100,
                'skipBlankLines': true
            }
        ],
        'array-bracket-newline': [
            'error', {
                'multiline': true,
                'minItems': 2
            }
        ],
        'no-multi-spaces': 'error',
        'eqeqeq': [
            'error', 'always'
        ]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
