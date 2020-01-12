# scwg

## Tools and Frameworks:
- Jekyll
- MaterializeCSS
- FullCalendarJS

## Layouts:
- put layout name in YAML front matter in order to use that layout
- two layouts
  - default layout (used for most pages)
  - course description (used for course description collapsibles)

## Includes:
- includes used throughout to make code cleaner
- sometimes variables passed in to them

## Collections:
- collections used to describe courses
- one collection per day courses are taught
- each folder for a collection must contain course files, named in the following pattern (0-indexed): 00-name-of-course.html
- course folder should be named \_course_3rd. That is, underscore, course, date of course (this is just a convention, doesn't really matter as long as \_config.yml has the correct name for the matching folder)
- numbering of files is important, and should follow chronological order (ascending order from earliest to last),  and match the json feed index numbering. This way collapsibles will be rendered in the correct order, and clicking on events in the calendar will expand the right collapsible.
- numbering between days _should be continuous between folders_. For example, if you had a \_courses_27th and \_courses_28th, and the last file of \_courses_27th was 17-my-awesome-course.html, the first file of courses_28th should be 18-another-spectacular-course.html
- add new collections (days courses are taught on) into \_config.yml
- omit "helper" if there is no helper, and the page will automatically render without that field

## Calendar JSON feed:
~~json file, just follow the example~~
~~- id number is important: 0-indexed course IDs should be chronologically ordered, and match the order you want the courses to appear on the index page~~
~~- unlike course file names, __do not__ use leading zero on index numbers~~
~~- if id number is not correct or out of order, clicking on an event in the calendar will not expand the correct collapsible~~
- now just generated automatically through the magic of Liquid and Jekyll :D

Site written and maintained by Arin Bakht
