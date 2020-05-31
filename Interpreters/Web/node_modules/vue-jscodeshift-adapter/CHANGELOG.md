# Change Log

## [2.1.0] - 2020-05-15

- Update dependencies

## [2.0.3] - 2019-12-11

- Update dependencies

## [2.0.2] - 2019-05-23

- Update dependencies

## [2.0.1] - 2018-08-01

- Update dependencies

## [2.0.0] - 2018-03-25
### Breaking Change

The "modify any block of a vue component" use case is temporarily not supported until the API is figured out.

As of 2.0.0, this module can only

- transform js files
- transform the `<script>` block of vue files

## [1.2.0] - 2018-03-18
### Added

- Ability to run on directory containing js and vue files ([#4](https://github.com/psalaets/vue-jscodeshift-adapter/issues/4)).

## [1.1.1] - 2018-03-13
### Fixed

- No longer changing spacing inside `<template>` when `transform()` doesn't touch it ([#3](https://github.com/psalaets/vue-jscodeshift-adapter/issues/3))

## [1.1.0] - 2018-03-03
### Added

- Transform can change `<script>` content through `fileInfo.script.content`
- Transform can change `<template>` content through `fileInfo.template.content`
- Transform can change `<style>` content through `fileInfo.style.content`

## [1.0.0] - 2018-25-02
### Added

- Initial impl