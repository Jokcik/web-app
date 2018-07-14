# Первый запуск
npm install -g @angular/cli
npm install -g typescript
npm install -g ts-node
npm install -g nodemon

# Запуск сервеса с помощью nodemon
npm start

# Скопилировать стили
npm run css
npm run csswatch

# компиляция сервера на прод
npm run prod

# Добавить изменения на сервер
git push heroku master

### copy_in_ftp.sh
    #! /bin/bash

    host="85.143.175.134" # К примеру www.beluo.ru 
    port="21" # Порт, к которому подключаемся
    user="testuser" # Имя пользователя на ftp-сервере под, кторым будем логиниться
    pass="19966991" # Пароль пользователя на ftp-сервере, к которому подключаемся
    echo "$user:$pass@$host"
    lftp $user:$pass@$host << INPUT_END
    lcd /Users/danil/WebstormProjects/web-app
    rm -r files/dist/
    mirror -R dist/ files/dist
    quit
    exit 0

### copy_dist_of_ftp.sh
    #!/bin/bash
    cp -v -R /home/testuser/ftp/files/dist /root/web-app/

### ssr_copy_dist_of_ftp.sh 

    #!/bin/bash
    cp -v -R /home/testuser/ftp/files/dist /root/server_ssr/
    cp -v -R /home/testuser/ftp/files/dist-server /root/server_ssr/
    cp -v -R /home/testuser/ftp/files/server /root/server_ssr/
    cp -v -R /root/server_ssr/server/* /root/server_ssr
    
 
