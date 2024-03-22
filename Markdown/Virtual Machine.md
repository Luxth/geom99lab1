# Virtual Machine 
## Setting up a Virtual Machine

- Create a new project 
- Click on Computer Engine and click on the sub tab called VM Instance
- Create an Instance 
- Name the virtual machine (arcgissever-geom99)
- Select the region and zone as us-central1 (lowa)
- For machine configuration leave it as default 
- Change the boot disk
- Click on custom image and click on change
- Click all and click on Shawn ArcGIS Sever
- Go to image and click on the right image 
- Allow HTTP and HTPPS traffic 
- Press create 


## Setting up a Windows Password on the Virtual Machine
- Click on the three dots
- Click on Set new windows password
- Set the username as “student”
- The windows password is presented and should be recorded
- Record the windows password on a notepad or paper for safekeeping


## Setting up a Firewall
- Click on Create a Firewall Rule
- Set the name called flemingrdp444
- Make sure the target is “All instances in the network”
- Set the source filter: IPv4 ranges and source IPv4 ranges as 0.0.0.0/0
- In the Protocol and Ports section, click on specified protocols and ports
- Click on TCP and set the port as 444
- Click on create to setup the firewall for 444 port

## Setting a Firewall for ArcGIS Server Management Ports
- Click on Create a Firewall Rule
- Set the name called arcgisserveradmin
- Make sure the target is “All instances in the network”
- Set the source filter: IPv4 ranges and source IPv4 ranges as 0.0.0.0/0
- In the Protocol and Ports section, click on specified protocols and ports
- Click on TCP and set the port as 6443,6080
- Click on create

## Setting a Firewall for ArcGIS Server Management Ports on Virtual Machine
- Click on Remote Desktop Connection 
- Copy the Vitrual Machine External IP and add :444 at the end of it
- Log in with the student and password from the window setting password 
- In the start menu of the virtual machine select windows defender firewall
- Click on inbound rules and click on new rule 
- Select port for the rule and select TCP and specified local ports
- Put in 6443,6080 in specified local ports for the Protocol and Ports section 
- Select “Allow the connection” and click next


## Turing off/on the Virtual Machine
- To turn off the Virtual Machine is to click on the three dots at the end of the VM instance and click on stop
- Pressing stop turns off the virtual machine and to turn on the virtual machine to click on the three dots and press start/stop


## Checking the Rest Endpoint
- Type the external IP into the webpage bar and if you see Internet Information Services
- The web sever is working and not secured and you type https at the end of it will become not secured
- Click on Advanced then proceed
- There is no certficate thats why its not secured 
- At the end of the External IP address add /arcgis/rest/services and you will see the arcgis sever is running 
- Can also reach as the manager by removing rest/services and add in manager so it will be like this /arcgis/manager with :6443 at the end of the External IP
- Log in with username and password for the Arcgis Sever Manager portal


