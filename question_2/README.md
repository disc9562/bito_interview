# question 2

## introduction
1. 使用 Appium + WebdriverIO + Mocha 完成

## Based on

 - Node: v16.##.#
 - WebdriverIO: 7.##.#
 - Appium: 1.22.#

### How to start

```bash
npm install
```

```
change deviceName

capabilities: [{
    platformName: "Android",
    deviceName: <change to your device uuid>,
    appPackage: "com.google.android.calculator",
    appActivity: "com.android.calculator2.Calculator",
    automationName: "UiAutomator2"
}],
```

```bash
npm run wdio
```