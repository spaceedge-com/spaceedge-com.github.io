//websearch.js	
	$( 'option[value="#"]' ).prop( 'selected', 'selected' ); //jQuery reselects default#		      
function dosearch() {
var s_term=document.web_search_engines;
var submitto = s_term.search_engines.options[s_term.search_engines.selectedIndex].value + escape(s_term.searchterms.value);
window.location.href = submitto;
return false;
}
