# command-line-basics-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a CLI?
  acronym for 'command-line interfaces'
  text-based interface where users interact w a computer by typing commands into a terminal/console, used for scripting, system management

- What is a GUI?
  acronym for 'graphical user interface'
  visual-based interface where users interact with a computer using graphical elements (windows, buttons, icons) user friendly

- Give at least one use case for each of the commands listed in this exercise.

  - `man`
    an interface to the online reference manuals
    opens manual/ help pages for specific commands
    use case: learning about command options

  - `cat`
    prints out/concatenates the content
    use case: quickly viewing the content of a file

  - `ls`
    list directory contents
    -a --all do not ignore entries starting with
    -F --classify append indicator to entries
    use case: checking the contents of a folder

  - `pwd`
    print name of current/working directory
    use case: confirming your location in the file

  - `echo`
    prints/display a line of text
    -n do not output the trailing newline

         -e     enable interpretation of backslash escapes

         -E     disable interpretation of backslash escapes (default)

    use case: debugging/creating environment variables

  - `touch`
    change file timestamps
    -a change only the access time

    -c, --no-create
    do not create any files

    -d, --date=STRING
    parse STRING and use it instead of current time

    use case: creating a placeholder file

  - `mkdir`
    make directories
    -p, --parents
    no error if existing, make parent directories as needed
    use case: organizing files by making folders

  - `mv`
    move (rename) files
    -b like --backup but does not accept an argument

    -f, --force
    do not prompt before overwriting
    use case: renaming a file

  - `rm`
    be careful! this command deletes things instantly w/o warning and cannot be undone!
    remove files or directories
    -f, --force
    ignore nonexistent files and arguments, never prompt

    -r, -R, --recursive
    remove directories and their contents recursively

    use case: deleting unnecessary files

  - `cp`
    copy files and directories
    -R, -r, --recursive
    copy directories recursively
    use case: backing up a file

- What are the three virtues of a great programmer?
  laziness, impatience, hubris

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
