module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ], 
    'object-curly-spacing': [ 'error', 'always' ], 
    'array-bracket-spacing': [ 'error', 'always' ], 
  }
};
  