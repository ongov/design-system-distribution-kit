# UI System

This is a repository for piloting potential solutions for a pattern library or design guide for the ODS using Fractal.

## Running the project
This project requires `node >= lts/carbon (8.x)`. This means a node version of 8 or higher.

Look at the .nvmrc file for more information.

* run `npm install` to install the common libraries used.
* Copy the `default.env` into a `.env` file.
* Run the server with `npm run dev` or `npm run dev:fr` (for French). The site will be served at `localhost:3000`.

<hr>

## Git setup

`master`: production branch, deployable to a production server. All merges to master must be done by a project maintainer - ask #c-technology in Slack for help if you're not sure how to go about this.

`develop`: staging branch, deployable to a staging server. All developers on the project can merge into this branch. Work merged into develop should be **stable**.

<hr>

## Development

### During a sprint

The typical flow will go from your feature branch to `develop`, then to `master`. You should never merge directly from a feature branch into `master`.

Ongoing work should be done on individual feature branches. **Do not** work directly from a shared branch. Give the feature branch a name that identifies who is primarily working on it, what kind of work is being done, and what the work is. For example:

`jzhang/bugfix/homepage-typo` or `meaghan/feature/new-menu`

**Your commit messages should be meaningful**:

* describe the feature
* describe the new files being added
* provide rationale or sources for any significant tech decisions

### Code reviews

When work from a feature branch is ready to go, submit a merge request from the feature branch to `develop`. Assign the merge request to another developer to review. Ideally, this will be someone who is familiar with the project. Make sure to check off the following settings to maintain code cleanliness:

* delete branch after merge
* squash commits

Follow the ODS tech team's [Code Review Guidelines](https://codigital.atlassian.net/wiki/spaces/TECH/pages/744652986/Code+Review).

## Deployment

* [Pushing to a personal sandbox](#personal-sandbox)
* [Deploying to the ui-system sandbox](#ui-system-sandbox)
* [Deploying to stage/production](#staging-&-production)

A gulp pipeline has been set up that will compile a static build of the Fractal project, including all compiled CSS. This can be run manually with `npm run build:en`.

### Pushing to a sandbox

The design systems sandbox HTTP username and password are required to access this page. Please refer to the product manager for this project if you don't know what this is.

#### Personal sandbox

If you are wanting to run a User Testing session or test for accessibility on a feature branch without pushing to stage, there is the option of pushing to the Design Systems sandbox, found at https://sb-designsystem.ontariogovernment.ca/. Anyone with access to this sandbox is able to push their work to a directory under their own name, for example: https://sb-designsystem.ontariogovernment.ca/meaghan/.

The process for pushing to a sandbox is as follows:

* run `gulp build --sandbox={YOUR NAME} --lang=en` (for English) or `gulp build --sandbox={YOUR NAME} --lang=fr` (for French) to create a static build of the feature branch
* Run `aws s3 sync fractal/build s3://sb-designsystem.s3.vpc.ont/{YOUR NAME}` to push ot your sandbox. 
* If nothing fails, your branch should become available at your sandbox URL.


#### ui-system sandbox

For the main design system sandbox, found at https://sb-designsystem.ontariogovernment.ca/ui-system, a manual deployment should take place every time new code is merged into `develop`. This is useful for running QA or user testing on code that is merged into develop, but not yet on the staging site.

The process for manually deploying to the ui-system sandbox can only be done by the project maintainers. The process is as follows:

* Once a branch has been merged into develop, navigate to the CI/CD pipelines section of the ui-system project on gitlab.
* Once the branch has passed the build pipeline, there will be a play button under the "stages" column of the job. Click this button to deploy to the sandbox.


### Staging & Production

In order to deploy to stage and production, you will first need to create a release branch.

Release branches support preparation of a new production release. They allow for ongoing work on release objectives, while freeing up develop for new commits towards future initiatives. Maintainers of the design system project will create the release branch.

#### Creating a release branch

Update package json version number by incrementing the previous tag version in gitlab. Increment the version number as needed to match your release severity.

The key moment to branch off a new release branch from develop is when develop (almost) reflects the desired state of the new release.
It is exactly at the start of a release branch that the upcoming release gets assigned a version number—not any earlier. 
* Releases version tags follow [semantic versioning](https://semver.org/). Naming convention is release/RELEASE_VERSION. For example, release/v1.0.0-alpha.
* the only code that enters this branch should be bug fixes on the release.

1. Preparing a release branch
    ```
    git checkout -b release/v1.0.0-alpha --no-track origin/develop
    ```

2. Push the release too remote
    ```
    git push -u origin release/v1.0.0-alpha
    ```

#### Fixing bugs in a release branch
Sometimes commits fail QA. If this is the case, you will be expected to correct the bug before it can be promoted to stage/production. In order to do this, you first need to branch off of the Release Branch. Ask the project maintainer if you are unsure.
```
git checkout -b [YOUR_NAME]/patch/[JIRA_TICKET_ID] origin/release/[RELEASE_VERSION] --no-track
```

#### Integrating a Release Branch into Stage/Production
Once all testing is complete and the release is signed off on:

* Merge the release into master and develop
* Prune the release branch from your local machine and the remote

The steps are as follows: 

1. Check out the master branch
    ```
    git checkout master origin/master
    ```

2. Merge the release branch into develop as no-ff
    ```
    git merge --no-ff origin/release/[RELEASE_BRANCH_NAME]
    ```

3. Tag the release
    ```
    git tag -a [RELEASE_TAG] -m "Release summary"
    ```

4. Push the master branch
    ```
    git push origin master
    ```

5. Push the tag
    ```
    git push origin [RELEASE_TAG]
    ```

6. Merge the release back intoo the develop branch
    ```
    git checkout develop

    git merge --no-ff origin/release/[RELEASE_BRANCH_NAME]
    ```

7. Push the develop branch upstream
    ```
    git push origin develop
    ```

8. Delete the release branch on local and remote since it has been fully integrated
    ```
    git branch -d release/[RELEASE_BRANCH_NAME]

    git push origin --delete release/[RELEASE_BRANCH_NAME]
    ```

### Deploying to Stage/Production

As soon as the release tag is pushed, and as long as the tag name follows the correct versioning convention (ex: v1.0.0-alpha), the CI/CD pipeline will run for the stage/prod deployment. 

The pipelines can be found under the CI/CD pipelines section of the ui-system project on gitlab. Under the "stages" column for the tag, there will be two play buttons - one to deploy to stage, and one to deploy to production. 

Press the button to deploy to stage first, and conduct the appropriate QA. Once QA has been approved, press the button to deploy to production.

Note that it may take up to 10 minutes to see the changes reflected on prod, and that you may need to clear your cache.

If any issues arise along the way, ask a project maintainer or a member of devops for help. If you're unsure who this should be, ask in #c-technology in Slack for help.


### Language support

The Design System project is available in two languages: English and French. 

To start the development server in English language run the command `npm run dev` (this defaults to English). To start in French language run `npm run dev:fr`. 

Both commands pass the `lang`(language) variable to the application and generate a set of markdown files for the selected language. Markdown files inside the `docs` folder can be modified directly. Markdown files that are used by components (found in the `components` folder) named `*.fr.md` and `*.en.md` are fine to modify, while files named `*.md` without ‘en’ and ‘fr’ should not be modified as they are generated automatically depending on the language preference, and will get overwritten if the language selection is changed. 

To use live-reload when working on the project, first select the language (for example, for french you run `npm run dev:fr`). The content will be cloned to `*.md` - you can now edit this file and save your changes to preview the result automatically in the browser. When you are ready to commit your work, copy the contents of `*.md` to `*.fr.md`, save and commit.

To build the Design System files, run `npm run build:en` to get the English language files, and `npm run build:fr` to build the French. This is helpful to check the build locally. The DevOps pipeline will run both those commands for both staging and prod, then publish the English files to the root of the bucket, and French inside a local ‘fr’ folder. 

#### Staging

Staged versions of the project will be deployed to https://designsystem.ontariogovernment.ca/ui-system. The standard ontariogovernment HTTP username and password are required to access this page. Please refer to the product manager for this project if you don't know what this is.

#### Production

Production version of the project will be deployed to https://designsystem.ontario.ca. 
