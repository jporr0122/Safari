const animalBtn = document.getElementById('animalBtn');
const animalText = document.getElementById('animalText');
const animalImg = document.getElementById('animalImg');
const animalHeader = document.getElementById('header');

animalBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    const url = `https://zoo-animal-api.herokuapp.com/animals/rand`;
    
    try{
		header.innerHTML = 'Animal Facts';
		const urlFetch = await fetch(url);
		const animal = await urlFetch.json();
		animalImg.src = animal.image_link;
		animalBtn.innerHTML = 'Click to see another animal';
		animalText.innerHTML = `<p>
								Here is the ${animal.name}. Also known by its Latin name ${animal.latin_name}.<br><br>
								The ${animal.name} is a ${animal.animal_type} and usually weighs between ${animal.weight_min} to ${animal.weight_max} pounds and can range anywhere between ${animal.length_min} and ${animal.length_max} feet in length.<br><br>
								It's main diet consists of ${animal.diet} and can live up to ${animal.lifespan} years.<br><br>
								The ${animal.name} can be typically found in the ${animal.habitat} of ${animal.geo_range}.
							</p>`
    }
    catch(ex){
        console.error(ex);
    }
  
    
  
});

