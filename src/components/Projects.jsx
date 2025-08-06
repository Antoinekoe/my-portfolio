import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-10 bg-[#0D1116] text-white px-8">
      <h2 className="text-4xl font-bold">Projets personnels</h2>
      <div className="flex flex-col gap-5">
        <img src="/projects/ly1.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">Ly1</h3>
        <span>
          Un raccourcisseur de liens et créateur de QR codes, avec la
          possibilité de créer son compte et d'avoir accès à une interface
          administrateur
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <img src="/projects/kalai.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">Kalai</h3>
        <span>
          Un SaaS IA qui permet de générer des articles, des titres d'articles,
          de générer des images, enlever un fond et/ou un objet dans une image
          et avoir un avis sur un CV
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <img src="/projects/getall.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">GetALL</h3>
        <span>
          Un site e-commerce général permettant de choisir ses articles parmi
          une liste de produits venant d'une API
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <img src="/projects/mac-find.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">Mac Find</h3>
        <span>
          Un site permettant de géolocaliser les McDonalds en fonction de la
          ville choisie
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <img src="/projects/gamescore.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">Game Score</h3>
        <span>
          Un site permettant de donner des notes à des jeux-vidéos, en fonction
          d'une liste provenant de l'API IGDB
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <img
          src="/projects/lileoinformatique.webp"
          className="rounded"
          alt=""
        />
        <h3 className="text-2xl font-bold">Lileo Informatique</h3>
        <span>Un site vitrine pour un magasin d'informatique</span>
      </div>
      <div className="flex flex-col gap-5 pb-10">
        <img src="/projects/elsalehoux.webp" className="rounded" alt="" />
        <h3 className="text-2xl font-bold">Elsa Lehoux</h3>
        <span>Un portfolio pour une graphiste</span>
      </div>
    </div>
  );
};

export default Projects;
