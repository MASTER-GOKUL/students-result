const sheetName = 'Current'
const scriptProp = PropertiesService.getScriptProperties()
function intialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}
function doGet (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    const headers = sheet.getRange(1, sheet.getLastColumn()-1, 1, sheet.getLastColumn()).getValues()[0]
    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })
    sheet.getRange(2, sheet.getLastColumn()-1, 1, sheet.getLastColumn()).setValues([newRow])
var declaration,table,th,tr,td,exam,vaild,invalid,declaration1,declaration2;
var tot=parseInt(sheet.getRange(2,sheet.getLastColumn()-2).getValues()[0]);
var sub=parseInt(sheet.getRange(3,sheet.getLastColumn()-2).getValues()[0]);
var sub1=parseInt(sheet.getRange(4,sheet.getLastColumn()-2).getValues()[0]);
var sub2=parseInt(sheet.getRange(5,sheet.getLastColumn()-2).getValues()[0]);
var ch=sheet.getRange(3,sheet.getLastColumn()-1).getValues();
var ch1=sheet.getRange(4,sheet.getLastColumn()-1).getValues();
var ch2=sheet.getRange(5,sheet.getLastColumn()-1).getValues();
var r=SpreadsheetApp.getActiveSheet().getRange(2,sheet.getLastColumn()-1).getValues();
var d=SpreadsheetApp.getActiveSheet().getRange(2,sheet.getLastColumn()).getValues();
var ex=SpreadsheetApp.getActiveSheet().getRange(1,4).getValues();
var ex1=SpreadsheetApp.getActiveSheet().getRange(1,4+sub).getValues();
var ex2=SpreadsheetApp.getActiveSheet().getRange(1,4+sub+sub1).getValues();
var roll=[];var subnam=[];var mar=[];var log=0;var subnam1=[];var mar1=[];var subnam2=[];var mar2=[];var date=[];
for(var i=0; i<tot; i++){
  roll[i]=SpreadsheetApp.getActiveSheet().getRange(i+4, 1).getValue();
  date[i]=SpreadsheetApp.getActiveSheet().getRange(i+4, 2).getValue();
}
for(var i=0; i<tot; i++){
if(roll[i]==r && date[i]==d){
log = 1;
var nam=SpreadsheetApp.getActiveSheet().getRange(i+4,3).getValues();
for(var j=0; j<sub; j++){
subnam[j]=SpreadsheetApp.getActiveSheet().getRange(3,j+4).getValues();
mar[j]=SpreadsheetApp.getActiveSheet().getRange(i+4,j+4).getValues();
}
for(var j=0; j<sub1; j++){
subnam1[j]=SpreadsheetApp.getActiveSheet().getRange(3,j+4+sub).getValues();
mar1[j]=SpreadsheetApp.getActiveSheet().getRange(i+4+sub,j+4+sub).getValues();
}
for(var j=0; j<sub2; j++){
subnam2[j]=SpreadsheetApp.getActiveSheet().getRange(3,j+4+sub1).getValues();
mar2[j]=SpreadsheetApp.getActiveSheet().getRange(i+4+sub1,j+4+sub1).getValues();
}
}
}
return HtmlService.createHtmlOutput("<html><head></head><body><center><div id='nam'> </div> <div id='ex'> </div> <div id='tab'> </div> <div id='ex1'> </div> <div id='tab1'> </div> <div id='ex2'> </div><div id='tab2'> </div><script>/*"
+vaild
+"*/if("+log+"==1){var nam=('<h3> NAME: "+nam+"</h3>');document.getElementById('nam').innerHTML=nam;/*"
+declaration
+"*/if("+ch+"==true){var s='"+subnam+"';var d = s.split(',');var m='"+mar+"';var ma = m.split(',');/*"
+exam
+"*/var ex =('<div style=text-align: left;><h1> "+ex+" </h1></div>');document.getElementById('ex').innerHTML=ex;/*"
+table
+"*/var table = document.createElement('table');table.setAttribute('id','tab');var headerRow = document.createElement('tr');var A=['SNO','SUBJECT','MARKS'];/*"
+th
+"*/for (var j = 0; j < 3; j++){var headerCell = document.createElement('th'); headerCell.textContent = A[j];headerCell.style.padding = '8px'; headerCell.style.border = '1px solid #ddd';headerCell.style.textAlign = 'center';headerRow.appendChild(headerCell);}table.appendChild(headerRow)/*"
+tr
+"*/;for (var j = 0; j < "+sub+"; j++) {for (var i = 0; i < 3; i++) {if (i === 0) {var row = document.createElement('tr');table.appendChild(row);}var cell = document.createElement('td');if(i==0){cell.textContent = j+1;cell.style.textAlign = 'center';}if(i==1){cell.textContent = d[j];cell.style.textAlign = 'left';}if(i==2){cell.textContent = ma[j];cell.style.textAlign = 'center';}/*"
+td
+"*/cell.style.padding = '8px';cell.style.border = '1px solid #ddd';row.appendChild(cell);}}table.style.borderCollapse = 'collapse';table.style.width = '100%'; var container = document.getElementById('tab');container.appendChild(table);}/*"
+declaration1
+"*/if("+ch1+"==true){var s='"+subnam1+"';var d = s.split(',');var m='"+mar1+"';var ma = m.split(',');/*"
+exam
+"*/var ex1 =('<div style=tex1t-align: left;><h1> "+ex1+" </h1></div>');document.getElementById('ex1').innerHTML=ex1;/*"
+table
+"*/var table = document.createElement('table');var headerRow = document.createElement('tr');var A=['SNO','SUBJECT','MARKS'];/*"
+th
+"*/for (var j = 0; j < 3; j++){var headerCell = document.createElement('th'); headerCell.textContent = A[j];headerCell.style.padding = '8px'; headerCell.style.border = '1px solid #ddd';headerCell.style.textAlign = 'center';headerRow.appendChild(headerCell);}table.appendChild(headerRow)/*"
+tr
+"*/;for (var j = 0; j < "+sub1+"; j++) {for (var i = 0; i < 3; i++) {if (i === 0) {var row = document.createElement('tr');table.appendChild(row);}var cell = document.createElement('td');if(i==0){cell.textContent = j+1;cell.style.textAlign = 'center';}if(i==1){cell.textContent = d[j];cell.style.textAlign = 'left';}if(i==2){cell.textContent = ma[j];cell.style.textAlign = 'center';}/*"
+td
+"*/cell.style.padding = '8px';cell.style.border = '1px solid #ddd';row.appendChild(cell);}}table.style.borderCollapse = 'collapse';table.style.width = '100%';var container = document.getElementById('tab1');container.appendChild(table);}/*"
+declaration2
+"*/if("+ch2+"==true){var s='"+subnam2+"';var d = s.split(',');var m='"+mar2+"';var ma = m.split(',');/*"
+exam
+"*/var ex2 =('<div style=tex2t-align: left;><h1> "+ex2+" </h1></div>');document.getElementById('ex2').innerHTML=ex2;/*"
+table
+"*/var table = document.createElement('table');var headerRow = document.createElement('tr');var A=['SNO','SUBJECT','MARKS'];/*"
+th
+"*/for (var j = 0; j < 3; j++){var headerCell = document.createElement('th'); headerCell.textContent = A[j];headerCell.style.padding = '8px'; headerCell.style.border = '1px solid #ddd';headerCell.style.textAlign = 'center';headerRow.appendChild(headerCell);}table.appendChild(headerRow)/*"
+tr
+"*/;for (var j = 0; j < "+sub2+"; j++) {for (var i = 0; i < 3; i++) {if (i === 0) {var row = document.createElement('tr');table.appendChild(row);}var cell = document.createElement('td');if(i==0){cell.textContent = j+1;cell.style.textAlign = 'center';}if(i==1){cell.textContent = d[j];cell.style.textAlign = 'left';}if(i==2){cell.textContent = ma[j];cell.style.textAlign = 'center';}/*"
+td
+"*/cell.style.padding = '8px';cell.style.border = '1px solid #ddd';row.appendChild(cell);}}table.style.borderCollapse = 'collapse';table.style.width = '100%';var container = document.getElementById('tab2');container.appendChild(table);}}/*"
+invalid
+"*/if("+log+"==0){document.writeln('<div><h2>Go Back - Check your username and password</h2></div>');}</script></center></body></html>");
}
  catch (e) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
        .setMimeType(ContentService.MimeType.JSON)
    }
  finally {
    lock.releaseLock()
  }
}