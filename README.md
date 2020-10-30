# _Mr. Roboger's Neighborhood_

### By _**Tyler Sinks**_

### _This Project's Reason for Being and Description_
_This project functions as a testing ground for applying a few JavaScript devices like arrays and loops_
* Created October 30, 2020
* Last major revision happened on October 30, 2020
* Hopes to take an input number from a user and return one of three possible responses:
    1. "Beep!"
    2. "Boop!"
    3. "Won't you be my neighbor?"
* See if you can discern Mr. Roboger's logic just by guessing and checking your input numbers.
* For a giveaway hint, one might peek at the business and user-interface logic in the scripts.js file.
![A portion of a screenshot from the Epicodus website describing my particular cohort](img/EpicodusModules.png)
* initially created in response to a project prompt to be ginned up completely solo and completely within a nine hour window on **"30 October, 2020"**

## Setup/Installation Requirements

**Software that this project requires:**
1. a web browser
2. a plain text editor, such as `Basic Text Editor` available for Windows devices, or developer go-to text editors such as Sublime Text, Atom, VIM, or Visual Studio Code
3. a command line (or "Terminal.app" on a Mac) program for entering git prompts
4. No additional code libraries or dependencies need to be installed locally for you to experience this project in all its splendor.
    4a. Perhaps one should make sure that git is installed on one's machine, so as to be able to follow the git prompts for the command line interface below

**Most straightforward way to just see the rendered page:**
* [click this link](https://sinkstyt.github.io/portfolio-index/index.html) to load the site as it is currently hosted by GitHub Pages
    * _Should this link fail you in any way, you could alternatively copy and paste the full address below into a web browser's address bar:_
    #### https://sinkstyt.github.io/portfolio-index/index.html ####

## To Install the Whole Thing Locally

**Let's Call This: "To Take the `git` Route"**
1. Launch your terminal application (Terminal.app comes installed as default in the Mac OS since... I'm not sure when.)
2. Navigate to (or even first _create_) the directory to which you would like to copy the project's files to your machine. _AN EXAMPLE:_
    2a. `$  pwd`
    * > `{Users}\{YOUR_USER_NAME}\`
    2b. `$  mkdir thisPersonsPortfolioPage`
    2c. `$  cd thisPersonsPortfolioPage`
    * > `{Users}\{YOUR_USER_NAME}\thisPersonsPortfolioPage`
3. Now that you are in the destination directory, pull the files down to your machine from this README's GitHub repository. A suggested series of command line prompts follows by which one might do this:
    3a. `$~  pwd`
    * > `{Users}\{YOUR_USER_NAME}\thisPersonsPortfolioPage`
    3b. `$~  git clone {the_URL_of_my_GitHub_repository_pasted_from_your_clipboard}`[^bignote]
        _Something like this will then be printed to your console:_
        > Cloning into 'live-share'...
        > remote: Enumerating objects: 72, done.
        > remote: Counting objects: 100% (72/72), done.
        > remote: Compressing objects: 100% (58/58), done.
        > remote: Total 6989 (delta 24), reused 39 (delta 14), pack-reused 6917
        > Receiving objects: 100% (6989/6989), 51.25 MiB | 9.65 MiB/s, done.
        > Resolving deltas: 100% (4274/4274), done.
4. Now you've got somebody's project (mine, in this case) in that local directory. Happy perusing!
5. **A perusal suggestion** Use that command line, now that you're in the root folder for this project anyway, to launch your editor of choice (example, Visual Studio Code):
    `code .`
    > this should launch a new window in VS Code open to the root folder of the directory. Of course some unique system or user profile settings may be pointint you to an error message at this point. For help on this, _Stick with it! We're almost there!_ please check out the documentation appropriate to this error/your text editor of choice's command prompts.

## Specs

Describe: mrRobogerSpeaks

Test | Code | Expect
------ | ------|----------
It will say (return), "Beep!", if user input includes 1.        |        | mrRobogerSpeaks(1).toEqual("Beep!")
It will say, "Boop!", if user input includes a 2.       |        | mrRobogersSpeaks(2).toEqual("Boop!")
It will say, "Won't you be my neighbor?" if user input includes a 3.       |        | mrRobogerSpeaks(3).toEqual("Won't you be my neighbor?")  
It prioritizes the third test above the previous two.       |        | mrRobogerSpeaks(123).toEqual("Won't you be my neighbor?")   
It prioritizes the second test only above the first.    |      | mrRobogerSpeaks(12).toEqual("Boop!")     
It will say back to the user all previous responses before also responding to the most recent input.    |      | mrRobogerSpeaks(000).toEqual(...{all previous responses}, {THIS_INPUT'S_RESPONSE})
It will say three numbers from the range of numbers between 0 and the user-inputted number, selected at random, if no 1, 2, or 3, digits are included in the user input.  |      | mrRobogerSpeaks(75648007).toEqual( [ {RANDOM_NUMBER_WITHIN_RANGE}, {RANDOM_NUMBER_WITHIN_RANGE}, {RANDOM_NUMBER_WITHIN_RANGE} ] )

## Known Bugs

_I am sure that some of the hypertext links will break within days if not hours._
_Other than that, I have grave misgivings generally about the overall clunkiness of the page..._
_Furthermore, {**NONE**} of the specs written above were passing at time of first submission (about 4:45 PM Pacific Time, 30 October, 2020)_

## Support and Contact Details

_Please let me know if you would like to share suggestions for the page. I can be most easily reached by email._
_tyler.sinks@gmail.com_

## Technologies Used

_html, JavaScript, jQuery,_
_css, Bootstrap_

### License

*MIT 2.0*

Copyright (c) 2020 **_Tyler Sinks_**

[^bignote]: If you're having trouble finding that nice green "Code" button:
    * a .png of it at time of README writing is this: ![the green Code button seen near the top right of any repository hosted on GitHub](img/greenCodeButton.png)
    * Alternatively &mdash; should you not be able to use this button to load this project's URL to your clipboard &mdash; I give the URL to you here as well:
    https://github.com/sinkstyt/portfolio-index.git