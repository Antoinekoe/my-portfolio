const Expertise = () => {
  return (
    <div
      className="bg-[#F8F9FA] dark:bg-[#0D1116] px-8 text-black dark:text-white pt-10"
      id="expertise"
    >
      <div className="flex flex-col gap-10 pt-25 pb-10 items-start lg:max-w-[1500px] mx-auto">
        <h2 className="text-4xl font-bold">Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col items-start gap-3">
            <img
              className="h-[40px] brightness-0 dark:brightness-0 dark:invert"
              src="/doodles/hero/react.svg"
              alt="Decorative React icon"
            />
            <h3 className="font-bold text-lg">Développement web Full Stack</h3>
            <span>
              Je développe des applications web à partir de zéro en utilisant
              des technologies modernes telles que React ou encore Nodejs.
            </span>

            <div className="flex flex-wrap gap-2 items-center pb-10">
              <span>Stack technique :</span>
              <span className="techStack">React</span>
              <span className="techStack">Nodejs</span>
              <span className="techStack">JavaScript</span>
              <span className="techStack">PostgreSQL</span>
              <span className="techStack">Express</span>
              <span className="techStack">HTML5</span>
              <span className="techStack">CSS3</span>
              <span className="techStack">GitHub</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <img
              className="h-[40px] brightness-0 dark:brightness-0 dark:invert"
              src="/doodles/expertise/wordpress.svg"
              alt="Decorative WordPress icon"
            />
            <h3 className="font-bold text-lg">Création de sites WordPress</h3>
            <span>
              Je crée des sites web avec WordPress, du recueil du besoin à la
              mise en ligne, en passant par l'optimisation de la performance et
              du référencement.
            </span>

            <div className="flex flex-wrap gap-2 items-center pb-10">
              <span>Stack technique :</span>
              <span className="techStack">WordPress</span>
              <span className="techStack">Figma</span>
              <span className="techStack">Elementor Pro</span>
              <span className="techStack">Hello Elementor</span>
              <span className="techStack">Photoshop</span>
              <span className="techStack">Illustrator</span>
              <span className="techStack">InDesign</span>
              <span className="techStack">HTML5</span>
              <span className="techStack">CSS3</span>
              <span className="techStack">JavaScript</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <img
              className="h-[40px] brightness-0 dark:brightness-0 dark:invert"
              src="/doodles/expertise/handshake.svg"
              alt="Decorative Handshake icon"
            />
            <h3 className="font-bold text-lg">
              Gestion de projets digitaux et webmastering
            </h3>
            <span>
              Je coordonne et optimise le fonctionnement de multiples supports
              web (Sites web, fiches Google, réseaux sociaux) en assurant leur
              performance technique, leur conformité aux standards actuels et
              leur pertinence stratégique pour les objectifs d'entreprise.
            </span>

            <div className="flex flex-wrap gap-2 items-center pb-10">
              <span>Stack technique :</span>
              <span className="techStack">Jira</span>
              <span className="techStack">WordPress</span>
              <span className="techStack">Jahia</span>
              <span className="techStack">Google Analytics</span>
              <span className="techStack">AT Internet</span>
              <span className="techStack">Google Business Profile</span>
              <span className="techStack">SEMrush</span>
              <span className="techStack">Slack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
