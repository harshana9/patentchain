=========================================PATENTCHAIN======================================
================================INSTRUCTION FOR INSTALLATION =============================

Step 1:
	Install Ganche GUI Version 
	(https://github.com/trufflesuite/ganache-ui/releases/download/v2.7.1/Ganache-2.7.1-win-x64.appx)


Step 2:
	Extract the Project folder or Clone from GitHub
	(https://github.com/harshana9/patentchain.git)


Step 3:
	Create New Workspace in Ganache with following configurations
	HOSTNAME : 127.0.0.1
	PORT NUMBER : 7545
	NETWORK ID : Any
	WORKSPACE NAME : Any
	TRUFFLE PROJECTS: Path to truffle-config.js file in Project folder


Step 4:
	Install Node Package Manger (NPM) (if you don't alrady have)
	

Step 5:
	Open Command Prompt and navigate to the project folder
	and Run the command 
			npm install

Step 6:
	Start Ganache Workspace (If not alrady started at Step 3)

	
Step 6:
	Deploy the Contarct (Open Command Prompt and navigate to the project folder)
	Run Command 
		truffle compile 
	Run Command
		truffle migrate

Step 7:
	Start The UI (Open Command Prompt and navigate to the project folder)
	Run Command
		npm start -- --reset-cache
	
Step 8:
	Open Web Browser (Google Chrome Reommanded)
	Install Metamask Extension
	(https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=google.com)

	Create Ethrium Wallet (Address) in metamask

Step 9:
	Use Add Network Option in Metamask to Configure Local Ganache network to Metamask
	You can Find Relevent Infomation in Ganche UI for Configuration

Step 10:
	Open the System User Interace Using browser (default //localhost:3000)
	

Step 11:
	Link the Metamask Account to Website for First time use

======================================================================================
======================================================================================



		

	






