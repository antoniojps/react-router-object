/*
  converts routes obj into array of routes
  reserved key index for the parents index
  example:
    {
      index: {
        component: PageIndex,
        key: 'index',
        path: '/',
      },
      docs: {
        index: {
          component: PageDocsIndex,
          key: 'docs',
          path: '/docs',
        },
        elements: {
          component: PageDocsElements,
          key: 'docsElements',
          path: '/docs/elements'
        }
      }
    }
    get mapped into:
    [
      {
        path: '/',
        component: PageIndex,
        key: 'index'
      },
      {
        path: '/docs',
        component: PageDocsIndex,
        key: 'docs',
      },
      {
        path: '/docs/elements',
        component: PageDocsElements,
        key: 'docsElements',
      },
    ]
*/
const mapRoutesObjToArray = routesObj => {
  let result = []
  function iterate(obj, previous, value) {
    // eslint-disable-line consistent-return
    const keys = Object.keys(obj)
    if (keys.length > 0 && typeof obj === 'object') {
      return keys.forEach(key => {
        if (typeof obj[key] !== 'object') {
          return iterate(obj[key], [...previous], obj)
        }
        return iterate(obj[key], [...previous, key])
      })
    }
    const routeObj = { ...value }
    result = [...result, routeObj]
  }
  iterate(routesObj, [])

  function removeDuplicatesBy(keyName, array) {
    const mySet = new Set()
    const filteredArr = array.filter(obj => {
      const value = obj[keyName]
      const isNew = !mySet.has(value)
      if (isNew) mySet.add(value)
      return isNew
    })
    return filteredArr
  }

  const cleanedUpResult = removeDuplicatesBy('key', result)
  return cleanedUpResult
}

export default mapRoutesObjToArray
