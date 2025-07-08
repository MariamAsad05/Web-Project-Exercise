
function displayAnimal(animal) {
    // Set the animal title
    var animalTitle = document.getElementById('animalTitle');
    animalTitle.textContent = animal;

    clearImages();
    clearDescription();

    if (animal === "Komodo Dragon") {
        komodo();
    }
    else if (animal === "Inland Taipan") {
        taipan();
    }
    else if (animal === "African Honey Bee") {
        bee();
    }
    else if (animal === "Box Jellyfish") {
        box();
    }
    else if (animal === "Saltwater Crocodile") {
        croc();
    }
    else if (animal === "Golden Poison Frog") {
        frog();
    }
    else if (animal === "Asian Giant Hornet") {
        hornet();
    }
    else if (animal === "Lionfish") {
        lion();
    }
    else if (animal === "Black Mamba") {
        mamba();
    }
    else if (animal === "Pufferfish") {
        puffer();
    }
    else if (animal === "Death Stalker") {
        scorp();
    }
    else if (animal === "Great White Shark") {
        shark();
    }
    else if (animal === "Armed Spider") {
        spider();
    }
    else if (animal === "Saw Scaled Viper") {
        viper();
    }

}

function clearImages() {
    document.getElementById("image1").setAttribute("src", "");
    document.getElementById("image2").setAttribute("src", "");
    document.getElementById("image3").setAttribute("src", "");
}
function clearDescription() {
    document.getElementById("descriptionBox").innerHTML = "";
}

function komodo() {
    document.getElementById("image1").setAttribute("src", "images/drag/dragon1.jpg");
    document.getElementById("image2").setAttribute("src", "images/drag/dragon2.jpg");
    document.getElementById("image3").setAttribute("src", "images/drag/dragon3.jpg");

    document.getElementById("descriptionBox").innerHTML=" <div class='description-title'>Facts about Komodo Dragon</div> <div class='description-content'> <p>They are the largest lizards on Earth. In fact, they can grow up to ten feet long and can weigh up to 154 pounds! Unlike a snake, which injects venom into a victim through its sharp fangs, a Komodo Dragon's venom seeps into large wounds it makes on its prey. A lesser-known fact about them is that they are only present on five Indonesian Islands. </p></div>";
}
function taipan() {
    document.getElementById("image1").setAttribute("src", "images/taipan/taipan1.jpg");
    document.getElementById("image2").setAttribute("src", "images/taipan/taipan2.jpg");
    document.getElementById("image3").setAttribute("src", "images/taipan/taipan3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Inland Taipan</div> <div class='description-content'> <p>The inland taipan is the most venomous snake in the world. The Inland Taipan's venom is extremely toxic. It contains a mix of potent neurotoxins that can cause paralysis and respiratory failure in prey. To help them regulate their body temperature, they become lighter in color in summer and darker in winter. They have only one predator which is the Mulga snake.</p></div>";


}
function bee() {
    document.getElementById("image1").setAttribute("src", "images/bee/bee1.jpeg");
    document.getElementById("image2").setAttribute("src", "images/bee/bee2.jpg");
    document.getElementById("image3").setAttribute("src", "images/bee/bee3.jpeg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about African Honey Bee</div> <div class='description-content'> <p>They are the most poisonous fishes in the sea. They are also the only fishes that can close their eyes. When attacked or threatened, they inflate themselves by gulping water into their extended stomach and make themselves look larger.They are considered dangerous due to the presence of a potent neurotoxin called tetrodotoxin in their tissues, particularly in their liver, ovaries, and skin. Tetrodotoxin is a powerful toxin that can cause paralysis and, in high doses, lead to respiratory failure and death</p></div>";

}
function box() {
    document.getElementById("image1").setAttribute("src", "images/boxjelly/jelly1.jpg");
    document.getElementById("image2").setAttribute("src", "images/boxjelly/jelly2.jpg");
    document.getElementById("image3").setAttribute("src", "images/boxjelly/jelly3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Box Jellyfish</div> <div class='description-content'> <p>Found in the waters of the Indo-Pacific region, the box jellyfish is one of the most venomous creatures in the world. Its bell-shaped body and long tentacles contain toxins that can cause heart failure and death in humans. The jellyfish is transparent, making it difficult to spot in the water, and its sting is often extremely painful. Encounters with box jellyfish can be life-threatening, and prompt medical attention is crucial.</p></div>";

}
function croc() {
    document.getElementById("image1").setAttribute("src", "images/croc/crocodile1.jpg");
    document.getElementById("image2").setAttribute("src", "images/croc/crocodile2.jpg");
    document.getElementById("image3").setAttribute("src", "images/croc/crocodile3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Saltwater Crocodile</div> <div class='description-content'> <p>These are the largest reptiles in the world. These deadly predators have around 68 sharp teeth. Saltwater crocodiles have a diverse diet that includes fish, birds, and mammals, including larger prey like water buffalo and other large mammals. Their ability to take down large prey contributes to their dangerous reputation. It is interesting to note that the temperature surrounding their eggs determines their gender. Females are produced in lower temperatures while high temperatures produce males.</p></div>";

}
function frog() {
    document.getElementById("image1").setAttribute("src", "images/frog/frog1.jpg");
    document.getElementById("image2").setAttribute("src", "images/frog/frog2.jpg");
    document.getElementById("image3").setAttribute("src", "images/frog/frog3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Golden Poison Frog</div> <div class='description-content'> <p>When I look at this frog, I understand when people say something is beautiful, yet dangerous (idk know if people actually say that, but let's pretend that they do). Native to the rainforests of western Colombia, the golden poison frog is one of the most toxic animals on Earth. The vibrant golden coloration serves as a warning to potential predators about its potent skin toxins, which are derived from its diet in the wild. Indigenous people have used the frog's toxins to poison their blowgun darts for hunting.</p></div>";

}
function hornet() {
    document.getElementById("image1").setAttribute("src", "images/hornet/hornet1.jpg");
    document.getElementById("image2").setAttribute("src", "images/hornet/hornet2.jpg");
    document.getElementById("image3").setAttribute("src", "images/hornet/hornet3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Asian Giant Hornet</div> <div class='description-content'> <p>I’m 99% sure we both thought the same thing once we saw this picture. “It’s a bee”. You’re not wrong, but I bet you didn’t know the Africanized Honey Bee is nicknamed “the killer bee”. These bees are known for their aggressiveness and tendency to swarm in large numbers. The venom in their bites is no more potent than any other bee, the reason many have died from these “killer bee” attacks is because they can chase for up to half a kilometre, and have a significantly lower tolerance to threats than other subspecies.</p></div>";

}
function lion() {
    document.getElementById("image1").setAttribute("src", "images/lion/lion1.jpg");
    document.getElementById("image2").setAttribute("src", "images/lion/lion2.jpg");
    document.getElementById("image3").setAttribute("src", "images/lion/lion3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Lionfish</div> <div class='description-content'> <p>The lionfish earns its name from the fan-like configuration of its extended dorsal fins and slender pectoral fins, which bear a resemblance to a lion's mane. They utilize their 13 elongated fins, extending from the spine, as a venomous defense mechanism to ward off predators. They are aggressive hunters and hunt over 50 species of fish.</p></div>";

}
function mamba() {
    document.getElementById("image1").setAttribute("src", "images/mamba/black1.jpg");
    document.getElementById("image2").setAttribute("src", "images/mamba/black2.jpg");
    document.getElementById("image3").setAttribute("src", "images/mamba/black3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Black Mamba</div> <div class='description-content'> <p>You may have heard of all kinds of snakes, but I assure you, none of them would compare to this baddie. Looking at this snake, you would assume it is nothing but a harmless creature with beautiful eyes, but you’re wrong. Despite its soft looks, the Black Mamba is one of the deadliest snakes in the entire world. It is native to parts of sub-Saharan Africa, and is known for its ability, speed, and the potent neurotoxic venom delivered through its bites.</p></div>";

}
function puffer() {
    document.getElementById("image1").setAttribute("src", "images/pufferfish/fish1.jpg");
    document.getElementById("image2").setAttribute("src", "images/pufferfish/fish2.jpg");
    document.getElementById("image3").setAttribute("src", "images/pufferfish/fish3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Pufferfish</div> <div class='description-content'> <p>They are the most poisonous fishes in the sea. They are also the only fishes that can close their eyes. When attacked or threatened, they inflate themselves by gulping water into their extended stomach and make themselves look larger.They are considered dangerous due to the presence of a potent neurotoxin called tetrodotoxin in their tissues, particularly in their liver, ovaries, and skin. Tetrodotoxin is a powerful toxin that can cause paralysis and, in high doses, lead to respiratory failure and death</p></div>";

}

function scorp() {
    document.getElementById("image1").setAttribute("src", "images/scorp/scorpion1.jpeg");
    document.getElementById("image2").setAttribute("src", "images/scorp/scorpion2.jpeg");
    document.getElementById("image3").setAttribute("src", "images/scorp/scorpion3.jpeg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Death Stalker</div> <div class='description-content'> <p>Alas, my personal favourite. The DeathStalker Scorpion. This scorpion truly lives up to its name. It has been the cause of 2,600 deaths reported each year from scorpion stings. It has a sting that is extremely venomous, and painful. Elderly, individuals with weaker immune systems, and children are more likely to face a severe reaction of the stung. Despite its small size, the deathstalker's venom contains a mix of toxins that can affect the nervous system and vital organs. It’s little, but lethal.</p></div>";

}


function shark() {
    document.getElementById("image1").setAttribute("src", "images/shark/shark1.jpg");
    document.getElementById("image2").setAttribute("src", "images/shark/shark2.jpg");
    document.getElementById("image3").setAttribute("src", "images/shark/shark3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Great White Shark</div> <div class='description-content'> <p>Measuring about 4.5 m in length, they are the world’s biggest predatory fish (as the name suggests ‘The Great White Sharks’). They are believed to have been around even before the dinosaurs. Another fact about these sharks is that their blood is very toxic being high in arsenic and mercury levels. Shark embryos eat their weaker siblings in the womb to keep growing.</p></div>";

}
function spider() {
    document.getElementById("image1").setAttribute("src", "images/spid/spider1.jpeg");
    document.getElementById("image2").setAttribute("src", "images/spid/spider2.jpeg");
    document.getElementById("image3").setAttribute("src", "images/spid/spider3.jpeg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Armed Spider</div> <div class='description-content'> <p>Armed spiders or the Brazilian Wandering Spider, as known to be a threat to human lives. Individuals who have encountered this spider have reported experiencing paralysis, seizures, and foaming at the mouth. Because of their elongated front legs, they are known as armed spiders. They have enormous venom glands, the largest of any spider.</p></div>";

}
function viper() {
    document.getElementById("image1").setAttribute("src", "images/viper/viper1.jpg");
    document.getElementById("image2").setAttribute("src", "images/viper/viper2.jpg");
    document.getElementById("image3").setAttribute("src", "images/viper/viper3.jpg");

    document.getElementById("descriptionBox").innerHTML = " <div class='description-title'>Facts about Saw Scaled Viper</div> <div class='description-content'> <p>Stop. Before I go any further, I need you to take a good, long look at this beautiful creature. God took his time with this one. The saw-scaled viper is a venomous snake found in parts of the Middle East, Africa, and the Indian subcontinent. It gets its name from the saw-like keeled scales along its back, which it rubs together to produce a distinctive hissing sound as a warning. This small but highly venomous snake poses a significant threat to humans and is responsible for many snake bite incidents in its native range.</p></div>";

}

