# require './puppet_deps' # no need as long as machine puppet's version is not >= 3.0 and < 4.0
# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
    yes | sudo apt-get update
	yes | sudo apt-get install make
    yes | sudo apt-get install g++
	yes | sudo apt-get purge nodejs npm
	yes | sudo apt-get install curl
	yes | curl -sL https://deb.nodesource.com/setup | sudo bash -
	yes | sudo apt-get install -y nodejs
	yes | sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
	yes | echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
	yes | sudo apt-get update
	yes | sudo apt-get install -y mongodb-org
	yes | sudo service mongod start
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "hashicorp/precise64"
  
	# Set the Timezone to host timezone 
  require 'time'
  offset = ((Time.zone_offset(Time.now.zone)/60)/60) 
  zone_sufix = offset >= 0 ? "+#{offset.to_s}" : "#{offset.to_s}" 
  timezone = 'Etc/GMT' + zone_sufix 
  config.vm.provision :shell, :inline => "echo \"#{timezone}\" | sudo tee /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata"

	# Create a forwarded port mapping which allows access to a specific port
	# within the machine from a port on the host machine. In the example below,
	# accessing "localhost:8080" will access port 80 on the guest machine.
	# config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 443, host: 4433
  config.vm.network "forwarded_port", guest: 1337, host: 1337

	# Create a private network, which allows host-only access to the machine
	# using a specific IP.
	# config.vm.network "private_network", ip: "192.168.33.10"

	# Create a public network, which generally matched to bridged network.
	# Bridged networks make the machine appear as another physical device on
	# your network.
	# config.vm.network "public_network"

	# Provider-specific configuration so you can fine-tune various
	# backing providers for Vagrant. These expose provider-specific options.
	# Example for VirtualBox:
	#
	# config.vm.provider "virtualbox" do |vb|
	# 	# Don't boot with headless mode
	#   vb.gui = true
	#
	# 	# Use VBoxManage to customize the VM. For example to change memory:
	#   vb.customize ["modifyvm", :id, "--memory", "1024"]
	# end
	#
	# View the documentation for the provider you're using for more
	# information on available options.
  config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
	#This option can be enabled if the vagrant will give "connection timeout, retrying" error, because it may be expecting a user input
	v.gui = true
  end
  
  
	# Enable provisioning with shell
  config.vm.provision "shell", inline: $script
	# config.vm.provision :shell, :inline => install_dep('puppetlabs-nodejs', '0.8.0') # no need as long as machine puppet's version is not >= 3.0 and < 4.0
 
	# Enable provisioning with Puppet stand alone.  Puppet manifests
	# are contained in a directory path relative to this Vagrantfile.
	# You will need to create the manifests directory and a manifest in
	# the file default.pp in the manifests_path directory.
  # no need as long as machine puppet's version is not >= 3.0 and < 4.0
  #config.vm.provision "puppet" do |puppet|
  #  puppet.manifests_path = "manifests"
  #  puppet.manifest_file  = "default.pp"
  #end

end
