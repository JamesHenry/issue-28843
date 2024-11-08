# Issue28843

NOTE: Currently this does not reproduce the issue.

---

Build the library:

```sh
npx nx build foo
```

Then evaluate publishing via either:

CLI:

```sh
npx nx release publish --dry-run
```

Programmatic API:

```sh
node publish.js
```
