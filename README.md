# VaccineNotifier
VaccineNotifier checks the CoWIN Portal periodically to find vaccination slots available in your PIN code and for your age. If found, it will send you notifications via Email.


## Prerequisites

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
```
Vaccine available. Details:

[
    {
        "center_id": 578367,
        "name": "VASANTHNAGAR UPHC BLOCK",
        "state_name": "Karnataka",
        "district_name": "BBMP",
        "block_name": "East",
        "pincode": 560001,
        "from": "09:00:00",
        "to": "18:00:00",
        "lat": 12,
        "long": 77,
        "fee_type": "Free",
        "session_id": "ed6cf641-411b-4dea-8b58-57c3944770b3",
        "date": "06-05-2021",
        "available_capacity": 11,
        "fee": "0",
        "min_age_limit": 45,
        "vaccine": "COVISHIELD",
        "slots": [
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-06:00PM"
            ]
    }
]
```
