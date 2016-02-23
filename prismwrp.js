daa.RegisterClasses(
// *****************************************************************************
// @class Prism @groupname utility
// @name daa.prism
// @description
//    daa-wrapper class for 'Prism' syntax highlighter.

function Prism() {
   this.path = "daa";
   this.name = "prism";

   var Class = null;

   this.Format = function(AObj) {
      if (!AObj || !("value" in AObj)) { return ""; }
      Class = Class || window.Prism; if (!Class) { return "daa:error:NoClass:Prism"; }
      var xLang = AObj.grammar || AObj.language || "js"; if (!Class.languages[xLang]) { return "daa:error:NoProperty:" + xLang; }
      var errobj;
      try {
         var xText = Class.highlight(daa.String(AObj.value), Class.languages[xLang], xLang);
      } catch(errobj) { return "daa:error:Exception:" + errobj.message; }
      if (AObj.next) { return daa.m.Call(AObj.next, {value: xText}); }
      else { return xText; }
   };

}
);

