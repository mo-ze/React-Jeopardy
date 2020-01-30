echo "update the npm"
sudo npm install -g npm@latest
read -p "Are you sure you want to remove existing modules? "
rm -rf node_modules
echo "re-install the project dependencies"
npm install 
echo -e "to run \n npm start \n Happy Hacking  " 

#https://stackoverflow.com/questions/47622365/error-cannot-find-module-util-resolvecommand