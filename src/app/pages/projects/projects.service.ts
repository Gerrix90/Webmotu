import { OnInit, Injectable } from '@angular/core';

export interface Project {
        id: number,
        image: string,
        name: string,
        role: string,
        pathname: string,
        description: string
}
@Injectable()
export class ProjectsService implements OnInit {

    projects: Project[] = [
        {
          id: 1,
          image: "../../../assets/img/h1z1/h1z1_splash_screen_before.jpg",
          name: "H1Z1",
          role: "UI/UX Programmer",
          pathname: "projects/h1z1",
          description: "A battle royale game in which up to 150 players compete against each other in a last man standing deathmatch."
        },
        {
          id: 2,
          image: "../../../assets/img/planetside2/planetside_screenshot17.jpg",
          name: "PLANETSIDE 2",
          role: "UI/UX Programmer",
          pathname: "projects/planetside2",
          description: "PlanetSide 2 is a Massively Multiplayer first person shooter that delivers massive combat on a truly epic scale."
        },
        {
          id: 3,
          image: "../../../assets/img/landmark/landmark_screenshot2.jpg",
          name: "LANDMARK",
          role: "UI/UX Programmer",
          pathname: "projects/landmark",
          description: "Landmark was a social building MMO that let you build anything you can imagine."
        },
        {
          id: 4,
          image: "../../../assets/img/cloneWars/clonewars_screenshot2.png",
          name: "CLONE WARS ADVENTURES",
          role: "UI/UX Programmer",
          pathname: "projects/clonewars",
          description: "Clone Wars was a Star Wars–themed massively multiplayer online game."
        },
        {
          id: 5,
          image: "../../../assets/img/freeRealms/free_realms_screenshot2.png",
          name: "FREE REALMS",
          role: "UI/UX Programmer",
          pathname: "projects/freerealms",
          description: "Free Realms was a massive multiplayer online role playing video game set in a fantasy-themed world named Sacred Grove."
        },
        {
          id: 6,
          image: "../../../assets/img/judyAlbrecht/judy_albrecht_landing_page.png",
          name: "JUDY ALBRECHT",
          role: "Web Development",
          pathname: "projects/judyalbrecht",
          description: "A Bootstrap based web application for Judy Albrecht,  Creative Services Director @ KFMB."
        },
        {
          id: 7,
          image: "../../../assets/img/foodWithFrances/foodwithfrances_screenshot1.png",
          name: "FOOD WITH FRANCES",
          role: "Web Development",
          pathname: "projects/foodwithfrances",
          description: "A Wordpress site for a local certified wine specialist and food blogger."
        },
        {
          id: 8,
          image: "../../../assets/img/adventureHydrology/adventurehydro_screenshot1.png",
          name: "ADVENTURE HYDROLOGY",
          role: "Web Development",
          pathname: "projects/adventurehydro",
          description: "A Wordpress site for video blogger and hydrologist Chris Wolff."
        },
      ];
    constructor(){}

    ngOnInit() {
    }

    getProjects() {
        return this.projects.slice();
    }
}