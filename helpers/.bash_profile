
[[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

test -e "${HOME}/.iterm2_shell_integration.bash" && source "${HOME}/.iterm2_shell_integration.bash"

export JAVA_HOME=$(/usr/libexec/java_home)

# https://developer.xamarin.com/guides/testcloud/calabash/configuring/osx/updating-ruby-using-rbenv/
if which rbenv > /dev/null;
  then eval "$(rbenv init -)";
fi

export PATH="$HOME/.rbenv/bin:$PATH"
