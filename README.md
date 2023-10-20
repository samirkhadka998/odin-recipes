# odin-recipes

Use the universal one-liner in terminal in the project directory:

touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

It works no matter if you've created a .gitignore or not, no matter if you've added node_modules to git tracking or not.

Then commit and push the .gitignore changes.

Explanation

touch will generate the .gitignore file if it doesn't already exist.

echo and >> will append node_modules/ at the end of .gitignore, causing the node_modules folder and all subfolders to be ignored.

git rm -r --cached removes the node_modules folder from git control if it was added before. Otherwise, this will show a warning pathspec 'node_modules' did not match any files, which has no side effects and you can safely ignore. The flags cause the removal to be recursive and include the cache.

git status displays the new changes. A change to .gitignore will appear, while node_modules will not appear as it is no longer being tracked by git.


