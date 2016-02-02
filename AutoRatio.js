/*** © 2016 PDKnight. ALL RIGHTS RESERVED. ***/
var AutoRatio = {
	version: "1.1",
	ww: window,
	d: document,
	e: undefined,
	g: undefined,
	els: [],
	w: [],
	h: [],
	loadElements: function() {
		this.e = this.d.documentElement;
		this.g = this.d.getElementsByTagName('body')[0];
	},
	sel: function(str, bool) {
		return bool 
				? document.querySelectorAll(str) 
				: document.querySelector(str);
	},
	addEvent: function(el, name, func, bool) {
		if (el.addEventListener)
			el.addEventListener(name, func, bool);
		else if(inputJoin.attachEvent)
			el.attachEvent('on' + name, func);
	},
	fixRatio: function() {
		var t = AutoRatio;
		if (t.els.length === 0) return;
		for (i = 0,len = t.els.length-1; i <= len; i++) {
			var elz = t.sel(t.els[i],true);
			if (elz.length === 0) return;
			for (j = 0,jlen = elz.length-1; j <= jlen; j++) {
				var el = elz[j],
					W = t.ww.innerWidth || t.e.clientWidth || t.g.clientWidth,
					H = t.ww.innerHeight|| t.e.clientHeight|| t.g.clientHeight;
				el.style.backgroundSize = (W/t.w[i] > H/t.h[i])
					? null : 'auto 100%';
			}
		}
	}.bind(this),
	enable: function(s, w, h) {
		this.loadElements();
		var el = this.sel(s, true);
		if (typeof el == 'object' && el.length > 0
				&& typeof w != 'undefined'
				&& typeof h != 'undefined') {
			if (this.els.length === 0)
				this.addEvent(window,
					'resize',this.fixRatio,false);
			this.els.push(s);
			this.w.push(w);
			this.h.push(h);
		}
		this.fixRatio(el);
	}
};
