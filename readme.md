# QA Cypress Challenge

# Getting Started

```
Task: Implement a cypress test suite to create a successful application with divido.

Test:
1. Create an application proposal with the code below via BE. Do this using cypress request functionality.
2. Retrieve the application 'token' from the response
3. Append the token to the following url "https://application.sandbox.divido.com/#/token/{{token}}"
4. Now visit the url
5. Complete the Application form using any test details
```


```sh
git pull git@github.com:dividohq/qa-cypress-chg-js.git

cd qa-cypress-chg-js

yarn && yarn e2e
```

Code to create application proposal via BE (API_KEY will be sent to you separately):
```sh
# Create new application for merchant.
curl -X "POST" "https://merchant-api.api.sandbox.divido.net/applications" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json' \
     -H 'X-DIVIDO-API-KEY: {{API_KEY}}' \
     -d $'{
  "merchant_reference": "1548302020",
  "applicants": [
    {
      "gender": "female",
      "phoneNumber": "2012312312",
      "firstName": "Ann",
      "dateOfBirthMonth": "09",
      "addresses": [
        {
          "postcode": "BA13 3BN",
          "text": "15 High street Westbury BA13 3BN"
        }
      ],
      "dateOfBirthDay": "02",
      "email": "ann.helselden@gmail.com",
      "dateOfBirthYear": "1990",
      "lastName": "Heselden"
    }
  ],
  "finance_plan_id": "8f751666-7e96-49d0-92d3-73a0360315e0",
  "merchant_redirect_url": "",
  "deposit_amount": 15000,
  "merchant_checkout_url": "",
  "metadata": {
    "foo-example-key": "bar-example-value"
  },
  "merchant_response_url": "http://example.com/webhook",
  "order_items": [
    {
      "quantity": 1,
      "name": "Computer",
      "price": 146000,
      "vat": 0
    }
  ]
}'
```
