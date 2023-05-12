# Exam task with openweathermap

I created API key from my account on `https://openweathermap.org/` and created the link directly to my trigger `http://api.openweathermap.org/data/2.5/weather?q={API key}`. I paste it in firefox and the program returned syntax in json:

![weather](https://github.com/DanyAAD90/eficode/assets/117837948/7a9dbe32-2d23-4b1b-b43c-2505270fc875)

### Docker

Next in `~/eficode/weatherapp/frontend` and `~/eficode/weatherapp/backend` I used command: `npm i && npm start`. 
Then in `~/eficode/weatherapp/frontend` and `~/eficode/weatherapp/backend` I created Dockerfile's and `do` files as script to create docker. 
In `~/eficode/weatherapp/` I created `docker-compose.yml` which can run a both of containers. I include in `docker-compose.yml` required information about volumes, line: `command: npm run start` for frontend and backend are enabling hot reload.

-----
About Node.js and React framework

-----
About Testing and Robot framework

-----

### Cloud

*The biggest trend of recent times is developing, deploying and hosting your applications in cloud. Knowing cloud -related technologies is essential for modern IT specialists.*

* Set up the weather service in a free cloud hosting service, e.g. [AWS](https://aws.amazon.com/free/) or [Google Cloud](https://cloud.google.com/free/).

### Ansible

*Automating deployment processes saves a lot of valuable time and reduces chances of costly errors. Infrastructure as Code removes manual steps and allows people to concentrate on core activities.*

* Write [ansible](http://docs.ansible.com/ansible/intro.html) playbooks for installing [docker](https://www.docker.com/) and the app itself.

### Documentation

*Good documentation benefits everyone.*

* Remember to update the README

* Use descriptive names and add comments in the code when necessary

### Via tar-package

* Clone this repository.
* Make changes and **commit them**.
* Create a **.tgz** -package including the **.git**-directory, but excluding the **node_modules**-directories.
* Send us the archive.

### ProTips

* When you are coding the application imagine that you are a freelancer developer developing an application for an important customer.

* The app must be ready to deploy and work flawlessly.

* The app must be easy to deploy to your local machine with and without Docker. 

* Detailed instructions to run the app should be included in your forked version because a customer would expect detailed instructions also.

* Structure the code and project folder structure in a modular and logical fashion for extra points.

* Try to avoid any bugs or weirdness in the operating logic.
