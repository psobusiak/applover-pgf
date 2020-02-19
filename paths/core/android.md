---
path: "/core/android"
title: "🤖 Android"
sidebarTitle: "🤖 Android"
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
    title: "🤖 Mastery"
    content:
      - level: 1
        criteria:
          - "Writes Kotlin code in compliance with the style guide"
          - "Codes simple layout files that reflect the designed screens well"
          - "Takes the most basic precautions against causing memory leaks"
          - "Is familiar with AndroidX/Jetpack framework, including MVVM architecture"
          - "Updates existing unit tests when modifying corresponding code"
          - "Has basic knowledge of using Android Emulator and physical devices for debugging."
          - "Knows how to properly use resource files for dimens, strings, layouts"
          - "Implements basic animations and transitions"
      - level: 2
        criteria:
          - "Makes informed decisions when choosing the algorithm or data structure to solve the issue at hand"
          - "Has a good knowledge of Java"
          - "Adds unit tests for the features developed"
          - "Is familiar with reactive programming"
          - "Designs correct data models in the application"
          - "Integrates arbitrary 3rd party libraries / APIs when provided documentation"
          - "Cooperates with UI designers to communicate issues implementing certain flows / views to find a good custom/default compromise"
          - "Handles real-time permissions properly."
          - "Knows how to properly use resource files for plurals, string arrays, spannables, etc., including alternative configurations"
          - "Uses Android Studio debugger to track down bugs effectively"
          - "Implements complex animations (including Lottie) and transitions with shared views."
          - "Implements basic push notification handling"
          - "Knows the uses of Snackbars and Dialogs, communicates them to the designers and implements them correctly"
          - "Builds simple custom views when deemed necessary"
          - "Has experience with any Firebase Services"
        exampleCriteria:
          - criteria: "Knows a set of the most used 3rd-party libraries"
            examples:
              - "Retrofit/Apollo for networking, Moshi/GSON for JSON-parsing and Glide for image caching etc."
      - level: 3
        criteria:
          - "Takes time to analyse performance of the app and fixes any found issues"
          - "Is proficient with dependency injection library of choice"
          - "Knows how to safely and efficiently use kotlin coroutines or RxJava to implement asynchronous operations"
          - "Implements more complicated view hierarchies, properly passing data between destinations"
          - "Implements complex layout files using the correct ViewGroups for the particular task"
          - "Considers migrations between api/app versions"
          - "Seeks out opportunities to improve company-wide standards for Android development"
          - "Puts emphasis on security of data storage/transmission"
          - "Designs robust release process with optimised app bundles"
          - "Tends to try out new libraries/tools when time allows"
          - "Has good knowledge of basic ADB commands, layout inspector and profiler"
          - "Has a deep understanding of life-cycles of Android’s components"
          - "Is able to properly use correct types of Services and Broadcast Receivers"
          - "Knows how to properly use proguard rules"
          - "Handles in-app navigations in a clear structured manner using recommended solutions (i.e. Navigation component), including deep links"
          - "Implements complex push notifications behaviours"
          - "Has familiarity with the concept of paginated data and is able to implement basic paged lists"
          - "Designs and implements local database solutions in the application using the recommended ORM (Room) or SQLite queries depending on the requirements"
          - "Uses WorkManager or similar API to schedule asynchronous operations within the app"
          - "Has in-depth knowledge of several Firebase Services, including Analytics"
        exampleCriteria:
          - criteria: "Takes responsibility for 3rd party libraries added to the project"
            examples:
              - "knows how to analyse their risks and suitability for given task"
          - criteria: "Knows how and when to use more complex features of Kotlin"
            examples:
              - "such as reified generic types, generic type variance, inline functions, custom property & interface delegation etc."
          - criteria: "Has experience with some of the less-often used system features"
            examples:
              - "such as media playback, download managers, file handling, etc."
      - level: 4
        criteria:
          - "Writes exemplary code others strive to imitate"
          - "Builds and maintains complex, reusable, well-documented Custom Views for internal company use and teaches others about their use-cases"
          - "Knows how to configure CI/CD solutions for Android using lint tools (Danger & Detekt) and makes informed choices about lint rules."
          - "Know when and how to use instrumented tests in more demanding projects"
          - "Coordinates major refactorings of existing projects"
          - "Is proficient within Gradle build scripts"
          - "Implements complicated use-cases regarding paged lists."
          - "Coordinates a company-wide switch to a new approach/framework/architecture endorsed by Google or otherwise more suitable to our use-case"
          - "Debugs complex multi-source issues and provides comprehensive solutions to them"
      - level: 5
        criteria:
          - "Proactively prepares the codebase to new Android system requirements or new features only available in newer versions of the system."
          - "Mastered the act of translating client requirements/visions into concrete Android featuresets"
          - "Has a good knowledge of iOS platform to facilitate easier communication/rewrites between the platforms. "
          - "Is an active member of open-source community, reporting issues, and potentially contributing to frequently used 3rd-party Android libraries, such as UI components"
          - "Has hands-on experience with some of the “Nice to have” skills and other optional tools and domain-specific solutions"
          - "Has practical commercial experience with hybrid techstack, be it Flutter, React Native or otherwise"

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
