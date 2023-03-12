# Contributing to MyLibrary

Contributions are welcome! You can submit a pull request to fix a bug, implementing a feature, or even correcting simple documentation typos.

:::note
Packages are located within the `packages` folder of the repository. Each package has a `package.json` file with a `scripts` section that defines the commands available to you for common tasks such as build, test, lint, etc.
:::

### Submitting a pull request

Prior to submitting a pull request please follow the following steps.

1. Rebase your branch from `develop`.
2. Do your changes (bug fix, add feature, ...)
3. Review and adhere to the standards defined in the [style guide](./STYLE_GUIDE.md).
4. Add a changeset: `yarn changeset add`. If you are addressing multiple issues which are unrelated, consider either adding multiple change sets.
5. Finally, submit your pull request.

When submitting your pull request please make the title clear and concise, provide a description of the change, and specify any issues that will be closed.

When adding changes refer to:

- For bug fixes, add as `patch` change.
- For new features (new components, new hooks, ...) add as `minor` change.
- For breaking changes (try to avoid), add as `major` change.

You can refer multiple packages in one change.

### Release packages

> FOR THE MOMENT ALL FOLLOWING COMMANDS NEED TO BE EXECUTED IN THE DEVELOPMENT BRANCH.
> TODO: create pipeline to automate this.

1. Combine all change sets

```bash
# combine all change sets, update changelogs and inc versions
# based on the major, minor or patch changes
npx changeset version
```

2. Commit all change logs and package.json files

3. Build and publish all packages

```bash
# Build and publish all changed packages to github registry
pnpm release
```

4. Merge 'develop' into 'master'
