window.onload = function() {
	prikaziNavodila();
};
function prikaziNavodila() {
    Swal.fire({
        title: 'Navodila',
        html: '<div style="text-align: left;">' +
              'Kapitan Barbossa je po uničujočem viharju obtičal na otoku okostnjakov, ' +
              'kjer mora v labirintu poiskati svoj izgubljeni zaklad. Sledi stopinjam in ' +
              'zbiraj zlate kovance, a bodi hiter, ker imaš na voljo imaš le 150 sekund, ' +
              'preden se Barbossa spremeni v duha.' +
              '</div>',
        icon: 'info',
        confirmButtonColor: '#D8C7A1',
		didOpen: () => {
			const naslov = Swal.getTitle();
            naslov.style.fontFamily = "'PiratskaPisava', serif";

            const vsebina = Swal.getHtmlContainer();
            vsebina.style.fontFamily = "Arial, sans-serif";
		}
		}).then(()=>{
			predvajajGlasbo();
		});
}
function predvajajGlasbo(){
	new Audio("zvok/Main Theme  Pirates of the Caribbean.mp3").play();
}
    
