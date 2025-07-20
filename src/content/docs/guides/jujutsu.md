---
title: Jujutsu GitHub Guide
description: A guide to using Jujutsu with GitHub
---

This is a guide to common Jujutsu workflows with GitHub. It assumes that you have already installed the GitHub cli (`gh`) and `git` and Jujutsu (`jj`).

## Create Repository and initial push

Start in the directory where you have the code you want to push to GitHub.

If you haven't already done so, create the local git repository:

```bash
git init .
```

Create the remote repository:

```bash
gh repo create --public --source=. --remote=origin **repo-name**
```

Create the Jujutsu repository:

```bash
jj git init --colocate
echo .jj/ >> .gitignore
```

If (and only if) you created the Jujutsu repository before setting the remote, you will have to tell Jujutsu about it.

```bash
jj git remote add origin git@github:**username**/**repo-name**.git
```

Now do whatever work you want to prepare for the initial push. You can make as many local commits as you want with this command:

```bash
jj ci # edit commit message and create a new changeset
```

When you are finally ready to share your changes, set the `main` bookmark (or whatever branch name you consider the main line of development):

```bash
jj bookmark set main -r @- 
```

`-r @-` is a reference to the penultimate changeset—the one you just edited the description for.
Finally, you can throw it over the wall:

```bash
jj git push --allow-new
```

Subsequent pushes use the same three commands, but drop `--allow-new`:

```bash
jj ci #edit commit message and create new changeset
jj bookmark set main -r @- 
jj git push
```

Again, you can repeat the first command as many times as you want between pushes.
This workflow is appropriate in the initial stages of project when you are making
frequent changes directly to the primary development branch.

## Feature Branches with Pull Requests

This is a different can of worms that I have not figured out yet.

## Further reading

- [Steve's Jujutsu Tutorial](https://steveklabnik.github.io/jujutsu-tutorial/introduction/introduction.html)
- [The Fine Manual](https://jj-vcs.github.io/jj/latest/github/)
- [Commit Messages](https://www.theodinproject.com/lessons/foundations-commit-messages)