/* eslint-env jest */

const axios = require('axios')
const { default: Client } = require('./Client')

jest.mock('axios')

describe('Client', () => {
  let client = new Client('')
  beforeEach(() => {
    client = new Client('')
  })
  it('should merge responses to single object', async () => {
    const components = [
      { id: 1, name: 'Component1' },
      { id: 2, name: 'Component2' },
      { id: 3, name: 'Component3' }
    ]
    axios.get
      .mockReturnValueOnce({ data: { total: 1 } })
      .mockReturnValueOnce({ data: { total: 2 } })
      .mockReturnValueOnce({ data: { total: 3 } })

    expect(await client.countIssuesByComponents(components)).toEqual({
      Component1: 1,
      Component2: 2,
      Component3: 3
    })
  })
})
