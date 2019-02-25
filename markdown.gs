// adds script to menu
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'markdownify')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

// changes markdown headers to google headers
function markdownify() {
  var document = DocumentApp.getActiveDocument();
  var body = document.getBody()
  
  
  
      while (body.findText('^#### ')) {
    var header4Trigger = body.findText('^#### ')
    var element4 = header4Trigger.getElement()
    var parent4 = element4.getParent()
    parent4.setHeading(DocumentApp.ParagraphHeading.HEADING4);
    element4.replaceText('^#### ', '')
  }
  
      while (body.findText('^### ')) {
    var header3Trigger = body.findText('^### ')
    var element3 = header3Trigger.getElement()
    var parent3 = element3.getParent()
    parent3.setHeading(DocumentApp.ParagraphHeading.HEADING3);
    element3.replaceText('^### ', '')
  }
  
      while (body.findText('^## ')) {
    var header2Trigger = body.findText('^## ')
    var element2 = header2Trigger.getElement()
    var parent2 = element2.getParent()
    parent2.setHeading(DocumentApp.ParagraphHeading.HEADING2);
    element2.replaceText('^## ', '')
  }
  
  while (body.findText('^# ')) {
    var header1Trigger = body.findText('^# ')
    var element = header1Trigger.getElement()
    var parent = element.getParent()
    parent.setHeading(DocumentApp.ParagraphHeading.HEADING1);
    element.replaceText('^# ', '')
  }
}
