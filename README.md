# TDD-kata-string-calculator
This is a string calculator TDD kata with a concourse pipeline for CI/CD. This code base is seperated into steps with the master as an empty structure for the app and we build it from there. Each branch is a step and the branches are numbered to reference each step in the backlog.
## Sample backlog URL
https://www.pivotaltracker.com/n/projects/2131602
## More Reading material
- String calculator kata: http://osherove.com/tdd-kata-1/
- More Katas: https://github.com/wix/tdd-katas & https://github.com/garora/TDD-Katas/wiki/Home:-The-Kata-List
- More on TDD: https://github.com/dwyl/learn-tdd 
- TDD example with java: https://github.com/danidemi/tutorial-java-tdd
- Detroit vs London TDD: https://github.com/testdouble/contributing-tests/wiki/Detroit-school-TDD
- Pair programming example video: https://www.youtube.com/watch?v=zFO1cRr5-qY&feature=youtu.be
- Concourse Tutorial: https://github.com/starkandwayne/concourse-tutorial


## Git Duet Usage
- write your initials, name and email in `~/.git-authors` as 
```
 authors:
    jd: john joe
    jj: jane jane
email_addresses:
    jd: john.joe@emc.com
    jj: jane.jane@emc.com
```
- change working directory to repository
- `git duet jd jj` to set pairs
- when commiting use `git duet-commit` instead of `git commit`
 
