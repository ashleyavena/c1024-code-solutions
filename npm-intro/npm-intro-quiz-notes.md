# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM? started as the "node package manager"
  the world's largest software registry consisting of: the website, CLI, and the registry
  website: discover packages, set up profiles, etc
  CLI: runs from a terminal
  registry: large public database of JS software and meta-info about packages preople are sharing

- What is a package?
  bits of reusable codes
  a directory with one or more files in it that has a package.json

- What are some other popular package managers?
  Yarn: fast, secure, and reliable for JS we <3 her!
  Pip: python
  RubyGems: for Ruby
  Composer: for PHP
  Homebrew: for macOS and Linux software

- How can you create a `package.json` with `npm`?
  run 'npm init' command launches a wizard to help set up your package.json
  or 'npm init -y'

- What is a dependency and how do you add one to a package?
  an external package/library your project needs to function, you can add by using 'npm install <package-name>'

- What happens when you add a dependency to a package with `npm`?
  installation, update, lockfile
  installation: dependency is downloaded into the node_modules directory
  updateL package.json is updated to include dependencies
  lockfile: the json records versions of installed dependencies

- What is a devDependency and how do you add one to a package?

  its a package required only during development (testing tools, linters) you can add by 'npm install
  <package-name> --save-dev'

- How do you define and run `npm` scripts? Why are these useful?
  able to define in the scripts sections of package.json, useful for automation, cross-platform compatibility, simplification, collaboration

npm client: used to publish code to the registry, or install code from registry
NPM has become sluggish and inefficient tho, we like Yarn

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
