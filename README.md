# Enforce committing yarn.lock when changing dependencies
This executable is meant to be executed as a git pre-commit hook for [npm](https://www.npmjs.com/) projects using [yarn](https://yarnpkg.com/en/).

Whenever changes are made to one of `package.json`'s `dependency` properties, if no change is staged in `yarn.lock` as well, this program emits an error message.
### Usage

To use a commit hook, add an execution `check-yarn-lock` to your repository's [pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
This can be made easier using [`husky`](https://github.com/typicode/husky).