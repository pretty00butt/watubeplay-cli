watubeplay-cli
==============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/watubeplay-cli.svg)](https://npmjs.org/package/watubeplay-cli)
[![Downloads/week](https://img.shields.io/npm/dw/watubeplay-cli.svg)](https://npmjs.org/package/watubeplay-cli)
[![License](https://img.shields.io/npm/l/watubeplay-cli.svg)](https://github.com/the6thm0nth/watubeplay-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g watubeplay-cli
$ watube COMMAND
running command...
$ watube (-v|--version|version)
watubeplay-cli/0.0.1 darwin-x64 node-v8.15.0
$ watube --help [COMMAND]
USAGE
  $ watube COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`watube help [COMMAND]`](#watube-help-command)
* [`watube pause`](#watube-pause)
* [`watube play`](#watube-play)
* [`watube resume`](#watube-resume)
* [`watube stop`](#watube-stop)
* [`watube volume`](#watube-volume)

## `watube help [COMMAND]`

display help for watube

```
USAGE
  $ watube help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `watube pause`

Pause Current Video

```
USAGE
  $ watube pause

DESCRIPTION
  😘  >> How to Use <<
     $ watube pause
```

_See code: [src/commands/pause.js](https://github.com/the6thm0nth/watubeplay-cli/blob/v0.0.1/src/commands/pause.js)_

## `watube play`

Play Youtube Video with ID

```
USAGE
  $ watube play

OPTIONS
  -v, --value=value  Youtube ID

DESCRIPTION
  😘  >> How to Use <<
     $ watube play -v 5vheNbQlsyU
```

_See code: [src/commands/play.js](https://github.com/the6thm0nth/watubeplay-cli/blob/v0.0.1/src/commands/play.js)_

## `watube resume`

Pause Current Video

```
USAGE
  $ watube resume

DESCRIPTION
  😘  >> How to Use <<
     $ watube pause
```

_See code: [src/commands/resume.js](https://github.com/the6thm0nth/watubeplay-cli/blob/v0.0.1/src/commands/resume.js)_

## `watube stop`

Stop Current Video

```
USAGE
  $ watube stop

DESCRIPTION
  😘  >> How to Use <<
     $ watube stop
```

_See code: [src/commands/stop.js](https://github.com/the6thm0nth/watubeplay-cli/blob/v0.0.1/src/commands/stop.js)_

## `watube volume`

Set Volume

```
USAGE
  $ watube volume

OPTIONS
  -v, --value=value  Volume Value

DESCRIPTION
  😘  >> How to Use <<
     $ watube volume -v 0
     $ watube volume -v 50
     $ watube volume -v 100
```

_See code: [src/commands/volume.js](https://github.com/the6thm0nth/watubeplay-cli/blob/v0.0.1/src/commands/volume.js)_
<!-- commandsstop -->
