**Step 1: Prepare Google Sheets**

**1 Download and Fix in Google Sheets:**

Download the AI&DS.xlsx file.

Upload and open it in Google Sheets to convert the Excel data.


**Step 2: Set Up Google Apps Script**

**2 Open Google Apps Script:**

In Google Sheets, go to Extensions > Apps Script.

This opens the Google Apps Script editor.

**3 Copy and Paste Code:**

Obtain the code.gs script with your desired functionality.

Copy the contents of code.gs.

Paste the code into the script editor in Google Apps Script.

**4 Run the Script:**

Save the script in the editor.

Run the script to test its functionality within Google Sheets.


**Step 3: Deploy the Script**

**5 Create a New Deployment:**

In the Google Apps Script editor, go to Deploy > New deployment.

**6 Choose Deployment Method:**

Select your deployment method (e.g., Web App).

Configure deployment settings (access permissions, version, etc.).

Click Deploy.

**7 Copy Deployment URL:**

After deployment, copy the provided URL (this will be your deployment URL).


**Step 4: Update HTML Form**

**8 Open and Update index.html:**

Locate and open the index.html file associated with your form.

**9 Replace Form Action URL:**

Find the <form> tag in your index.html.

Replace the action attribute of the <form> tag with your deployment URL copied in Step 7.


**Step 5: Run the Updated HTML Form**

**10 Run index.html:**

Save the changes made to index.html.

Open index.html in a web browser.

**Additional Notes**
Ensure that your Google Sheets script and HTML form are integrated correctly. The form submission action should now be directed to your Google Apps Script deployment URL, allowing the HTML form to interact with Google Sheets via the deployed script.

If you encounter any issues during this process or need further assistance, feel free to provide more details so that I can assist you better.
