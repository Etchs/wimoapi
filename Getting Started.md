1. Download and install git (https://git-scm.com/downloads)

2. Clone our repository to your computer

3. Now you need to install Oracle Virtual box (https://www.virtualbox.org/wiki/Downloads) and Vagrant (https://www.vagrantup.com/downloads.html)

4. Open git bash as an administrator (if you're on windows) and navigate to the folder 'WIMO-Back' which was cloned in step 2 (Note: git bash is installed by default in step 1)

5. Now you need to run the following command "Vagrant up", which will automatically download and create the virtual machine in the folder specified in (VirtualBox -> Preference -> Default Machine Folder) and it will install all the required libraries, packages and execute scripts to make it ready for development. If everything executed correct with no errors, you should expect last output to look like this "notice: Finished catalog run in xx.xx seconds" 

6. You should find a new virtual machine created in virtual box and running, you now need to access this machine from the terminal/bash by using this command "vagrant ssh" at the folder named 'WIMO-Back'

7. Now that the virtual machine is running in your terminal/bash, run this command: `sudo npm -g install sails@0.11.2`

8. navigate to /vagrant/wimo_app and do the following step(s) according to your operating system.

9. If your host operating system is NOT windows, run this command: `sudo npm install` and you are ready to run `sails lift` to run the app

10. If your host operating system is windows, run the following commands:
	sudo mkdir -p /var/tmp/wimo_app/node_modules
	sudo cp package.json /var/tmp/wimo_app/
	sudo npm install --prefix /var/tmp/wimo_app
	
	After the installation is done and complete, you will need to create symbolic links under the node_modules folder in our project, by running the following command:
	
	for i in `ls /var/tmp/wimo_app/node_modules`; do sudo ln -sf /var/tmp/wimo_app/node_modules/$i/ /vagrant/wimo_app/node_modules/; done

***
	
11. NOTE: for windows, whenver a new npm package is added to our project: the following two commands must run from inside the folder '/vagrant/wimo_app':
	sudo npm install package_name --prefix /var/tmp/wimo_app
	sudo ln -sf /var/tmp/wimo_app/node_modules/package_name node_modules/
	
	
	