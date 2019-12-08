huynh@Phis-MBP ~ % mkdir galaxy_far_far_away
huynh@Phis-MBP ~ % mkdir death_star
huynh@Phis-MBP ~ % cd death_star 
huynh@Phis-MBP death_star % touch darth_vader.txt
huynh@Phis-MBP death_star % touch princess_leia.txt
huynh@Phis-MBP death_star % touch storm_trooper.txt
huynh@Phis-MBP death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
huynh@Phis-MBP ~ % cd galaxy_far_far_away 
huynh@Phis-MBP galaxy_far_far_away % mkdir tatooine
huynh@Phis-MBP galaxy_far_far_away % cd tatooine 
huynh@Phis-MBP tatooine % touch luke.txt
huynh@Phis-MBP tatooine % touch ben_kenobi.txt
huynh@Phis-MBP tatooine % ls
ben_kenobi.txt	luke.txt
huynh@Phis-MBP tatooine % cd . 
huynh@Phis-MBP tatooine % ls
ben_kenobi.txt	luke.txt
huynh@Phis-MBP tatooine % mkdir millenium_falcon
huynh@Phis-MBP tatooine % cd millenium_falcon 
huynh@Phis-MBP millenium_falcon % touch han_solo.txt
huynh@Phis-MBP millenium_falcon % touch chewbaca.txt

huynh@Phis-MBP millenium_falcon % cd ..
huynh@Phis-MBP tatooine % ls
ben_kenobi.txt		luke.txt		millenium_falcon
huynh@Phis-MBP tatooine % mv ben_kenobi.txt obi_wan.txt
huynh@Phis-MBP tatooine % ls
luke.txt		millenium_falcon	obi_wan.txt

huynh@Phis-MBP death_star % cp storm_trooper.txt ../galaxy_far_far_away/tatooine
huynh@Phis-MBP tatooine % ls
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt

huynh@Phis-MBP tatooine % mv luke.txt millenium_falcon
huynh@Phis-MBP tatooine % mv obi_wan.txt millenium_falcon 
huynh@Phis-MBP millenium_falcon % ls
chewbaca.txt	han_solo.txt	luke.txt	obi_wan.txt
huynh@Phis-MBP tatooine % mv millenium_falcon/ ..
huynh@Phis-MBP galaxy_far_far_away % ls
millenium_falcon	tatooine
huynh@Phis-MBP galaxy_far_far_away % mv millenium_falcon ../death_star 
huynh@Phis-MBP death_star % ls
darth_vader.txt		princess_leia.txt
millenium_falcon	storm_trooper.txt
huynh@Phis-MBP death_star % mv princess_leia.txt millenium_falcon
huynh@Phis-MBP millenium_falcon % ls
chewbaca.txt		luke.txt		princess_leia.txt
han_solo.txt		obi_wan.txt

huynh@Phis-MBP millenium_falcon % rm obi_wan.txt
huynh@Phis-MBP millenium_falcon % ls
chewbaca.txt		luke.txt
han_solo.txt		princess_leia.txt

huynh@Phis-MBP galaxy_far_far_away % mkdir yavin_4
huynh@Phis-MBP death_star % mv millenium_falcon ../galaxy_far_far_away/yavin_4
huynh@Phis-MBP yavin_4 % ls
millenium_falcon
huynh@Phis-MBP yavin_4 % mkdir x_wing
huynh@Phis-MBP yavin_4 % ls
millenium_falcon	x_wing
huynh@Phis-MBP yavin_4 % 
huynh@Phis-MBP millenium_falcon % mv princess_leia.txt ../ 
huynh@Phis-MBP yavin_4 % ls
millenium_falcon	princess_leia.txt	x_wing
huynh@Phis-MBP millenium_falcon % mv luke.txt ../x_wing 
huynh@Phis-MBP x_wing % ls
luke.txt
huynh@Phis-MBP yavin_4 % mv millenium_falcon x_wing ../
huynh@Phis-MBP galaxy_far_far_away % ls
millenium_falcon	x_wing
tatooine		yavin_4
huynh@Phis-MBP death_star % mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
huynh@Phis-MBP death_star % ls
darth_vader.txt		tie_fighter_1		tie_fighter_3
storm_trooper.txt	tie_fighter_2
huynh@Phis-MBP death_star % mv darth_vader.txt tie_fighter_1
huynh@Phis-MBP death_star % cp storm_trooper.txt tie_fighter_2
huynh@Phis-MBP death_star % cp storm_trooper.txt tie_fighter_3
huynh@Phis-MBP death_star % mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ../galaxy_far_far_away

huynh@Phis-MBP galaxy_far_far_away % rm -r tie_fighter_2 tie_fighter_3

huynh@Phis-MBP x_wing % touch the_force.txt
huynh@Phis-MBP ~ % rm -r death_star
huynh@Phis-MBP galaxy_far_far_away % mv millenium_falcon x_wing yavin_4 
huynh@Phis-MBP galaxy_far_far_away % cd yavin_4 
huynh@Phis-MBP yavin_4 % ls
millenium_falcon	princess_leia.txt	x_wing


































