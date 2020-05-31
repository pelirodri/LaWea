import parseCommit from '../parse_commit';

describe('parseCommit', () => {
  const mockCommitData = [
    'e0ee5254a1fc156dd8a3d3f4e8c9322e1fc0793a',
    'Morgan Packard',
    'mpackard@wayfair.com',
    'Mon, 22 Jan 2018 16:57:54 -0500',
    'GITPARSEMESSAGE',
    'add flow',
    'GITPARSEFILES',
    'M	README.md',
    'R078	packages/git-parse/__tests__/index.spec.js	packages/distillery/src/__tests__/index.spec.js',
    'A	packages/distillery/src/index.js',
    'D	packages/git-parse/index.js'
  ];

  it('returns a parsed git commit', () => {
    expect(parseCommit(mockCommitData)).toMatchSnapshot();
  });
});
