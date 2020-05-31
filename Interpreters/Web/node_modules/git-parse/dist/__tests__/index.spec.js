import {gitToJs} from '../index';
import path from 'path';
import {renameSync} from 'fs';

describe('index', () => {
  const pathToTestRepo = path.join(__dirname, 'git_repo');
  const gitRepoToCommit = path.join(pathToTestRepo, 'dot_git');
  const realDotGitDir = path.join(pathToTestRepo, '.git');

  it('should reject the promise if the directory is not the root of a git repo', done => {
    return gitToJs(pathToTestRepo).catch(() => done());
  });

  it('should reject the promise if the directory does not exist', done => {
    return gitToJs(
      '/some_crazy_directory_that_does_not_exist/asdfasdfasdfasdfxxxx'
    ).catch(() => {
      done();
    });
  });

  xit('VISUAL GREP TEST ONLY, ENABLE FOR DEBUGGING PURPOSES ONLY', done => {
    const repoPath = '.';

    gitToJs(repoPath).then(data => {
      console.log(data);
      expect(true).toBe(true);
      done();
    });
  });

  describe('tests with a real repository', () => {
    beforeAll(() => {
      renameSync(gitRepoToCommit, realDotGitDir);
    });

    it('reads a git repo successfully', async () => {
      const parsedRepo = await gitToJs(pathToTestRepo);
      expect(parsedRepo).toMatchSnapshot();
    });

    afterAll(() => {
      renameSync(realDotGitDir, gitRepoToCommit);
    });
  });
});
