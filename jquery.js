/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
if ($.browser.webkit) {

	var alptraumeditor = {
		
		onLoad : function(){
			
			if($('#vB_Editor_001').length > 0){
				$('#vB_Editor_001_textarea').css('width',600);
				******** = 'javascript:switch_editor_mode("vB_Editor_001");is_saf=false;is_moz=true';
				$('<td><div id="vB_Editor_001_cmd_switchmode" class="imagebutton" style="background: none repeat scroll 0% 0% rgb(241, 246, 248); color: rgb(0, 0, 0); padding: 0px; border: 1px solid rgb(49, 106, 197);"><img height="20" width="21" alt="" src="'+ alptraumeditor.src+'" title=""></div></td>').insertAfter($('#vB_Editor_001_cmd_resize_0_100').parent());
			}
			
			if($('#vB_Editor_QR').length > 0){
				******** = 'javascript:switch_editor_mode("vB_Editor_QR");is_saf=false;is_moz=true';
				$('<td><div id="vB_Editor_QR_cmd_switchmode" class="imagebutton" style="background: none repeat scroll 0% 0% rgb(225, 225, 226); color: rgb(0, 0, 0); padding: 1px; border: medium none;"><img height="20" width="21" alt="" src="'+ alptraumeditor.src+'" title=""></div></td>').insertAfter($('#vB_Editor_QR_cmd_resize_0_99').parent());
			}
			
			setInterval(alptraumeditor.checkForNewEditor,5000);
			
		},
		
		checkForNewEditor : function(){
			var vBulletin_editor = null;
			if($('td.vBulletin_editor:not(.switched)').length > 0){
				vBulletin_editor = $('td.vBulletin_editor');
				var vB_Editor_QE = $(vBulletin_editor).closest('table');
				if(typeof $(vB_Editor_QE).attr('id') == "undefined") return;
				var vB_Editor_QE_X = $(vB_Editor_QE).attr('id').replace('_editor','');
				$('#'+ vB_Editor_QE_X +'_textarea')[0].style.width = "100%";
				******** = 'javascript:switch_editor_mode("'+ vB_Editor_QE_X +'");is_saf=false;is_moz=true';
				$('<td><div id="'+ vB_Editor_QE_X +'_cmd_switchmode" class="imagebutton" style="background: none repeat scroll 0% 0% rgb(241, 246, 248); color: rgb(0, 0, 0); padding: 0px; border: 1px solid rgb(49, 106, 197);"><img height="20" width="21" alt="" src="'+ alptraumeditor.src+'"></div></td>').insertAfter($('#'+ vB_Editor_QE_X +'_cmd_resize_0_99').parent());
				$(vBulletin_editor).addClass('switched');
			}
		},
		
		src : "data:images/gif;base64,R0lGODlhFQAUAKIEAE1NTaampk1Npv///wAAAAAAAAAAAAAAACH5BAEAAAQALAAAAAAVABQAAANESLrc/jASIGMAoT5KXY6cN1hA+SnBSAiCgxHXkips23QTqta2NK8tVuUnBPp2vOKD2DMukQ0lY5Zc8DTYaHKb7Xq/jAQAOw=="
		
	}

	
	$(alptraumeditor.onLoad).appendTo('head');
}