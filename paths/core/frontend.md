---
path: "/core/frontend"
title: "🌐 Frontend"
sidebarTitle: "🌐 Frontend"
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
    title: "🌐 Mastery"
    content:
      - level: 1
        criteria:
          - "Creates simple layouts that reflect the designed screens (HTML, CSS, JavaScript)"
          - "Creates forms with validation"
          - "Creates responsive layouts (RWD)"
          - "Has good knowledge of leading CSS Preprocessor"
          - "Knows fundamentals of Semantic HTML i SEO"
          - "Knows fundamentals of leading UI Framework (Grid)"
          - "Knows the assumptions of leading CSS Metodologie"
          - "Knows the assumptions of Mobile first"
          - "Updates existing layouts in an already implemented styles methodology"
          - "Knows fundamentals of WEB Performance optimization."
          - "Checks the correctness of displaying layouts on popular browsers and mobile devices"
        exampleCriteria:
          - criteria: "Knows fundamentals of leading JS Framework:"
            examples:
              - "Local environment setting"
              - "Simple view files"
              - "Routes for view files"
      - level: 2
        criteria:
          - "Codes more advanced layouts"
          - "Builds an entire web application with a simple architecture using leading guideline"
          - "Knows fundamentals of UI and UX (readability, cooperating with a designer)"
          - "Has good knowledge of leading UI Framework"
          - "Has good knowledge of leading Methodologies"
          - "Has good knowledge of Mail template standards"
          - "Has good knowledge of WEB Performance optimization and tools for it"
          - "Updates existing unit tests when modifying the appropriate code"
          - "Debugs code using leading tools"
          - "Contributes to the release process"
          - "Be up to date with Front-End standards"
          - "Estimates small tasks"
        exampleCriteria:
          - criteria: "Has good knowledge of leading JS Framework"
            examples:
              - "Reusable components"
              - "Component lifecycle"
              - "Consume Remote API Data"
              - "Leading libraries"
              - "Flux Pattern (State Management Pattern)"
      - level: 3
        criteria:
          - "Builds an entire web application with a advanced architecture"
          - "Has basic knowledge of the most popular CSS Methodologies"
          - "Chooses the appropriate methodology for the project"
          - "Takes time to analyse performance of the web application and fixes any found issues"
          - "Estimates difficult tasks and fixing bugs"
          - "Independently conducts the release process"
          - "Has good knowledge of Unit tests "
          - "Has basic knowledge of End-To-End tests"
          - "Has basic knowledge of the others UI Frameworks"
          - "Has basic knowledge of the others JS Frameworks"
        exampleCriteria:
          - criteria: "Has in-depth knowledge of leading JS Framework"
            examples:
              - "In-depth knowledge of Flux Pattern (State Management Pattern)"
              - "Good knowledge of PWA (Progressive Web App)"
              - "Builds multi-version app in one repository (e.g. Admin + Front)"
              - "Works with Webpack"
      - level: 4
        criteria:
          - "Has good knowledge of End-To-End tests"
          - "Determines the optimal test coverage"
          - "Has good knowledge of the additional leading JS Framework"
          - "Has good knowledge of the additional leading UI Framework  "
          - "Has basic knowledge of the leading JS Framework for Mobile App"
          - "Has basic knowledge of the leading Framework for SSR app (Server Side Rendering) "
          - "Has basic knowledge of the leading leading Static Site Generator"
      - level: 5
        criteria:
          - "Has good knowledge of the leading JS Framework for Mobile App"
          - "Has good knowledge of the leading Framework for SSR App"
          - "Easily can switch between leadings JS Frameworks"
          - "Easily can switch between leadings UI Frameworks"

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
