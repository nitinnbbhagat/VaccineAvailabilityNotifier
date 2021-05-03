# VaccineNotifier
VaccineNotifier checks the CoWIN Portal periodically to find vaccination slots available in your PIN code and for your age. If found, it will send you notifications via Email.


## Pre-requisites

1. Enable application access on your Gmail with [Sign in with App Passwords](https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1).

2. Clone GitHub Repo:
    ```
    $ git clone https://github.com/nitinnbbhagat/VaccineAvailabilityNotifier.git
    $ cd VaccineAvailabilityNotifier
    ```

3. Modify the .env file by adding PINCODE, EMAIL, APPLICATION_PASSWORD (16-character code from Step 1) and AGE. <br>
    `$ vi .env`

4. Install dependencies:
    * Install NPM for your OS from [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager).
    * Install `pm2`: <br>
        `$ npm install pm2 -g`


## Steps to run the code
1. To start the app: <br>
    `$ npm i && pm2 start vaccineNotifier.js --watch`

2. To close the app: <br>
    `$ pm2 stop vaccineNotifier.js && pm2 delete vaccineNotifier.js`


Here's a sample of the resultant emails:
![image info](./sampleEmail.png)
