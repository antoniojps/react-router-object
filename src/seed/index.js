export const rootObjs = {
  normal: {
    index: {
      key: 'index',
      exact: true
    },
    docs: {
      index: {
        key: 'docs',
        exact: true
      },
      elements: {
        key: 'docsElements',
        exact: true
      }
    },
    pages: {
      ':id': {
        key: 'pages'
      }
    }
  }
}
