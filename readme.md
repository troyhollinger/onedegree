## One Degree Avisors
Lead Developer : Austen Payan (austenpayan@gmail.com)

Tech : Laravel 4.2, Homestead, jQuery, MySQL,

## Setup
##### Installation
Follow the standard procedure for setting up a homestead vagrant environment, which you can find at the Laravel Documentation [here](https://laravel.com/docs/4.2/installation).

##### Environment Variables
Email me for the specific values for these keys. Below is a running list of what environment variables your local environment should contain.
* twitter_consumer_key
* twitter_consumer_secret
* twitter_access_token
* twitter_access_token_secret
* encryption_key
* database_name
* database_username
* database_password
* mandrill_password

##### Migrations & Seeds
Once your environment is set up, ssh into homestead and locate your onedegree directory. Type `php artisan migrate` to run migrations and then `php artisan db:seed` to run the seed files.

##### Front End Tools
Navigate to the public directory and type `npm install`
## Development
##### Grunt/ Bower
When developing, make sure you go to the `/public` directory and run `grunt`, which will run all of our front-end tasks automatically (concatonation, minification, uglification, etc). Also, if/when you add packaged for use on the front end, do it through bower, e.g. `bower install <package> --save`.
