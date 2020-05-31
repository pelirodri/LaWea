import parseGitLog from '../parse_git_log';
import fs from 'fs';
import {join} from 'path';

describe('parseGitLog', () => {
  const logMockPath = join(__dirname, './mock_git_log.txt');

  it('should return a promise that resolves to git data', done => {
    const stream = fs.createReadStream(logMockPath);

    parseGitLog(stream).then(data => {
      expect(data).toMatchSnapshot();
      done();
    });
  });
});
