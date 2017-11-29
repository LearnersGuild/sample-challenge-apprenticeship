import {expect} from 'chai'
import '../env'
import {signUp} from '../../src/actions'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp('Becky', 'b@b.com', 'pass')
      .then((insertedData) => {
        expect(insertedData.name).to.equal('Becky')
        expect(insertedData.email).to.equal('b@b.com')
        expect(insertedData.password).to.equal('pass')
      })
  })
})
