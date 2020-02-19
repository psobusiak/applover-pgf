---
path: "/core/backend"
title: "🛠️ Backend"
sidebarTitle: "🛠️ Backend"
sidebarGroup: "core"
yaml: true
levels: 5
homepage: true
topics:
  - name: "development skills"
    title: "Development skills"
    content:
      - level: 1
        criteria:
          - "Works on small, low-impact, well-defined tasks with help of other developers"
          - "Has basic knowledge of concepts of a core language/framework"
          - "Understands common development practices e.g. REST architecture, SOLID principles"
          - "Understands established conventions in project (architecture, git flow, deploy flow etc.)"
          - "Has basic HTTP knowledge"
          - "Has basic knowledge of git (both terminal and UI)"
          - "Knows how to quit vim"
          - "Follows basic security practices e.g. doesn’t push sensitive data to repository/publicly available files"
          - "Knows basics of using the terminal e.g. basic commands like grep, curl, tail, cd, mkdir, kill"
          - "Understands basics of debugging and the tools used for it"
          - "Regularly and independently debugs and fixes bugs in their code with support of others"
          - "Identifies risks, potential issues at early stage of implementation"
          - "Participates in code review spotting mostly syntax errors"
          - "Integrates feedback from code reviews to ship high-quality code"
          - "Provides explanations clearly and precisely"
      - level: 2
        criteria:
          - "Independently works on small, low-impact, well-defined tasks"
          - "Constantly works to improve codebase’s quality"
          - "Makes a thorough research upon implementation to choose the best tool/approach for a problem"
          - "Uses libraries’ documentation and source code to look for solutions/answers"
          - "Independently debugs and fixes bugs in their code on their own"
          - "Creates and maintains documentation of the system"
          - "Takes care of software and dependencies updates"
          - "Identifies risks, potential issues and covers edge cases upon implementation (e.g. during planning meeting)"
          - "Knows how to configure existing tools in the project e.g. setup GitLab repository, integrate Sentry"
          - "Follows established conventions in project (app’s architecture, git flow, deploy flow etc.)"
        exampleCriteria:
          - criteria: "Has basic knowledge of parts of the application and their responsibilities"
            examples:
              -  "having a project that comprises of 4 separate applications the developer knows scope and responsibilities of each of these"
          - criteria: "Knows basic security practices and is able to find ones"
            examples:
              - "uses libraries supporting security in the project, takes care of proper authentication and authorization within the project"
          - criteria: "Is able to reasonably manage their time in project"
            examples:
              - "prioritizes tasks in project (manages their time well and does not spend too much time on tasks that might not be relevant at the moment)"
              - "can manage their work when other team member is absent at the moment and makes adjustments to task scope/priority if needed e.g. when PM is missing they are able to set tasks’ priorities themselves"
          - criteria: "Actively participates in code review"
            examples:
              - "is able to spot potential bugs/edge cases in code review"
              - "writes meaningful code review comments with explanations rather than instructions"
              - "takes the opportunity to learn from code review by asking questions and taking discussions with reviewer"
          - criteria: "Practices clear communication in project"
            examples:
              - "writes clear tickets, issues and bug reports that contain the necessary amount of detail to be picked up by other engineers"
              - "gives proper overview/descriptions and follows naming conventions when creating MRs"
      - level: 3
        criteria:
          - "Independently works on complex features in project"
          - "Makes steady, well-paced progress without the need for constant significant feedback from more senior engineers"
          - "Implements code according to best coding practices, applies proper design patterns when necessary"
          - "Knows how to configure CI deployment, work with CI flows and multiple environments"
          - "Understands when it is appropriate to leave comments, but biases towards self-documenting code"
          - "Actively participates in code review spotting business inconsistencies"
          - "Gives highly insightful code review feedback, addressing high-level thoughts and treating code review as knowledge-sharing channel"
          - "Holds themselves accountable for their decisions and their outcome"
          - "Actively participates to team-level technical discussions"
          - "Initiates and facilitates meaningful discussion around complex issues"
          - "Influences established conventions in project (architecture, git flow, deploy flow etc.)"
          - "Supports PM in his decisions if needed e.g. when PM has insufficient knowledge to address the issue"
          - "Ensures that code being written aligns business requirements"
        exampleCriteria:
          - criteria: "Takes a long-term vision of the project and defines building blocks to get there"
            examples:
              - "writes maintainable, loosely-coupled code that is easy to test"
              - "anticipates future use cases and makes design decisions that minimize the cost of future changes"
              - "designs elegant solutions to problems"
          - criteria: "Actively participates in workshops, project plannings or/and pre-development phase"
            examples:
              - "makes good suggestions and spots potential risks/problems upon development phase"
          - criteria: "Deals well with unfamiliar subjects"
            examples:
              - "introduces new tools to the project, new 3rd party integrations"
          - criteria: "Is able to debug issues in various parts of the application"
            examples:
              - "not only the part they are responsible for"
          - criteria: "Takes care of non-functional requirements"
            examples:
              - "keeps in mind such requirements as performance, security, accessibility etc."
              - "understands importance importance of such requirements and knows tools used to verify they have been met"
      - level: 4
        criteria:
          - "Coordinates major refactorings of existing projects"
          - "Debugs complex multi-source issues and provides comprehensive solutions to them"
          - "Designs software so that it can easily deal with changing requirements"
          - "Identifies risks, potential issues based on project’s specification"
          - "Is known for drama-free releases"
          - "Identifies bottlenecks in the process and roadblocks to success of the project and takes actions to remove these"
          - "Translates difficult business requirements into technical terms"
          - "Mentors younger developers"
          - "Can take over any project in the company, instead of another developer"
          - "Can do the POC of the selected issue or technology and prove which solution works best"
        exampleCriteria:
          - criteria: "Is an expert within a core language/framework"
            examples:
              - "knows language from scratch, knows when to use which function"
              - "knows how frameworks and built-in functions work under the hood"
          - criteria: "Makes pragmatic choices about tech debt"
            examples:
              - "is able to reasonably take shortcuts when necessary and keeps them in tech debt backlog"
              - "tackles tech debt proactively e.g. refactors whenever touches any part of codebase in need"
          - criteria: "Seeks out opportunities to improve company workflow"
            examples:
              - "identifies and promotes common development approaches as cross-team standards"
              - "takes part in definition of team guidelines"
      - level: 5
        criteria:
          - "Independently scopes, designs, and delivers solutions for large, complex challenges"
          - "Is capable of building an entire product from scratch that requires significant R&D effort"
          - "Is an expert in a particular domain or particular set of problems e.g. machine learning/devops/business intelligence areas of expertise"
          - "Contributes to project’s architecture and conventions e.g. application’s architecture, git flow, deploy tasks etc."
          - "Understands the business so well that is able to advise in business terms e.g. from regular user’s perspective"
          - "Mastered the act of translating client requirements/visions into concrete web features"
          - "Proactively prepares the codebase to significant platform changes. Is the pioneer whenever some core features are deprecated in favour of new solutions."
        exampleCriteria:
          - criteria: "Takes part in definition of company-wide standards"
            examples:
              - "coordinates a company-wide switch to a new approach/framework/architecture"
              - "improves and maintains company’s infrastructure and architecture in their core technology e.g. project architecture templates, CI scripts etc."
  - name: "mastery"
    title: "🛠️ Mastery"
    content:
      - level: 1
        criteria:
          - "Has basic knowledge of leading/selected BE language and framework e.g. knows most common language’s/framework’s functions and API"
          - "Has basic knowledge of one database and its API e.g. can write simple SELECT, INSERT queries etc."
          - "Has basic knowledge of leading testing framework (e.g. RSpec, MiniTest)"
          - "Modifies existing tests along with changing implementation"
          - "Adds new tests along with new implementation"
          - "Knows fundamentals of at least one API design pattern e.g. REST"
          - "Fixes simple bugs that encompass a single method and are relatively easy to fix"
          - "Knows basics of using the terminal e.g. basic commands like grep, curl, tail, cd, mkdir, kill"
          - "Writes code according to established conventions e.g. common Ruby Style Guide rules"
          - "Knows Postman or similar API testing tool"
      - level: 2
        criteria:
          - "Has good knowledge of the libraries used in project and their API e.g. knows when and how to apply given functions based on existing codebase"
          - "Has good knowledge of one database and its API e.g. is able to write complex queries, use transactions etc."
          - "Always covers implemented/modified features with a test suite unless the situation dictates otherwise"
          - "Modifies existing database schema according to business requirements"
          - "Knows and uses documentation framework e.g. Swagger, RSpec API docs"
          - "Has basic knowledge of the server, is able to safely use the server e.g. enter the server, browse the logs, browse files in the server"
          - "Knows how to use 3rd party integrations that are already implemented in the project e.g. Mailgun, Twilio, S3, Cloudinary, OAuth"
        exampleCriteria:
          - criteria: "Has good knowledge of leading/selected BE language and framework"
            examples:
              - "is able to name a few ways to solve a given issue and is able to make a decision about selected solution with assistance of other developers"
          - criteria: "Keeps application secure according to basic conventions"
            examples:
              - "sensitive data is stored securely in database, access is restricted in expected manner"
      - level: 3
        criteria:
          - "Knows various databases and their use cases e.g. knows the difference between RDBMS and NoSQL databases"
          - "Knows and applies theorethical database knowledge e.g. ACID, N+1 problems, locks, indexes, database normalization"
          - "Is able to map a domain model to database schema"
          - "Keeps application performant e.g. avoids N+1 queries, moves asynchronous pieces of code to background jobs"
          - "Fixes bugs involving multiple classes/services and can safely investigate production issues"
          - "Writes automated unit and feature test"
          - "Is able to setup the server and install all necessary tools for the application to be up and running using internal tools e.g. setup the server with internal script"
          - "Follows company’s infrastructure and architecture and is able to implement solutions according to them e.g. can set up a project or a server using company’s architecture/template"
        exampleCriteria:
          - criteria: "Has in-depth knowledge of leading/selected BE language and framework"
            examples:
              - "knows language API from scratch thus is able to choose the most elegant and optimal way to solve a given problem"
          - criteria: "Is capable of evaluating whether it’s worth to make use of 3rd party code e.g. libraries"
            examples:
              - is able to provide decent explanation for not using particular library e.g. 3rd party code might be not supported anymore or the feature can be easily written from scratch"
          - criteria: "Knows various approaches to authentication and is able to implement at least one of them"
            examples:
              - "cookie-based auth, token-based auth, JWT auth etc."
          - criteria: "Is able to integrate with 3rd party integration services"
            examples:
              - "using existing adapters to integrate with Mailgun, Twilio, S3, Cloudinary, OAuth"
          - criteria: "Has good knowledge of the server, is able to safely use the server"
            examples:
              - "upload data to the server, modify files, access database, configure and run services, use cron etc."
          - criteria: "Keeps all running services secure"
            examples:
              - "all private accesses are restricted"
              - "doesn’t use 3rd party code with known vulnerabilities"
              - "is aware of common exploits and protects codebase from these"
      - level: 4
        criteria:
          - "Is able to find themselves in any type of project and on any phase of its development"
          - "Deploys basic services to staging and production environments e.g. deploys Sidekiq, Redis"
          - "Is able to setup the server and install all necessary tools for the application to be up and running independently from scratch"
          - "Considers metrics and non-functional requirements when designing the system"
          - "Implements performance improvements to existing systems"
          - "Is able to implement various ways of communication with the client e.g. REST API and web sockets"
          - "Knows and applies various architectural patterns according to requirements e.g. microservices, CQRS, Event Sourcing"
          - "Is capable of setting up and integrate 3rd party services into the project e.g. Elasticsearch search engine, RabbitMQ message broker"
      - level: 5
        criteria:
          - "Is capable of building the whole project’s architecture based on business requirements, functional and non-functional e.g. knows scaling concepts and applies them accordingly"
          - "Is experienced with shell enough to write their own scripts and automate processes/their own work"
          - "Works with various technologies/frameworks/platforms e.g. is able to write a piece of logic in both RoR and NodeJS"
          - "Knows caching concepts and is able to apply given one according to requirements"
---
### About our core paths
Core paths are directly related to professions we employ at Applover. Why exactly are these called **Core**? Because they represent how you can progress at your profession at Applover. Each core path covers all the things we're looking for from Applover's team members.

### How does it work?
Each development path is divided into several milestones to be achieved along with your progression. Particular milestone represents a set of exemplary behaviors and skills that need to be mastered to accomplish the milestone. Some of the paths share common skills and behaviors (e.g. all paths related to development roles: Android, iOS, Frontend, Backend, Wordpress) - as a result each milestone for these is composed of:
- Development skills - exemplary development skills and behaviors common for all developers at Applover.
- Mastery - exemplary skills and behaviors directly related to particular area of expertise.

And thus all development roles' paths share the same set of **Development skills** throughout their milestones while they contain unique set of **Mastery** skills.

### Things to keep in mind
- There are many different ways to progress and be valuable to Applover as you grow, including deep technical knowledge and ability as well as variety of soft skills.
- Your progression isn’t an exact science and there will always be some ambiguity.
- This isn’t a checklist – PGF is a guide that helps you understand how you can progress at your work.
- PGF is a living organism - we will modify existing milestones or add new ones to the core paths whenever we need to do so.
