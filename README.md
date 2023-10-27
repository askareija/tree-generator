# Tree Folder Structure Generator
Simple Node app for generating tree folder structure with icons


## HOW TO
```zsh
npm install
node app.js <folder directory>

#example
node app.js /home/aden/projects/private-projects/tree 
```

Example result:
```zsh
📦tree
┣ 📂 .git
┃ ┣ 📜 FETCH_HEAD
┃ ┣ 📜 HEAD
┃ ┣ 📂 branches
┃ ┣ 📜 config
┃ ┣ 📜 description
┃ ┣ 📂 hooks
┃ ┃ ┣ 📜 applypatch-msg.sample
┃ ┃ ┣ 📜 commit-msg.sample
┃ ┃ ┣ 📜 fsmonitor-watchman.sample
┃ ┃ ┣ 📜 post-update.sample
┃ ┃ ┣ 📜 pre-applypatch.sample
┃ ┃ ┣ 📜 pre-commit.sample
┃ ┃ ┣ 📜 pre-merge-commit.sample
┃ ┃ ┣ 📜 pre-push.sample
┃ ┃ ┣ 📜 pre-rebase.sample
┃ ┃ ┣ 📜 pre-receive.sample
┃ ┃ ┣ 📜 prepare-commit-msg.sample
┃ ┃ ┣ 📜 push-to-checkout.sample
┃ ┃ ┗ 📜 update.sample
┃ ┣ 📂 info
┃ ┃ ┗ 📜 exclude
┃ ┣ 📂 objects
┃ ┃ ┣ 📂 info
┃ ┃ ┗ 📂 pack
┃ ┗ 📂 refs
┃   ┣ 📂 heads
┃   ┗ 📂 tags
┣ 󰌞 app.js
┣ 📂 node_modules
┃ ┣ 📂 .bin
┃ ┃ ┗ 📜 mime
┃ ┣  .package-lock.json
┃ ┗ 📂 mime
┃   ┣ 󰍔 CHANGELOG.md
┃   ┣ 📜 LICENSE
┃   ┣ 󰌞 Mime.js
┃   ┣ 󰍔 README.md
┃   ┣ 󰌞 cli.js
┃   ┣ 󰌞 index.js
┃   ┣ 󰌞 lite.js
┃   ┣  package.json
┃   ┗ 📂 types
┃     ┣ 󰌞 other.js
┃     ┗ 󰌞 standard.js
┣  package-lock.json
┗  package.json
```
Some icons won't show here because you need to install [Nerd Fonts](https://www.nerdfonts.com/)

