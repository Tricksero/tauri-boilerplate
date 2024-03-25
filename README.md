# Tauri Boilerplate
Repo based off:
```
https://github.com/chippers/hello_tauri
```
Using this Tutorial:
```
https://tauri.app/v1/guides/testing/webdriver/example/setup/
```

My attempt to create a minimal reusable boilerplate to create desktop stuff
with the web technologies I use most. I simply changed things until I was satisfied with the workflow so its still a bit rough.

## Contains
* webpack
* typescript
* tailwind
* slightly altered tauri init

## Select debug monitor
There is some code in the main.rs to tell tauri what monitor to use for debuging
as I found the default behaviour of *it's poping into your face every
time* quite annoying.

## Building
Start Webpack
´´´
npm run dev
´´´
Start Tailwind
´´´
npm run tailwind
´´´
Watch and build tauri project after changes with the tauri devserver
```
tauri dev
```
I found this to work better though because it restarts the building process
when there is a change while building.
```
watchexec -r -w dist cargo run
```