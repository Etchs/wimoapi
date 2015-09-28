class { 'nodejs': }

package { 'grunt-cli':
  provider => 'npm',
  require  => Class['nodejs'],
}

#package { 'node-inspector':
#  provider => 'npm',
#  require  => Class['nodejs'],
#}

package { 'sails':
  ensure  => '0.11.2',
  provider => 'npm',
  require  => Class['nodejs'],
}
