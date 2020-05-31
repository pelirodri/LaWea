# goals

## run existing codemods on vue sfc

- ability to put new script in place of old script

## provide vue-specific transform abilities

- manipulate script tag itself
- access script content
- replace script content

- manipulate template tag itself
- access template content
- replace template content

- manipulate style tag itself
- access style content
- replace style content

- reorder vue blocks

## transform() api

transform(fileInfo, api, options) {

}

returns new js code (aka new script)
https://github.com/facebook/jscodeshift#return-value

fileInfo:

```js
{
  path: '...',
  source: '...'
}
```

api:

```js
{
  stats: object
  jscodeshift: function
}
```

## Idea 1

Add to fileInfo:

- script (content of script)
- template (content of template)
- style (content of style)

Those are getters and setters

If any of those are set, rebuild sfc and return it to jscodeshift

If script is set or transform returns value and it's the same as old value, return same string to jscodeshift

If none are set but transform returns value, return that to jscodeshift

If none of that happens, return nothing to jscodeshift

## Extra idea

Also add to fileInfo:

templateBlock
scriptBlock
styleBlock

you can use those to change attributes
can also change ordering somehow

are these the actual blocks from compiler?
