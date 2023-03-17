# Introduction
The dist/ folder is the destination of the source code files after they are compiled, available to be loaded into a project [1].
Now let's see how it works.

# Results
In the package.jason, a new build script is created, this initially deletes the folder (if it exists) dist and creates a new one where it copies the previously worked files.
Also the start script is modified, since now our code will be executed from the files in the dist folder, so the new path is added.
# Bibliography
The changes can be consulted in the following [commit](https://github.com/PamRios/projnotes-firsttime/commit/70f29ea5d8bcc1a8958bcf11aa6b941d1b92aa85)
