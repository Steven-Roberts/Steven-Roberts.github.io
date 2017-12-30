new M.Sidenav(document.querySelector('.sidenav'));

document.querySelectorAll('.collapsible').forEach((e) => {
    new M.Collapsible(e);
});
