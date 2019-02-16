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

import mapRoutesObjToArray from './mapRoutesObjToArray'
import applyPathToRoutesObj from './../applyPathToRoutesObj/applyPathToRoutesObj'
import { rootObjs } from './../seed'

describe('mapRoutesObjToArray', () => {
  it('should convert routes object to array', () => {
    const routesObj = applyPathToRoutesObj(rootObjs.normal)
    const routesArr = mapRoutesObjToArray(routesObj)
    expect(routesArr.length).toBe(4)
    expect(typeof routesArr[0]).toBe('object')
    expect(routesArr[0].path).toBe('/')
  })
})
