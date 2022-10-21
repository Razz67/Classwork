<h1>W1 D3 Lab: Groceries</h1>

<h2>React Groceries</h2>
<p>Build an app that let's you make a list of groceries to buy</p>

<h3>Learning Objectives</h3>
<ul>
<li>Practice setting up a React app</li>
<li>Practice Mocking a React app</li>
<li>Practice using state</li>
<li>Practice rendering a list</li>
<li>Practice conditional rendering</li>
</ul>

<h3>Prerequisites</h3>
<ul>
<li>Introduction to React static components, mocking, state, rendering</li>
</ul>

<h2>Getting Started</h2>
<ol>
 <li>npx create-react-app react_groceries</li>
 <li>cd react_groceries</li>
 <li>npm start</li>
 </ol>
 
<h2>Deliverables</h2>
<p>Build a grocery app that allows users to make a grocery list</p>

<h2>Technical Requirements</h2>
<ol>
<li>Read over these specs and draw a mockup of your app</li>
<li>Must have grocery items in this shape</li>

<ul>
{
  item: '',
  brand '',
  units: '',
  quantity: 0,
  isPurchased: false
}
</ul>

<li>Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)</li>
<li>Make inputs so that new items can be added</li>
<li>Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)</li>
<li>Add some style to your app</li>
<li>Stretch Add a button that says 'remove' and when clicked the value of isPurchased is toggled</li>
<li>Submission Guidelines</li>
<li>Submit the Github link</li>
</ol>

<h2>Hungry for more</h2>
<ul>
<li>Make multiple grocery lists (one for each family member) and have them update independently</li>
<li>sort your list alphabetically</li>
<li>create other ways to sort your data (ie by quantity)</li>
<li>change the 'remove' button's functionality to actually remove the item from the list</li>
<li>add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later</li>
<li>expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events</li>
</ul>
