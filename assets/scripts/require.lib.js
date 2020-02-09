/* Made by Penguin */
loadRequire = () => {
    window.system = {};
    if (typeof android !== "undefined") {
        system.get = (name) => {
            return android.getPref(name);
        };
        system.set = (name, value) => {
            android.storeStringPref(value, name)
        };
    } else {
        system.get = (cname) => {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };
        system.set = (cname, cvalue) => {
            let d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    }

    window.cL = system.get("language") === "" ? 0 : system.get("language");
};