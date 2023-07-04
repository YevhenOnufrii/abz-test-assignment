This is a [Next.js] project bootstrapped with [`create-next-app`]

https://yevhenonufrii.github.io/abz-test-assignment/

## Technology, libraries

1. Next.js
2. React.js
3. Tailwind CSS
4. Formik
5. Yup
6. eslint

# Test assignment

## Working with REST API (GET).

1. Implement the “Working with a GET request” block according to the mockup and API
   documentation. Display 6 users on the API request result page. The "Show more" button
   should be hidden when the last page of API query results is reached. Users are sorted by
   registration date (the newest first).
2. To display radio buttons on the registration form, use the GET /positions method from the API
   documentation.

## Working with REST API (POST) – registration form block “Working with a POST Request”

1. Implement front-end validation in accordance with mockups and API documentation.
   validation:
   All forms fields are **required**
   _name_ - user name, should be 2-60 characters
   _email_ - user email, must be a valid email according to RFC2822
   _phone_ - user phone number, should start with code of Ukraine +380
   _position-id_ - user position id. You can get list of all positions with their IDs using the API method GET api/v1/positions
   _photo_ - user photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.
