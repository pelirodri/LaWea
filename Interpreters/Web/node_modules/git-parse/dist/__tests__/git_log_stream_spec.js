import logStream from '../git_log_stream';

describe('git log stream', () => {
  it('should throw an error if the directory does not exist', done => {
    return logStream('/fake_nonexistent_directory').addErrorHandler(() =>
      done()
    );
  });
});
