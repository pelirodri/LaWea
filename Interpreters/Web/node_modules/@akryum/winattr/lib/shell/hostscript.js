// Thanks to Gabriel Llamas for his solution:
// http://stackoverflow.com/questions/13440589/retrieve-file-attributes-from-windows-cmd

/* eslint no-var: 'off' */

var error = ''
var fs = new ActiveXObject('Scripting.FileSystemObject')
var name = WScript.Arguments.item(0)
var file, json

try {
  file = fs.GetFile(name)
} catch (e) {
  try {
    file = fs.GetFolder(name)
  } catch (e) {
    error = e.message
  }
}

if (error === '') {
  json = '{'
  json += '"readonly":' + !!(file.attributes & 1) + ','
  json += '"hidden":' + !!(file.attributes & 2) + ','
  json += '"system":' + !!(file.attributes & 4) + ','
  json += '"directory":' + !!(file.attributes & 16) + ','
  json += '"archive":' + !!(file.attributes & 32) + ','
  json += '"symlink":' + !!(file.attributes & 1024) // Reparse point (symbolic link)
  json += '}'
} else {
  json = '{"error":"' + error + '"}'
}

WScript.echo(json)
