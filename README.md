## How to run

Installation
##################################
First (Laravel Project)
##################################
You should run composer to install packages

composer install

and then install npm packages

npm install

##################################
Second (Server)
##################################
Make sure to install nodejs before starting

after finish install nodejs go to public/nodejs folder in project

and open command window and run following command to install node packages(express)

npm install

Go to public/nodejs folder and open command window and run following command to start nodejs >node server.js

##################################
Third (Database)
##################################

Create a Mysql database using xammp for example:

then type these commandes:

-   To migrate all tables
    php artisan migrate

-   To create a default admin to login
    php artisan db:seed --class= CreateUser

    These are the credentials :
    Email : admin@admin.com
    Password: 111

################################
System Description:
MVP of a news CMS where clients can create articles with GIF images.

System Features:

-   An authentication system. The user should be able to log in and
    log out and sign up.
-   Ability to search for your favorite gif.
-   It has a flexible API that you can change the API provider easily.

---

Bonus:

-   1st Feature
    I have enabled users to select multiple gif images instead of one from the popup and insert them into the editor.

-   2nd Feature
    If you copy the url from giphy and paste it to the editor , it shows GIF image preview instead of URL:
    Here are some random links I picked to help test this feature:

https://giphy.com/gifs/xbox-xbox-series-x-s-two-point-campus-oPBUeOffgmTPlyve4R
https://giphy.com/gifs/studiosoriginals-thursday-happy-morning-bGCwmLDnwL25kCg3FV
https://giphy.com/gifs/rap-latin-trap-villano-antillano-HOhRrNsC9Se0HNu5Raa

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
