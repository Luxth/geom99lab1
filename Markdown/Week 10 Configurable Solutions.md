# Week 10 Configurable Solutions

## ArcGIS Experience Builder Attempt 1
- Name the application called Valentine Heart. 
- Add the data source from previous week called Valentine Heart. 
- Made the title have max width and add a second page which is blank screen template. 
- Add in map source and rename the first page called Valentine Heart. 
- Added a Menu widget and customized it. This will allow to change from the first page to the second page. 
- Since experience builder allows to work on different views such as in mobile and desktop.
- We can change from desktop view to mobile view and add title and turn off the search. 
- We can preview to see the outcome is.


## ArcGIS Experience Builder Attempt 2
- Create a new project with a full blank. 
- Collected several data; Experience Western Newfoundland, L'Anse aux Meadows, Western Brook Pond, The Tablelands, Western Brook Pond (Web scene), and Geological Profile Newfoundland. 
- Go to Insert Widgets tab and add a column widget to the page on the top left hand side. 
- Column widget is used as a container to add other widgets into it. 
- Add a List widget into the column widget. 
- Expand the list widget from the top to the bottom of the page. 
- Click on the icon of the list widget and connect the data source of the image to the image field of the Webmap. 
- The name with the title field of the Webmap. 
- Bring in the Map widget and add to the empty space on the right and expand to take the whole space. 
- Set the data of the map widget as the same data as the List widget (L'Anse aux Meadows). 
- Click on Live view to see how the list interactives with the map. 
- Click on the one of the list widgets to see what shows up on the map, which an outline of a marker. 
- Need a trigger function to zoom into the marker when clicking on specific lists. 
- Go to List widget and click on action. 
- Once on the action tab, click on add trigger then click on Record selection. 
- Click on Map and then zoom to function. 
- Once the trigger is added, go to live view to see the results. 
- Next step is to add a header. 
- This step requires by clicking on the arrow next to the page adder and click on "Add link". 
- Go vikingstrail.com and add the link to the experience builder link function. 
- Add another link to the home page from the Newfoundland and Labrador website. 
- Click the Home page and toggle on the header and adjust the size of it to 50. 
- Click on the header and edit it. Add the text widget to it. 
- Give the webpage a good name and set the text font to be 50. 
- To access the link created earlier is through by adding a menu widget which can be placed at the right top corner of the webpage. 
- Click on advanced toggle on the menu widget to change the colour of the selected, hover, and default text. 
- Save it and Preview the look of the webpage

## ArcGIS Field Maps Attempt 1
- Click on create a new map the create the map layers that are essential in the application. 
- Called the layer, Bird Observations and have the layer type be Point layer. 
- Secondly add another layer called Bird Distribution and have the layer be classified as Polygon layer. 
- Click next and proceed to the layer setting. Here click on gps coordinates to be collected and 3D spaces to be modelled, where the z coordinates are used for. 
- This gps point collected can be used to create a 3D space, which is useful for the web project I am in. 
- Click on next and proceed to the setting page, where you must create a name for the map. 
- Also designated the folder where the map and feature layer to be in ArcGIS Online. Proceed to create the new map. 


## ArcGIS Field Maps Attempt 2
- Purpose of this attempt is to create feature layers and data forms for data collection
- Go to ArcGIS Online and go to my contents
- Click on New feature then feature layer
- At the create a feature layer tab, select define your own layer
- Create a point, line, and polygon layer. 
- Name them as whatever you like 
- Proceed to name the title, add tags, and add a descriptive summary to explain the purpose of the feature layer
- Once the feature layer is created go to item view page and click on data tab
- From the data tab, go from table section to the fields section 
- Create fields such as GlobalID has a data type = GlobalID, CreationDate has a data type = Date, Creator has a data type = string, EditDate has a data type = Date, and Editor has a data type = string
- Add a new field called CollectionSite that has a data type of integer
- Click on collectionsites and click on create a list 
- List will contain the different sites that will be visited each with its own coded value. 
- There are three sites; Site A has a coded value of 0, Site B has a coded value of 1, and Site C has a coded value of 2. 
- Create another new field called pHLevel and has a data type of Double
- Added another called WaterTurbidity and has a data type of integer
- Click on WaterTurbidity field and create a list for it 
- Another field called AdditionalNotes and has a data type of string 
- Next to go to the next layer, which is Access Path
- Created new fields such as GlobalID, creator, creationdate, editdate, editor. All have the same data type as mentioned above
- Add a new field called AccessPathType which has a data type of integer
- Create a list for the new field (AccessPathType)
- Three list values were added for the AccessPathType field; Paved has a coded value of 2, Trail has a coded value of 1, and Forged their own path has a coded value of 3
- Created another new field called LitterCount that has a data type of integer
- Switch to the last layer called Landuse Observations 
- Added fields with the same data type as mention above such as Creation date, Creator, GlobalID,EditDate, and Editor for Landuse Observations 
- Added another new field called AnimalCount that has a data type of integer
- After that completed it, time go to the item viewer of the training feature layer
- Make sure each layer has enable attachments toggled on
- This will allow us to take pictures for each layer
- Time to save the layers onto a map so from the items page of the feature layer, click on open map viewer
- Clicking on the layers for the feature layer shows the layers (AccessPath, Landuse Observations, and collectionsites)
- Go to style for collectionsites and click on field and select collectionsites
- This will look the list values and give each site its own colour to be distinguishable from one another 
- Repeat the same steps for AccessPath for AccessPathType
- Save the map and then go to the Field Maps application 
- Once Field Maps is open, look for the map that was edited for this applciation which was named Field Map Data Collection Training and select it
- Select forms and click on the collection site layer
- Start building a form for this layer 
- Scroll down the form builder, you will see the fields created for that feature
- Add collection sites to the form area and clicking on the collection site box you will be able to see various things that can be added to the text box
- For example, adding a hint to specify which site the person is on
- Also made the collection site required
- Save the form and repeats the same steps for producing a form for AccessPath and Landuse Observations