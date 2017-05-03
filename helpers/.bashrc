
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
export PATH="$PATH:$JAVA_HOME/bin"
export PATH="$PATH:/usr/local/bin/ideviceinstaller"
export GEM_HOME="$HOME/Software/ruby"
export PATH="$PATH:$GEM_HOME/bin"
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
export PATH="$PATH:$ANDROID_HOME/build-tools"

export AUTO_GUID="8eed6ef0-e858-11e6-af32-2fe2d7d1616e"
function cd {
    builtin cd "$@" && ls -F
    }
	
#alias exit='

#read -t 5 -p "Do you really wish to exit? [y/N] " should_exit || exit
#case $should_exit in
#        [Yy]* ) exit;;
#        * ) ;;
#esac'

# get current branch in git repo
function parse_git_branch() {
	BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
	if [ ! "${BRANCH}" == "" ]
	then
		STAT=`parse_git_dirty`
		echo "[${BRANCH}${STAT}]"
	else
		echo ""
	fi
}

# get current status of git repo
function parse_git_dirty {
	status=`git status 2>&1 | tee`
	dirty=`echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?"`
	untracked=`echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?"`
	ahead=`echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?"`
	newfile=`echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?"`
	renamed=`echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?"`
	deleted=`echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?"`
	bits=''
	if [ "${renamed}" == "0" ]; then
		bits=">${bits}"
	fi
	if [ "${ahead}" == "0" ]; then
		bits="*${bits}"
	fi
	if [ "${newfile}" == "0" ]; then
		bits="+${bits}"
	fi
	if [ "${untracked}" == "0" ]; then
		bits="?${bits}"
	fi
	if [ "${deleted}" == "0" ]; then
		bits="x${bits}"
	fi
	if [ "${dirty}" == "0" ]; then
		bits="!${bits}"
	fi
	if [ ! "${bits}" == "" ]; then
		echo " ${bits}"
	else
		echo ""
	fi
}

export PS1="\[\e[36;40m\]\w\[\e[m\] @ \[\e[32m\]\`parse_git_branch\`\[\e[m\] "
#export PS1="\[$IBlack\]┌—————(\[$BWhite\]\u\[$IBlack\])—————(\[$IBlue\]\w\[$IBlack\]) \n└> \[$BRed\]$ \[$White\]"

alias ls='ls -GFlash'
LS_COLORS='di=1:fi=0:ln=31:pi=5:so=5:bd=5:cd=5:or=31:mi=0:ex=35:*.rpm=90'
export LS_COLORS

alias g='git status'
alias a='git add'

alias i='mate ~/repos/automation-web/README.md'

# Easier navigation: .., ..., 
alias ..="cd .."
alias cd..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."

alias sub="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"

export NVM_DIR="/Users/kanak/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
