const childProcess = require('child_process')
const path = require('path')

// For attrib command
const params =
{
  archive: 'a',
  hidden: 'h',
  readonly: 'r',
  system: 's',
}

function getArgs (file) {
  return [
    path.join(__dirname, 'hostscript.js'),
    file,
    '//nologo',
    '//E:jscript',
  ]
}

function getParseResult (result) {
  let json
  let error = null

  result.stdout = result.stdout.trim()

  if (result.stdout.length <= 0) {
    error = new Error('unknown error')
  } else {
    json = JSON.parse(result.stdout)

    if (json.error !== undefined) {
      error = new Error(json.error)
      json = undefined
    }
  }

  return { error: error, attrs: json }
}

function setArgs (file, attrs) {
  const args = []

  for (let i in attrs) {
    if (attrs.hasOwnProperty(i) === true && params.hasOwnProperty(i) === true) {
      args.push((attrs[i] === true ? '+' : '-') + params[i])
    }
  }

  args.push(file)

  return args
}

function setParseResult (result) {
  // `result.stdout` is empty when successful
  if (result.stdout.length <= 0) {
    return null
  } else {
    return new Error(result.stdout)
  }
}

function shell (command, args, callback) {
  let instance = childProcess.spawn(command, args)

  let stderr = ''
  let stdout = ''

  instance.stderr.on('data', function (data) {
    stderr += data.toString()
  })

  instance.stdout.on('data', function (data) {
    stdout += data.toString()
  })

  instance.on('exit', function (status) {
    this.removeAllListeners()

    // Pass an Object so that it's similar to spawnSync()
    // eslint-disable-next-line standard/no-callback-literal
    callback({ status: status, stdout: stdout, stderr: stderr })
  })
}

function shellSync (command, args) {
  let result = childProcess.spawnSync(command, args, {encoding: 'utf8'})

  // Consistent with shell()
  if (result.stderr === null) result.stderr = ''
  if (result.stdout === null) result.stdout = ''

  return result
}

// ::: PUBLIC FUNCTIONS

function get (file, callback) {
  shell('cscript', getArgs(file), function (result) {
    result = getParseResult(result)

    callback(result.error, result.attrs)
  })
}

function getSync (file) {
  let result = shellSync('cscript', getArgs(file))
  result = getParseResult(result)

  if (result.error !== null) {
    throw result.error
  }

  return result.attrs
}

function set (file, attrs, callback) {
  shell('attrib', setArgs(file, attrs), function (result) {
    callback(setParseResult(result))
  })
}

function setSync (file, attrs, callback) {
  let result = shellSync('attrib', setArgs(file, attrs))
  result = setParseResult(result)

  if (result !== null) {
    throw result
  }
}

module.exports = {
  get,
  getSync,
  set,
  setSync,
}
