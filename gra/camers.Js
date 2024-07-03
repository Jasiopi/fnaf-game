let monster_in_corridor=0;
let clock_digit=0;
let battery=1500;
let play_ring=false;
let use_battery=false;
let secund=0;

const door=document.getElementById("door1");
const see_hall=document.getElementById("see_hall");
let live=setInterval(function(){
    loop(use_battery);
}, 1000)
door.addEventListener("mouseover",function() { monster_in_door(monster_in_corridor); use_battery=true;});
door.addEventListener("mouseout",function() { document.getElementById("door1").src="img/door_fake.png"; console.log("see_door"); use_battery=false;});


function loop(use_battery){
    secund=secund+1;
    lack_battery(use_battery);
    if(secund==5){
        monster()
        secund=0
    }
    console.log(secund)


}

function battery_image(){
    if(battery<700){
        document.getElementById("zegar_1_1").src="img/battery2.png";
    }

    if(battery<350){
        document.getElementById("zegar_1_1").src="img/battery3.png";
    }

    if(battery<175){
        document.getElementById("zegar_1_1").src="img/battery3.png";
    }

    if(battery<87){
        document.getElementById("zegar_1_1").src="img/battery4.png";
    }

    if(battery<43){
        document.getElementById("zegar_1_1").src="img/battery5.png";
    }

    if(battery<20){
        document.getElementById("zegar_1_1").src="img/battery6.png";
    }

    if(battery<=0){
        ending()
    }
}

function lack_battery(use_battery){
    if(use_battery==true){
        battery=battery-1
    }
    console.log(battery,use_battery)

    battery_image()
}

function monit(){
    console.log("asd");
    document.getElementById("window1").style.display="none";
    document.getElementById("window2").style.display="block";
    use_battery=true;
}

function Back_to_room(){
    console.log("asd");
    document.getElementById("window1").style.display="block";
    document.getElementById("window2").style.display="none";
    document.getElementById("window4").style.display="none";
    use_battery=false;
}

function info(){
    console.log("asd");
    document.getElementById("window1").style.display="none";
    document.getElementById("window2").style.display="none";
    document.getElementById("window4").style.display="block";
}

function change_camer(number_of_camer){
    console.log(number_of_camer);
    switch(number_of_camer){
        case 1:
            see_hall.src="img/hall/hall1.jpg";
            if (monster_in_corridor==1){
                see_hall.src="img/hall/horror/hall1_horror.jpg";
            }
            break;
        case 2:
            see_hall.src="img/hall/hall2.jpg";
            if (monster_in_corridor==2){
                see_hall.src="img/hall/horror/hall2_horror.jpg";
            }
            break;
        case 3:
            see_hall.src="img/hall/hall3.jpg";
            if (monster_in_corridor==3){
                see_hall.src="img/hall/horror/hall3_horror.jpg";
            }
            break;
        case 4:
            see_hall.src="img/hall/hall4.jpg";
            if (monster_in_corridor==4){
                see_hall.src="img/hall/horror/hall4_horror.jpg";
            }
            break;
        case 5:
            see_hall.src="img/hall/hall5.jpg";
            if (monster_in_corridor==5){
                see_hall.src="img/hall/horror/hall5_horror.jpg";
            }
            break;
        case 6:
            see_hall.src="img/hall/hall6.jpg";
            if (monster_in_corridor==6){
                see_hall.src="img/hall/horror/hall6_horror.jpg";
            }
            break;
    }
}

function monster(){
        clock_digit+=1;
        clock();
        monster_in_corridor+=1;
        console.log("monster in ",monster_in_corridor," hall");
        if(monster_in_corridor==7){
            monster_in_corridor=1;
        }

        if(monster_in_corridor==4){
            play_ring=false;
            setTimeout(function(){
                if(play_ring==false){
                    ending();
                    }
                },
                4000
            )
        }

}

function click_ring() {
    battery=battery-100;
    play_ring=true;
    document.getElementById("ring_1").play();
    setTimeout(function(){
        document.getElementById("ring_1").pause();
        },
        1000
    )
}

function monster_in_door(monster_in_corridor){
    console.log("see_door");
    if(monster_in_corridor==4){
        document.getElementById("door1").src="img/korytarz1_horror.jpg";
    }
    else{
        document.getElementById("door1").src="img/door_fake.png";
    }
}

function clock(){
    console.log("test clock",clock_digit/12,clock_digit);
    if(clock_digit%12==0){
        console.log("next hour",clock_digit/12);
        let clock_time="0"+Math.round(clock_digit/12)+":00";
        document.getElementById("zegar_1").innerText=clock_time;
    }
    end_1=document.getElementById("end_1");
    if(clock_digit>=72){
        clearInterval(live)
        console.log("game over");
        document.getElementById("window1").style.display="none";
        document.getElementById("window2").style.display="none";
        document.getElementById("window3").style.display="block";
        document.getElementById("window4").style.display="none";
        end_1.innerHTML="you live, congratulations";
        document.getElementById("winning").play();
    }
}

function ending(){
    clearInterval(live)
    live=false;
    document.getElementById("computer_1").style.display="none";
    document.getElementById("window1").style.display="block";
    document.getElementById("window2").style.display="none";
    document.getElementById("window4").style.display="none";
    document.getElementById("ring_1").play();
    document.getElementById("fan").style.display="none";
    document.getElementById("info").style.display="none";
    document.getElementById("window1").style.backgroundImage="url('img/biuro_kill.png')";
    document.getElementById("window2").style.display="none";
    document.getElementById("ring").style.display="none";
    document.getElementById("wall1").style.display="none";
    setTimeout(function() {
        console.log("game over");
        document.getElementById("window1").style.display="none";
        document.getElementById("window2").style.display="none";
        document.getElementById("window3").style.display="block";
            end_1.innerHTML="you dead, pathetic";
    }, 1000);

        
}
