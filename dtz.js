if(document.body.classList.contains("pg_forumdisplay")){
        var th = document.querySelector("#threadlist .th .tf");
        var th2 = document.querySelectorAll("#threadlist .th .tf a");
        th.innerHTML="";
        var dat = th2[4];
        dat.setAttribute("href",dat.getAttribute("href").substr(0,dat.getAttribute("href").indexOf("&filter")));
        dat.innerText = "最新";
        dat.setAttribute("style","color:var(--var-black)")
        if(window.location.href.indexOf("digest")!==-1)
            th2[3].classList.add("active");
        else
            dat.classList.add("active");
        th.appendChild(dat);
        th.appendChild(th2[3]);
}
if(document.body.classList.contains("pg_viewthread")){
	var par = document.querySelectorAll("#postlist>div>table>tbody>tr:first-child");
	for(let i=0;i<par.length;i++){
		var tmpres = [par[i].children[0].children[0],par[i].children[0].children[2]];
		par[i].children[1].insertBefore(tmpres[0],par[i].children[1].children[0]);
		par[i].children[1].insertBefore(tmpres[1],par[i].children[1].children[0]);
	}
}