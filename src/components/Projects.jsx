import React from "react";

const Projects = () => {
  return (
    <div
      className=" bg-[#F8F9FA] dark:bg-[#0D1116] text-black dark:text-white px-8"
      id="projets"
    >
      <div className="flex flex-col gap-10 py-15 lg:max-w-[1500px] lg:mx-auto">
        <h2 className="text-4xl font-bold">Projets personnels</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <a href="https://ly1.fr/" target="_blank" rel="noopener noreferrer">
              <img
                src="/projects/ly1.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Ly1</h3>
            <span>
              Un raccourcisseur de liens et créateur de QR codes, avec la
              possibilité de créer son compte et d'avoir accès à une interface
              administrateur
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://kalai-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/kalai.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Kalai</h3>
            <span>
              Un SaaS IA qui permet de générer des articles, des titres
              d'articles, de générer des images, enlever un fond et/ou un objet
              dans une image et avoir un avis sur un CV
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://get-all.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/getall.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">GetALL</h3>
            <span>
              Un site e-commerce général permettant de choisir ses articles
              parmi une liste de produits venant d'une API
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://mac-find.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/mac-find.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Mac Find</h3>
            <span>
              Un site permettant de géolocaliser les McDonalds en fonction de la
              ville choisie
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://game-score-production-fae0.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/gamescore.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Game Score</h3>
            <span>
              Un site permettant de donner des notes à des jeux-vidéos, en
              fonction d'une liste provenant de l'API IGDB
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://www.lileo-informatique.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/lileoinformatique.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Lileo Informatique</h3>
            <span>Un site vitrine pour un magasin d'informatique</span>
          </div>
          <div className="flex flex-col gap-5 pb-10">
            <a
              href="https://elsalehoux.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/elsalehoux.webp"
                className="rounded transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </a>
            <h3 className="text-2xl font-bold">Elsa Lehoux</h3>
            <span>Un portfolio pour une graphiste</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
