# QA Cypress Challenge

# Getting Started

```sh
git pull git@github.com:dividohq/qa-cypress-chg-js.git

cd qa-cypress-chg-js

yarn && yarn e2e
```

1.

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

2.

```
https://application.sandbox.divido.com/#/token/{{token}}
```
