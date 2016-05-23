#Yokai Guide

French guide app (iOS only for now) to the first Yokai Watch 3DS Game.

- List of all 223 Yokai with basic infos including preferred food.
- Searching and sorting functionality.

##Installation
**(OSX only)**

###Prerequisites

You will need to have [node.JS](https://nodejs.org), [Xcode](https://developer.apple.com/xcode/download) and [Ionic CLI](http://ionicframework.com/docs/cli/install.html) installed to build the app on your machine:

- **node.JS** can be downloaded at https://nodejs.org
- **Xcode** can be downloaded for free at https://developer.apple.com/xcode/download
- **Ionic CLI** can be installed via NPM:

    ```sh
    npm install -g ionic
    ```
    (node.JS must be installed before installing Ionic CLI)

###Building and running the project
```sh
git clone https://github.com/Glitchbone/Yokai-Guide.git
cd Yokai-Guide
npm install
bower install
ionic state restore
cordova prepare
open platforms/ios/YokaiGuide.xcodeproj
```

The last command will open the project in Xcode.
If you want to launch the app on a real device, you will need to setup an Apple ID account in Xcode.

You can create an account for free here: https://appleid.apple.com/account

Select a simulator or a device in the top bar on the left and click the play button to launch the app.

##Development

```sh
gulp watch
ionic serve --lab
```

##Author

**Adrien Glitchbone**

+ [https://twitter.com/glitchbone](https://twitter.com/glitchbone)
+ [http://github.com/Glitchbone](http://github.com/Glitchbone)
