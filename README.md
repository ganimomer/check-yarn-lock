# Enforce committing yarn.lock when changing dependencies
This executable is meant to be executed as a git pre-commit hook for [npm](https://www.npmjs.com/) projects using [yarn](https://yarnpkg.com/en/).

Whenever changes are made to one of `package.json`'s `dependency` properties, if no change is staged in `yarn.lock` as well, this program emits an error message.
### Usage

To use a commit hook, add an execution `check-yarn-lock` to your repository's [pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
This can be made easier using [`husky`](https://github.com/typicode/husky).

### Caveats

The current implementation of this module is meant to cover all common cases, but it is not 100% fool-proof as it does not check internal `yarn.lock` structure:
- If there are _both staged **and** unstaged_ changes to `package.json`, the check might pass when it should fail.
- If `package.json` was changed and __did not trigger changes to `yarn.lock`__ (e.g. removing a caret from the latest available version of a dependency), this check might fail when it should pass. 
  - In this case, you can run `git commit --no-verify` to commit anyway.