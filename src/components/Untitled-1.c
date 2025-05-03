
*{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
}
.wrapper
{
                    overflow-x: hidden;
                    /* overflow-y: auto; */
                    /* perspective: 30px; */
                    perspective: 1000px;
                    height: 100vh;
                     /*its height of display or view port*/
                    width: 100vw;/*its width of display or view port*/
                    /*this is true and checked by me height: 100%; dont work as %works relative to its immediate parent and parent is body tag which might not have width or height set or may be they have but very low*/
                    /* width: 100%; */
                    
                    

}


/*point1) ye  ek parent flex hae bcoz i used display : flex means all child items gonna display row wise horizontally
left to right touching top to bottom == flex-direction=row*/
.container
{                   
                    z-index: -1; /*here i need bcoz wrna niche ke text jo leekhra mae after this container wo iskae pichae chup jaarae h*/
                    /* width: 100vw; */
                    /* height: 100vh; */
                    height: 100%;
                    /* border: 10px solid palevioletred; */
                    position: relative; /*point2 jaan bujkr maine reative ke mai nonstatic mae fixed sticky b use kr skta hu
                    but iske need nae hae bcoz may be images agr absolute hae to nearest amcestor body tag or upr koe tag mae
                    position non static hoge 1lakh% sure i am BUT LETS GIVE TO GIVE MEAN TO POSITION ABSOULTE FOR IMAGES*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;/*@1*/
                    align-items: center;/* POINT3) @2*/ /*by @1 and @2 adventure text beech mae aagya or images b in a sense but uskae
                    saath mai 3d game khelunga to wo oerlapppeed deelhege bcoz of absoluteposition and perspective preserver3d and translatez
                    so overlapped chipak jayege if i dont use perserve3d translatez THAN ALSO KAAM BNJAYEGA but BY TRANSLAYE Z ACTUALLY if i use than overlapped and little distance between each
                    PRESERVER 4D WALE CHEEZ MORE COMPLEX 3D REALISTIC STRUCTURE MAE DEEKHEGA AFFECT MAY BE INF INNER CONTAINER HAVE MANY THINGS(ELEMENNTS(TAG))
                    */
                    /*POINT4 bottom: 30px; iske b need ne h + yhaa z-index ke need ne hae bcoz hm kaam images pr kr rahe h*/


                    transform-style: preserve-3d;
                    /*Point4) !!IMP ye ek traah sae button hae 3d game ..actually overlap krwa para hu
                    position absolute sae ,trasnlate z sae unko z axis mae aage peeche krra ,bridge bnaara hu perspective sae,but
                    wo translate z wala affect + position absolute ke baad 2d mae chipak gaye unko actually translatez ke hisaab sae dur bhejnae mae
                    muje ye property use krne padi! */

                    
/* 
                                  **************POINT5) SO LAYERING WALE CHEEZ HANDLE HM KRTAE HAI BY Z INDEX***************                                   
                    //JB MAINE DISPLAY FLEX KEEYA TO IMAGE AND HEADING TEENO EK LINE MAEE AGYAE HORIZONTALLY
                    BUT BOTH IMAGES GOT OVERLAPPED AND STICK DUE TO ABSOLUTE POSITIONING BCOZ OF IT TEXT ADVENTURE CHUUP GYAA
                    SO LAYERING WALE CHEEZ HANDLE HM KRTAE HAI BY Z INDEX*/
                    
}


/* POINT6 background flex item hae bcoz container jismae ye hae wo flex hae means parent flex */
#background
{
                    transform: translateZ(-2500px) scale(4); /*point6.2) actually mae parallax affect is wjah sae aata h
                    bcoz images dur jayege to wo tej building suraj aaram sae wo wali game deekhege*/

                    /* z-index: -10; */
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    z-index: -1;
                    object-fit: cover; /*Point6.1) is sae image bilkul perfect deekhege sare images fit hojayege screen mae aspect ration mae
                    and images stretched gandi nahi deekhege*/
                    
                    
                    /*Point7 background foreground 3no ek he line mae hae being display flex
                    and justify-content: center; align-items: center;
                    BUT BCOZ 2IMAGES I PLACED ABSOLUTE THEY ARE OVERLAPPING
                    BUT STICKED WITH EACH OTHER ON OVERLAP POSTION EK DM CHIPAK GYI PICTURE DONO(FOREGROUND AND BACKGROUND) TO MAKE THEM PLAY IN 3D I HAD TO USE 
                    SO I HAD TO USE PRESERVER STYLE 3D FOR BUTTON ON(where i created bridge) 
                    but i commented it prserverstyle still it seemed working to me*/

}

/*POINT8 foreground ek flex item hae bcoz container jismae ye hae wo flex hae means parent flex */
#foreground
{
                    position: absolute;
                    height: 100%;
                    width: 100%;
                   transform: translateZ(-135f0px) scaleY(2.5) scaleX(2.7) ; /*point6.2) actually mae parallax affect is wjah sae aata h
                   bcoz images dur jayege to wo tej building suraj aaram sae wo wali game deekhege*/

                    /* transform: translateZ(-20px) scale(3.2); */
                    z-index: -1;
                    object-fit: cover;
}

/*POINT9)  h1 ek flex item hae bcoz container jismae ye hae wo flex hae means parent flex */
/* h1{ */
#hh{
                    
                    /* object-fit: cover; */
                    /* position: relative; */
                    position: absolute;
                    /*point 6.3 ye absolute sae center aa para hae overlap + absolute deeya so mae top pr leejao*/
                    /* right: 850px; */
                    /* right: 48vw; */
                    /* border: 2px solid black; just to see child flex container i could create container outside of h1 but i want as h1 itself is block element means a container */
                    /* justify-self: end; */
                    /* width: 200px; */
                    /* height: 80px; */
                    /* z-index: 1; */
                    /* justify-self: center; */
                    
                    color: whitesmoke;
                    /* font-size: 200px; */
                    font-size: 8rem;
                    font-weight: 900;
                    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
                    top: 30px;
                    font-family: italic;

                    text-shadow: 10px 10px 20px red;
                    
                    

}

section
{
                    background-color: rgb(45,45,45);
                    color: white;
                    padding: 5rem0;
}

/* .UI UX DESIGNER WEBSITE RAW DEGA DUMMY USKO EXACT DEVELOP WEBSITE DEVELOPER KRTAE H */

/* NOTE IMP POSTION MAE HIT AND TRIAL KRO BHOT ZORR DALKR POSITION HMESHA CLEAR RAHGEA */
.bg{ /*ye bg div  mae ek class hae */
                    
                    /* border: 5px solid red; */
                    
                    /*point 6.3.1 position sticky and relative sae bg class jo ke div ke hae wo mid pr aa ska
                    due to relative to its normal positon */
                    /* position: sticky;  */
                    /* position: relative; */
                    
                    width: 100%;
                    background-attachment: fixed;
                    /*vvvvvvvvimp ->FINAL IMP POINT THIS WAS FINAL GAME CHANGER POINT 
                     JIS SAE webpage  SCROLL HONAE PR image WHI FIXED RAHEGE BAKI TEXT UPR AAGYA USKAE why?
                     bcoz  actually mai text p tag ke andr hae or wo block element hae to actually mae wo image ke baadd ayaa
                     but bcoz i used image fixed that is why wo text uskae upr overlap krra hae thats it!!
                    ab ye or bcoz maine image bg1 is class on div and bg is class of div  img
                    */

                    /* //image whii fix hojayege or us pr scroll kr sktahu */
                    height: 500px;
                    
                    
                    
                    /*point 6.4 IMPVVVVVV
                    /* background-position: center;  */
                    /* background-size: cover; */
                    /*background-position center sae image center mae aajyege jo fixed hae
                    kuke wo pure screen width jitne nee aare but uske baad pure traah se center mae lanae ko
                    background-size:cover krdo ke mere image ke height and width jitne display hae utne krdo in dono property sae
                    mere screen pr images bilkul center aajyege but ye mai div pr krra hu jiske class bg hae  and   jo b uske child tag hae para and heading vgara 
                    uspae ye reflect hoga SO IT MEANS MAI IMAGES PR B INDIVIDUAL BG1 CLASS MAE JAAKR LGAA SKTA HU YAE*/
                    font-weight: bolder;
                    font-family: arial;

                    background-image: url(sport-2.jpg);
                    background-image: url(sport-2.jpg);
                    background-image: url(sport-3.jpg);
                    background-size: cover;
                    background-position: center;
                    position: relative;
}


/* POINT10 img and background img diff is more clear iguess */
/*is heading ke piche image aajyege*/




/* dont confuse bg1 is of image no its div only i used this to put diff -diff image thats it */
 /* THESE 3 PROPERTY I APPLIED SO I CAN BRING IMAGES IN CENTER + HEADING IN CENTER AND THATS ALL I CAN DO INDIVIDUAL
 OR INSIDE DIV BG ,I ONLY USED DIV BG1 BG 2 BG3 FOR PUTTING DIFF IMAGES 
 background-size: cover;
                    background-position: center;
                    position: relative; */
.bg1 
{
                    
                    background-image: url(sport-1.jpg);
                    /* background-size: cover;
                    background-position: center;
                    position: relative; */
}

/*is heading ke piche image aajyege*/
.bg2
{
                    background-image: url(sport-2.jpg);
                    /* background-size: cover;
                    background-position: center;
                    position: relative;*/
}

/*is heading ke piche image aajyege*/
.bg3
{
                    background-image: url(sport-3.jpg);
                    /* background-size: cover;
                    background-position: center; */
                    /* position: relative;  */

}


/* /dont insecure ye units ui/ux designer dedega */
.secheading /*for heading biking paragliding etc*/
{
                    font-size: 5rem;
                    padding: 0 15rem;
                    /* border: 2px solid brown; */
                    /* margin:  1rem; */
}
.text /*for paragraph*/
{
                    font-size: 1.5rem; 
                    padding: 0 10rem; 
                    margin: 5rem 0;
                    
                    /* position: absolute;  */
                    
}

.description
{
                    
                    /* border: 8px solid pink; */
                    position:relative;
                    /* display: inline; */
                    display: inline-block;

/* imp**************INLINE AND INLINE BLoCK diff*******************
 is both is inline but inline block also behave as block element whose height and width i can give
inline element kae saath ek or element aa skta hae parallel mae but uske height and width nae deskta mae */

                    /* right: 50%; */
                    /* font-size: 200px; */
                    font-size: 4rem;
                     /*rem size is relative to its parent thats why it gets responsive most of time i seen*/
                    background-color: white;
                    /* padding: 0.5rem 2.5rem; */
                    top: 50%;
                    left: 50%;
                    color: black;
                    transform: translateX(-50%);
}






/* BIG list FOR RESPONSIVE WEBSITE FEW THINGS I WILL WRITE HERE */

/* ..maybei will use all this is imgscreen tag2 */
/* 
#IN FLEX BOX USE -> DISPLAY-WRAP SO THING WILL COLUMN WISE
#DISPLAY: GROW(FOR LARGER SCREEN) OR SHRINK FOR SMALLER SCREEN 
#use font rem better its relative to its parent or use % it will work too px is of fix length so avoid it */