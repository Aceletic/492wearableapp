SafeSun UV wearable app (gen 8) download instructions
By Mason Wright

iOS (as of 4/25/25)
[this is the method that is a workaround to not having an apple developer account]
Links I used to figure out this method: 
-	https://github.com/expo/expo/discussions/27489 (the response from user vedmant)

1.	Have a compatible iOS phone (iOS 13 and above)
2.	Have a compatible Mac (new enough to download a high enough version of Xcode)
3.	Make sure you have Xcode downloaded, (I used version 15.2 on a 2017 macbook pro) (to edit any code, I recommend installing vscode)
4.	Make sure you have a cable to connect to the Mac (should be ether USB to Lightning if older model or USB C-USB-C if newer model)
5.	Download the app files and move them to a location you know how to navigate to file-wise
6.	Install expo, packages, libraries, etc.  using the letter steps below (this only needs to be done the first time per folder directory)
a.	Open a command line terminal (should just be called terminal on mac)
b.	Navigate to the folder containing the app files (to the point that you would see each folder for ios, android, app, assets, etc. in a file explorer)
i.	Npm install expo@^49
ii.	Npx expo install
iii.	Npx expo install @config_plugins/react-native-ble-plx expo-file-system react-native-ble-plx @react-native-anywhere/ployfill-base64 expo-device
iv.	Npx expo prebuild
7.	Go back to Xcode and select to open an existing project, and navigate the file explorer and select the ios folder in the project folder (if you select anything else, it will say it was unable to open).
8.	 Open Xcode settings (click on xcode in top left of screen, not part of application) go to “locations” and make sure that you have command line tools installed, go ahead and reselect even if they show being selected
9.	Connect the phone to the mac
10.	Go to project settings in xcode   and “signing & capabilities” and select the apple id that is (signed into xcode and maybe the phone?)
11.	Go to signing & capabilities and remove “push notifications”
12.	Click on the top bar in xcode on the project name, select “edit scheme”, select “Build Configuration” – Release
13.	Build the project bundle in the command line with [ npx expo export:embed --entry-file=’node_modules/expo/AppEntry.js’ --bundle-output=’ ./ios/main.jsbundle’ –dev=false –platform=’ios’  ]
a.	You may need to change where the app entry is in package.json
i.	“main”: “expo-router/entry”
ii.	Is node_modules/expo-router/entry.js
iii.	npx expo export:embed --entry-file=’node_modules/expo-router/entry.js’ --bundle-output=’./ios/main.jsbundle’ –dev=false –platform=’ios’
14.	 in Xcode in Build Phases -> Bundle React Native code and images -> Check off “For install builds only” if it’s checked
15.	Go to Xcode, select the iPhone from devices on the top bar and runt the project by clicking the triangle in the top left corner.
16.	It will build the app and almost install, and then a pop-up should occur on the phone that it needs to be in developer mode
17.	To put an iPhone in developer mode, you will go to settings > privacy & security > Developer Mode > make sure it’s on. When turning this on for the first time, you will be prompted to restart the phone for it to take effect.
18.	After restarting, open Xcode back up and run the project by clicking the triangle in the top left again. 
19.	It should build and then install on the phone, then there should be a pop-up on the phone that its from an untrusted developer.
20.	Open the phones settings > general > vpn & device management > click on the apple id and click trust
21.	You should now be able to open the app on your phone and it should operate correctly. 

Android (as of 4/25/25)
https://drive.google.com/file/d/1XfEYnpOK2O-DhzG4HaA-eziFQSPUFs5e/view?usp=drive_link
1.	Have compatible android phone
2.	[scan qr code to apk / download apk from google drive link] 
3.	A system prompt on the phone should pop up that says “package installer” and you should select that
4.	It should ask if you want to download the app
5.	At some point before, during, or after downloading and clicking on the app to launch, a pop up should happen that says you need to trust the app. 
6.	If there is a direct link to the settings for that app that pops up, click it, otherwise you will have to enter settings and find the app.
7.	Flip the switch or click the expo button to “trust” the app on your device.
8.	The app should now launch



