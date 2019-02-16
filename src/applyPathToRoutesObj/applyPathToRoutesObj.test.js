import applyPathToRoutesObj from './applyPathToRoutesObj'
import { rootObjs } from './../seed'

describe('applyPathToRoutesObj', () => {
  it('should applyPathToRoutesObj', () => {
    const withPaths = applyPathToRoutesObj(rootObjs.normal)

    expect(withPaths.index.path).toBe('/')
    expect(withPaths.docs.index.path).toBe('/docs')
    expect(withPaths.docs.elements.path).toBe('/docs/elements')
    expect(withPaths.pages[':id'].path).toBe('/pages/:id')
  })
})
