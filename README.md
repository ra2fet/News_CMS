# Installation
## First (Laravel Project)

You should run composer to install packages

```languageName
composer install
```

and then install npm packages

```languageName
npm install
```


## Second (Server)

Make sure to install nodejs before starting

after finish install nodejs go to public/nodejs folder in project

and open command window and run following command to install node packages(express)

```languageName
npm install
```
Go to public/nodejs folder and open command window and run following command to start nodejs 

```
node server.js
```


## Third (Database)

Create an empty Mysql database using xampp with any name you choose and don't forget to edit .env file  :blush:

Then type these commandes:

-   To migrate all tables

    ```
    php artisan migrate
    ```
    

-   To create a default admin to login

    ```
    php artisan db:seed --class= CreateUser
    ```
    
> **_NOTE:_**  
    These are the default credentials :
    Email : admin@admin.com , Password: 111

## System Description:

MVP of  news CMS where clients can create articles with GIF images.

System Features:

-   An authentication system. The user should be able to log in and
    log out and sign up.
-   Ability to search for your favorite gif.
-   It has a flexible API that you can change the API provider easily.


## Bonus:

-   1st Feature
    I have enabled users to select multiple gif images instead of one from the popup and insert them into the editor.

-   2nd Feature
    If you copy the url from giphy and paste it to the editor , it shows GIF image preview instead of URL:
    Here are some random links I picked to help test this feature:

Number    | Links | 
--- | --- | 
1 | https://giphy.com/gifs/xbox-xbox-series-x-s-two-point-campus-oPBUeOffgmTPlyve4R | 
2 | https://giphy.com/gifs/studiosoriginals-thursday-happy-morning-bGCwmLDnwL25kCg3FV| 
3 | https://giphy.com/gifs/rap-latin-trap-villano-antillano-HOhRrNsC9Se0HNu5Raa| 





### Screenshots

#### Login
![photo_2022-08-06_08-30-51](https://user-images.githubusercontent.com/9104379/183236234-fb2c6495-993f-48ac-a558-6bf77b6a1edb.jpg)

#### Register
![photo_2022-08-06_08-30-50](https://user-images.githubusercontent.com/9104379/183235863-a1b7efe7-6d96-40ab-9e74-4c49b222ec84.jpg)

#### All Articles
![photo_2022-08-06_08-30-55](https://user-images.githubusercontent.com/9104379/183236282-57231707-fa90-41e4-b877-716bf1f12f52.jpg)

#### Create New Article
![photo_2022-08-06_08-30-56](https://user-images.githubusercontent.com/9104379/183236271-eb2e7240-5503-4466-8647-2842626c0534.jpg)

![photo_2022-08-06_08-30-57](https://user-images.githubusercontent.com/9104379/183236259-de009811-213b-42da-bad1-921b711f54be.jpg)

#### Search Article
![photo_2022-08-06_08-30-54](https://user-images.githubusercontent.com/9104379/183236304-b671617d-8057-48db-8501-918da7679c1f.jpg)

#### Multi Gif Selection
![photo_2022-08-06_08-30-53](https://user-images.githubusercontent.com/9104379/183236322-d2ef49d9-0e19-4792-8c25-e38f29d2e6a2.jpg)

#### View Article
![photo_2022-08-06_08-30-52](https://user-images.githubusercontent.com/9104379/183236343-f99c4ae3-2f2f-4780-9179-ef4e380f88d4.jpg)


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
