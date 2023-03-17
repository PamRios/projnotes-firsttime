# Introduction
When developing code, it is not only necessary to have good fundamentals but it is equally important to know tools that help us to simplify steps or even help you to facilitate the reading of the code made, in the present we talk about minify a babel plugin that will allow us to compact our code.
# Results
Initially we will install this plugin from the terminal, which, if installed correctly, can be observed in the package.jason, the name babel-presets-minify will appear followed by the version we have chosen to install.
Let's talk then about how to configure the minify plugin, it is necessary to go to the babel configuration file, previously created, and a new array will be added (since this is how the configurations are made) and we will write the name of minify, inside the keys we will configure the following 
- builtIns
- evaluate
 - mangle
All of the above should be marked as _false_ in the following [commit](https://github.com/PamRios/projnotes-firsttime/commit/c2a73101c0c238f1d9c543a49c6cd18232790be2) has a more graphic help on how to do the above.
# Discussion
Minify allows us to compact and shorten our code, the feature called mangle refers to the process of renaming variables to make the code more compact.
This is more practical since it allows a better view of the important parts of the code avoiding bombastic variable names.
# Bibliography
To better understand what is [mangle]( https://lihautan.com/reduce-minified-code-size-by-property-mangling/)
