import checkoutCommit from '../checkout_commit';

describe('checkoutCommit', () => {
  it('throws an error when given an invalid hash', async () => {
    expect.assertions(1);
    try {
      await checkoutCommit('.', 'invalidHash');
    } catch (e) {
      expect(e).toEqual(expect.anything());
    }
  });
});
