def install_dep(name, version, install_dir = nil)
    install_dir ||= '/etc/puppet/modules'
        "mkdir -p #{install_dir} && (puppet module list | grep #{name}) || puppet module install -v #{version} #{name}"
	end
	
def uninstall_dep(name, version, uninstall_dir = nil)
    uninstall_dir ||= '/etc/puppet/modules'
        "!(puppet module list | grep #{name}) || puppet module uninstall --version=#{version} #{name}"
	end