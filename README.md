<p align="center">
  <a href="https://www.monzo.com">
    <img alt="Monzo favicon" src="src/images/favicon.svg" width="60" />
  </a>
</p>
<h1 align="center">
    Personal Growth Framework at Applover
</h1>

Welcome to the PGF's repository 🎉.

This is where our PGF lives (literally - as this is the place where you can make changes to PGF's content and let it evolve over time).

**Got stuck? There's a glossary at the bottom of this readme!**

## Where am I?

Welcome to GitLab!

GitLab is an online service that we use to store our code - in this repository we store the code for our PGF as it is simply a web application. GitLab allows for easy file management (either from console or the web interface) as well as tracking the history of changes to the project (which is super useful if you would like to take a look when exactly particular change to PGF was made and by whom). GitLab also allows multiple people to be working simultaneously on even the same file.

The main reasons for keeping PGF in GitLab repository are:
- Both implementation and configuration is stored in a single place - whenever you want to add a feature to the application or modify PGFs content, you will do it within the same repository following the same scheme (described below).
- Every Applover member has a chance to conribute to PGF.
- Once the suggested changes are approved (by a team member or a PGF mainainer) they will automatically be published on the PGF website.

## How does this work?

This is the structure of our repo:
```
paths/
src/
CODEOWNERS
[a bunch of config files]
```

`src` contains our website files, `paths` contains our values/roles development paths files, and `CODEOWNERS` is the file that defines who owns or manages a framework, file or folder.
All other files are configuration, which you should totally ignore.

**The `paths` folder is what you want to pay attention to!**

This is where all of our development paths live. Head inside and you'll see files associated to the values we cherish at Applover and paths that you can follow in your career development.

Some of the paths might be grouped - they shall then be placed within a folder of the group name (like `core` group).

## What is the structure of a path file?

Files that end in `.md` are called Markdown files. We display these files on the site in the same way they are written, so you can put whatever you want (within reason) in these.

All of these files contain some YAML, which is a data format that is similar to a bullet point list. Some of this YAML data is compulsory, as it helps the site build.

Some files contain the compulsory YAML and the rest is Markdown, however some of these files *only* contain YAML.
The files containing only YAML are more structured, and so look a bit different to the Markdown files.

The following YAML data can be found in every file:

``` yaml
path:         ~~ a path goes here, eg "/communication" ~~
title:        ~~ the page title goes here, eg "💬 Communication skills" ~~
sidebarTitle: ~~ this is the title in the sidebar "💬 Communication" ~~
sidebarGroup: ~~ this is the subheading/group. eg "communication" or nothing ~~
yaml:         ~~ indicates if the framework is mainly yaml (true) or markdown (false) ~~
levels:       ~~ the amount of milestones you want to be shown if the file is yaml, eg 6 or nothing ~~
homepage:     ~~ card-based frameworks only! whether you want a homepage to be shown, eg true, false, or nothing if irrelevant ~~
```

If the framework is in YAML format, underneath the compulsory data, you will find something like this:

``` yaml
homepage: true
topics:
  - name: "communcation"
    title: "💬 Communcation skills"
    content:
      - level: 1
        criteria:
          - "Accepts feedback graciously and learns from experience"
          - "Follows established rules for documentation e.g. Gitlab Wiki, GSuite"
          - "Constructively communicates criticism, observations, remarks"
          - "Collaborates with others with empathy"
          - "Is responsive, efficiently responds to teams’ questions"
      - level: 2
        criteria:
          - "Knows when their work affects others and proactively communicates the impact of status updates with those who most need to know"
          - "Proactively seeks and gives feedback from/to peers"
          - "Is able to communicate with peers from various departments, talks to non-technical stakeholders on appropriate level of abstraction"
        exampleCriteria:
          - criteria: "Uses various communication channels to give update"
            examples:
              - "uses online channels, like Slack, emails"
              - "uses team and 1:1: meetings to give the update"
---
### What is it about?
Communication skills refer to (...)
```

For each topic, you must define its contents. This is made up of an object (starts with a bullet point) which contains the criteria, and the level it is associated with.
If you need to add some examples to particular content (so that the content could be expanded by clicking on it), simply put the content along with its examples into the `exampleCriteria` object, defining the actual criteria point, and any examples it links to.

---

If you need any help, ping @zkusznir a message or feel free to raise an issue here in GitLab.

## How do I edit the PGF?

There are 2 ways to make changes to existing PGF. If you are familiar with GitLab or simply want to try it out, please follow the steps below:
1. Make sure you are added as a developer to this repository in Sidebar -> Members. If you are not, ping @zkusznir or anyone marked as maintainer or owner in the Members tab.
2. Firstly, navigate to the `paths/` folder and select the file you want to edit.
3. Click on the `Edit` button in the top bar, and make your edits in the text editor that appears.
4. Provide meaningful `Commit message` to summarize the changes (e.g. *Add examples to 2. milestone in Communication path*)
5. Provide the name of `Target branch` to which you want to publish changes (e.g. *add-examples-to-communication*). This branch will further be used to create a Merge Request in order to discuss the suggested changes with peers and eventually publish them.
6. Ensure the `Start a new merge request with these changes` checkbox is checked.
7. You'll be navigated to the page with new merge request. Provide a meaningful `Title` for the merge request (as it will be visible in the history log of changes) and a `Description` that would state the reason of changes. You can then specify the `Assignee` to the merge request - this person will be notified about the fact you have created the merge request and will be obliged to review these.
8. If the assigned person approves the changes you are able to publish the changes with `Submit merge request` button. This will automatically save your changes, store them in history log as well as publish them on the website.

Otherwise you can create an issue in GitLab so that PGF's maintainer can take care of making the changes for you. Please follow the steps below in order to do so:
1. Enter the [Issues](https://git.applover.pl/Applover/pgf/issues) tab.
2. Click the `New issue` button.
3. Provide meaningful `Title` and thorough `Description` for the issue so that maintainer will have the full understanding of the changes suggested by you.
4. Assign the maintainer as `Assignee` to the issue so that she/he would be notified about your request. As soon as maintainer notices your issue, they will contact you.

## Glossary

**Repository (Repo)**:

A folder in GitLab where the whole project with its files live. Actually it is the folder whose structure you can see on top of the page you're on right now.

**Branch**:

An independent set of changes introduced to the repository. Can be used to clearly organise history of changes. They are used to open and structure Merge Requests.

**Merge Request (MR)**:

A request to change a file, or multiple files on GitLab. It contains a list of changes to be introduced with comparison to existing data. It will be created whenever you want to make changes to PGF and them used to your peers for review and eventually publishing the changes.


### Looking for technical documentation?
Take a look at the readme in the `src/` directory.
