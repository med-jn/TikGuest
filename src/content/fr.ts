import type { Dict } from "./types";

const fr: Dict = {
  lang: "fr",
  dir: "ltr",
  locale: "fr",
  langName: "Français",
  nav: {
    home: "Accueil",
    rules: "Règles",
    terms: "Conditions",
    privacy: "Confidentialité",
    deleteAccount: "Supprimer le compte",
    menu: "Menu",
  },
  common: {
    updated: "Dernière mise à jour",
    toc: "Sur cette page",
    backHome: "Retour à l’accueil",
    contactUs: "Contact",
    notAffiliated:
      "TikGuest est une application indépendante. Elle n’est ni affiliée, ni approuvée, ni sponsorisée par TikTok, ByteDance, Google ou ElevenLabs. TikTok est une marque de ses propriétaires.",
    rights: "Tous droits réservés.",
    languages: "Langue",
    skip: "Aller au contenu",
  },
  home: {
    metaTitle: "TikGuest | Votre invité IA pour les lives TikTok",
    metaDesc:
      "TikGuest est une application Android qui crée un invité vocal par IA, avec la voix et le dialecte de votre choix, qui répond uniquement avec les connaissances et les règles que vous ajoutez, dans vos lives TikTok.",
    badge: "Application Android · indépendante de TikTok",
    title: "Votre invité IA dans",
    titleAccent: "chaque live",
    sub: "Créez un personnage avec la voix et le dialecte de votre choix, donnez-lui vos connaissances et vos règles, puis laissez-le discuter avec vous comme invité dans vos lives TikTok. Il ne répond qu’avec ce que vous avez ajouté, et se tait quand on ne s’adresse pas à lui.",
    ctaPlay: "Télécharger sur Google Play",
    ctaSoon: "Bientôt sur Google Play",
    ctaHow: "Comment ça marche ?",
    micAlt: "Logo TikGuest : un microphone",
    stepsTitle: "Trois étapes pour commencer",
    steps: [
      {
        t: "Créez votre personnage",
        d: "Connectez-vous avec Google, puis choisissez le nom de l’invité, son dialecte (13 dialectes arabes) et sa voix : 30 voix Gemini ou une voix ElevenLabs.",
      },
      {
        t: "Donnez-lui vos connaissances",
        d: "Ajoutez les informations et les règles qu’il doit respecter. Toute question hors de ce cadre reçoit une réponse courte et est enregistrée pour que vous puissiez compléter plus tard.",
      },
      {
        t: "Lancez-le dans le live",
        d: "Ajoutez votre propre clé Gemini, accordez les autorisations et ouvrez le live. Tout se pilote depuis un panneau flottant au-dessus de TikTok.",
      },
    ],
    featuresTitle: "Tout ce qu’il faut à un vrai invité",
    features: [
      {
        t: "Voix et dialectes",
        d: "30 voix Gemini, 13 dialectes arabes, un style d’interprétation à choisir, ou une voix ElevenLabs que vous avez le droit d’utiliser.",
      },
      {
        t: "Conversation naturelle",
        d: "Il distingue quand on s’adresse à lui et quand se taire, et n’interrompt personne au milieu d’une phrase.",
      },
      {
        t: "Vos connaissances font foi",
        d: "Il répond aux questions factuelles uniquement avec ce que vous avez ajouté. Il ne devine pas et n’utilise pas d’informations extérieures.",
      },
      {
        t: "Règles strictes",
        d: "Définissez ce qu’il peut dire et ne pas dire. Vos règles passent avant tout le reste.",
      },
      {
        t: "Mémoire optionnelle",
        d: "Il peut retenir des prénoms et des détails d’un live à l’autre. Cette option est désactivée par défaut et ne fonctionne que si vous l’activez.",
      },
      {
        t: "Panneau de contrôle et signalement",
        d: "Un panneau flottant pour piloter le live, et un bouton « Signaler » pour toute réponse inappropriée, en un geste.",
      },
    ],
    trustTitle: "Votre vie privée et votre contrôle d’abord",
    trustIntro: "TikGuest est conçu pour conserver le moins de données possible :",
    trust: [
      "Nous ne conservons ni les propos des participants du live, ni leur transcription, ni leur enregistrement, ni les captures d’écran.",
      "Vos clés d’API sont chiffrées sur votre appareil et dans votre compte, et servent uniquement à faire fonctionner votre invité.",
      "Les captures d’écran ne sont prises qu’en cas de besoin, et le système vous demande l’autorisation de partager l’écran à chaque fois.",
      "Vous supprimez votre compte et toutes vos données définitivement, en un bouton, depuis l’application.",
      "Aucune publicité, aucun traceur ni outil d’analyse dans l’application.",
    ],
    trustNote:
      "En toute transparence : pendant l’utilisation, l’audio et les captures nécessaires sont envoyés en temps réel à Gemini (Google) avec votre propre clé, car c’est Gemini qui comprend et répond. Détails dans la [[privacy]].",
    permTitle: "Pourquoi ces autorisations ?",
    permIntro: "Nous ne demandons que le nécessaire au fonctionnement de l’invité :",
    perms: [
      {
        t: "Microphone",
        d: "Exigé par Android pour capter l’audio interne de l’appareil (le son du live) afin que l’invité l’entende.",
      },
      {
        t: "Enregistrement / partage d’écran",
        d: "Pour capter l’audio interne, et des captures d’écran uniquement en cas de besoin. Le système demande votre accord à chaque lancement de l’invité.",
      },
      {
        t: "Affichage par-dessus les autres applications",
        d: "Pour afficher le panneau de contrôle flottant au-dessus de TikTok pendant le live.",
      },
      {
        t: "Notifications et service au premier plan",
        d: "Ils maintiennent l’invité actif en arrière-plan, avec une notification visible qui vous indique toujours qu’il fonctionne.",
      },
      {
        t: "Ignorer l’optimisation de la batterie",
        d: "Facultatif. Empêche le système d’arrêter l’invité au milieu d’un long live.",
      },
      {
        t: "Services d’accessibilité",
        d: "L’application ne les utilise pas et ne lit pas le contenu des autres applications.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "TikGuest est-elle une application officielle de TikTok ?",
        a: "Non. C’est une application indépendante, sans lien officiel avec TikTok. Vous restez responsable de l’utiliser conformément aux conditions et aux règles de TikTok, et de signaler que l’invité est une IA lorsque c’est nécessaire. Voir les [[regles]].",
      },
      {
        q: "Ai-je besoin d’une clé Gemini ?",
        a: "Oui. Vous ajoutez votre propre clé depuis Google AI Studio : le quota et les éventuels frais sont alors ceux de votre compte Google, selon ses conditions. L’application vous guide pas à pas.",
      },
      {
        q: "Les propos des autres participants sont-ils conservés ?",
        a: "Pas chez nous. Mais ils sont envoyés à Gemini pour être traités pendant l’utilisation, et les conditions de Google s’y appliquent. Voir la [[privacy]].",
      },
      {
        q: "Et si quelqu’un demande : « c’est une IA ? »",
        a: "Si on lui pose une question directe et sérieuse (humain ou IA ?), l’invité répond honnêtement.",
      },
      {
        q: "Sur quels appareils fonctionne-t-elle ?",
        a: "Sur les téléphones Android 10 et plus. Il n’y a pas de version iPhone pour l’instant.",
      },
      {
        q: "Comment supprimer mon compte ?",
        a: "Dans l’application : Réglages → Compte → « Supprimer mon compte et toutes mes données ». Si c’est impossible, suivez les étapes de la page [[delete-account]].",
      },
    ],
    finalTitle: "Essayez votre premier invité aujourd’hui",
    finalSub: "Un personnage, vos connaissances, un live. C’est tout ce qu’il vous faut.",
    legalTitle: "Documents juridiques",
    legalLinks: [
      { key: "regles", d: "Règles d’usage responsable et transparence sur l’IA" },
      { key: "conditions", d: "Conditions d’utilisation de l’application" },
      { key: "privacy", d: "Ce que nous collectons, comment nous le protégeons, avec qui nous le partageons" },
      { key: "delete-account", d: "Comment supprimer votre compte et vos données" },
    ],
  },
  pages: {
    regles: {
      metaTitle: "Règles d’utilisation | TikGuest",
      metaDesc:
        "Règles d’usage responsable de TikGuest : transparence sur l’IA, contenus interdits, respect de la vie privée d’autrui et des conditions de TikTok, signalement.",
      h1: "Règles d’utilisation",
      intro:
        "TikGuest vous donne une voix artificielle qui parle devant un vrai public, et donc une vraie responsabilité. Ces règles encadrent tout usage de l’application et font partie des [[conditions]]. Leur violation peut entraîner la suspension de votre compte.",
      sections: [
        {
          id: "transparency",
          title: "1. Transparence : l’invité est une IA",
          p: ["L’invité TikGuest est une voix générée par intelligence artificielle, pas un humain. Il est interdit de l’utiliser pour tromper les gens sur sa nature."],
          ul: [
            "Si quelqu’un demande à l’invité, de façon directe et sérieuse, s’il est humain ou une IA, il répond honnêtement. Vous ne devez pas désactiver ce comportement ni lui ordonner de le nier.",
            "Vous êtes responsable d’informer votre public que l’invité est une IA chaque fois que la loi ou TikTok l’exige (par exemple l’étiquetage des contenus générés par IA). Nous vous conseillons de le mentionner dans le titre ou la description du live.",
            "N’attribuez pas à l’invité une expertise, un titre ou un diplôme qu’il n’a pas, et ne le présentez pas comme une personne réelle précise.",
          ],
        },
        {
          id: "impersonation",
          title: "2. Usurpation d’identité et de voix",
          ul: [
            "Ne créez pas de personnage qui usurpe une personne réelle (célèbre ou non), un organisme ou une marque dans le but de faire croire que c’est elle.",
            "Dans ElevenLabs, n’utilisez que des voix que vous avez le droit d’utiliser ou dont les titulaires vous ont donné une autorisation explicite. Cloner la voix de quelqu’un sans son accord est interdit.",
            "N’inscrivez pas dans les connaissances ou les règles de propos inventés attribués à des personnes réelles.",
          ],
        },
        {
          id: "content",
          title: "3. Contenus interdits",
          p: ["Il est interdit d’utiliser TikGuest pour produire ou diffuser l’un des contenus suivants, que ce soit dans les connaissances et règles que vous ajoutez ou dans ce que dit l’invité :"],
          ul: [
            "Tout contenu sexuel impliquant des mineurs ou toute exploitation d’enfants. Interdiction absolue ; nous pouvons le signaler aux autorités compétentes.",
            "Contenu sexuel explicite, violence extrême, incitation à la violence, à la haine ou à la discrimination fondée sur l’origine, la religion, le sexe, le handicap, etc.",
            "Harcèlement, intimidation, menaces, traque de personnes.",
            "Fraude, escroquerie, usurpation de qualité, hameçonnage, promotion de produits ou services trompeurs.",
            "Désinformation délibérée, notamment en matière de santé, d’élections, d’argent ou d’urgences.",
            "Encouragement à l’automutilation, au suicide, aux troubles alimentaires ou à la consommation de drogues.",
            "Toute activité illégale ou qui aide à en commettre une.",
          ],
        },
        {
          id: "advice",
          title: "4. Pas de conseil médical, juridique ou financier",
          p: [
            "L’invité TikGuest n’est ni médecin, ni avocat, ni conseiller financier. Ne vous appuyez pas sur lui pour des décisions touchant la santé, les droits ou l’argent de quelqu’un, et n’ajoutez pas à ses connaissances de telles informations pour qu’il les présente comme une référence. Ne le faites pas parler de politique, de religion ou de querelles entre personnes : par défaut, il évite ces sujets.",
          ],
        },
        {
          id: "privacy-others",
          title: "5. Respect de la vie privée des participants",
          p: ["Pendant l’utilisation, l’audio du live, qui contient la voix d’autres participants, est envoyé à Gemini pour traitement (voir la [[privacy]]). Par conséquent :"],
          ul: [
            "Assurez-vous d’en avoir le droit selon la loi de votre pays et les règles de la plateforme, et informez les participants lorsque c’est nécessaire.",
            "N’utilisez pas l’application pour collecter des informations personnelles sur les gens, les suivre, ou révéler leur identité ou leur localisation.",
            "N’activez la « mémoire » que pour conserver ce qu’il est permis de conserver, et ne stockez aucune donnée sensible sur quiconque (santé, religion, opinions politiques, orientation sexuelle, adresse, numéros d’identité).",
          ],
        },
        {
          id: "tiktok",
          title: "6. Respect des conditions de TikTok",
          ul: [
            "Respectez les conditions, les règles de la communauté et les politiques de TikTok sur les lives, les invités et les contenus générés par IA. Elles peuvent changer et la plateforme peut restreindre votre compte : cela échappe à notre contrôle.",
            "N’utilisez pas l’application pour du spam, pour gonfler artificiellement l’engagement ou pour contourner les limites de la plateforme.",
            "L’application ne clique ni n’écrit à votre place dans TikTok, et ne doit pas être utilisée pour automatiser cela.",
          ],
        },
        {
          id: "audience",
          title: "7. Âge et public",
          p: ["L’application est réservée aux personnes de 18 ans et plus. Si des mineurs font partie de votre public, vous êtes responsable de veiller à ce que les propos de l’invité leur restent adaptés."],
        },
        {
          id: "keys",
          title: "8. Vos clés et votre compte",
          ul: [
            "Ne partagez pas vos clés d’API et n’utilisez pas celles d’autrui sans autorisation.",
            "Vous êtes responsable de tout ce qui se passe via votre compte et vos clés.",
            "N’essayez pas de désactiver ou de contourner les garde-fous de l’application, ni de la décompiler pour en abuser.",
          ],
        },
        {
          id: "report",
          title: "9. Signaler une réponse inappropriée",
          p: [
            "Si l’invité dit quelque chose d’inapproprié, offensant ou faux, appuyez sur « 🚩 Signaler » dans le panneau flottant. Le texte de la dernière réponse de l’invité et le motif du signalement nous sont envoyés ; nous les utilisons pour améliorer les garde-fous. Aucun enregistrement vocal n’est envoyé.",
            "Vous pouvez aussi nous écrire à {email} pour tout signalement, remarque ou abus.",
          ],
        },
        {
          id: "enforcement",
          title: "10. En cas de violation",
          p: ["Selon la gravité et la répétition, nous pouvons avertir, restreindre certaines fonctions, suspendre ou supprimer le compte, sans préavis dans les cas graves. Nous pouvons aussi alerter les autorités lorsque la loi l’exige."],
        },
        {
          id: "contact",
          title: "11. Contact",
          p: ["Questions ou signalements au sujet de ces règles : {email}."],
        },
      ],
    },
    conditions: {
      metaTitle: "Conditions d’utilisation | TikGuest",
      metaDesc:
        "Conditions d’utilisation de TikGuest : éligibilité, clés d’API, responsabilités, contenus, exclusion de garanties et résiliation.",
      h1: "Conditions d’utilisation",
      intro:
        "En utilisant l’application TikGuest (paquet {pkg}) et son site, vous acceptez ces conditions. Si vous les refusez, n’utilisez pas l’application. Elles se lisent avec les [[regles]] et la [[privacy]].",
      sections: [
        {
          id: "service",
          title: "1. Le service",
          p: [
            "TikGuest est une application Android qui vous permet de créer des « personnages » vocaux par IA, de leur fournir des connaissances et des règles, et de les faire intervenir comme invités dans des lives. Le service est fourni par {dev} (« nous »).",
            "TikGuest est indépendante : aucun lien officiel avec TikTok, ByteDance, Google ou ElevenLabs. Toutes les marques appartiennent à leurs propriétaires.",
          ],
        },
        {
          id: "eligibility",
          title: "2. Éligibilité et compte",
          ul: [
            "Vous devez avoir au moins 18 ans et la capacité juridique de vous engager.",
            "Vous vous connectez avec un compte Google. Vous êtes responsable de la sécurité de votre compte et de toute activité qui s’y déroule.",
            "Les informations que vous fournissez doivent être exactes et rester à jour.",
          ],
        },
        {
          id: "keys",
          title: "3. Clés d’API et services tiers",
          ul: [
            "L’invité fonctionne avec la clé Gemini que vous ajoutez, et avec une clé ElevenLabs si vous choisissez sa voix. Quotas et frais sont facturés sur vos comptes auprès de ces fournisseurs, dont les conditions et politiques s’appliquent à vous et peuvent changer ou cesser sans que nous le sachions.",
            "Nous ne garantissons ni la continuité, ni la qualité, ni la disponibilité des services tiers, et nous ne prenons en charge aucun frais que vous y engagez.",
            "Nous stockons vos clés chiffrées pour faire fonctionner l’invité en votre nom uniquement. Il vous appartient de les révoquer auprès de leur émetteur si vous soupçonnez une fuite.",
          ],
        },
        {
          id: "use",
          title: "4. Usage autorisé",
          p: ["Vous vous engagez à utiliser l’application conformément à la loi et aux [[regles]], ainsi qu’aux conditions et règles de la communauté de TikTok. Vous êtes seul responsable :"],
          ul: [
            "De tout ce que dit votre invité dans votre live, et des connaissances et règles que vous lui ajoutez.",
            "De signaler que l’invité est une IA lorsque c’est nécessaire, et d’informer les participants du traitement de leur voix lorsque la loi l’exige.",
            "De toute mesure prise par une plateforme contre votre compte (restriction de live, suspension). Nous ne garantissons pas que TikTok autorise cet usage ni qu’elle continuera de l’autoriser.",
          ],
        },
        {
          id: "content",
          title: "5. Contenu que vous ajoutez",
          p: [
            "Vous restez propriétaire des personnages, connaissances et règles que vous ajoutez. Vous nous accordez une licence limitée pour les héberger, les traiter et les transmettre à nos prestataires (comme Gemini), dans la seule mesure nécessaire pour vous fournir le service.",
            "Vous garantissez avoir le droit d’utiliser ce contenu, qu’il ne viole les droits de personne, qu’il respecte la loi et les [[regles]].",
          ],
        },
        {
          id: "ai",
          title: "6. Contenus générés par IA",
          p: ["Les réponses de l’invité peuvent être erronées, incomplètes ou inappropriées malgré les garde-fous de l’application. Nous ne garantissons ni leur exactitude ni leur adéquation à un usage particulier, et elles ne constituent pas un conseil médical, juridique, financier ou professionnel. Vérifiez-les et assumez leur usage. Si une réponse est inappropriée, utilisez le bouton « Signaler »."],
        },
        {
          id: "ip",
          title: "7. Propriété intellectuelle",
          p: ["L’application, son logo, son design et son code sont protégés et restent notre propriété ou celle de nos concédants. Nous vous accordons une licence personnelle, limitée, non exclusive et non transférable pour utiliser l’application selon ces conditions. Il est interdit de la copier, modifier, distribuer ou décompiler, sauf dans la mesure permise par la loi."],
        },
        {
          id: "availability",
          title: "8. Disponibilité et évolutions",
          p: ["Nous faisons de notre mieux pour que l’application fonctionne bien, mais elle est fournie en l’état. Elle peut s’interrompre, évoluer, recevoir de nouvelles restrictions ou être retirée du store à tout moment, notamment en raison de changements de politique de Google Play, de TikTok ou des fournisseurs d’IA."],
        },
        {
          id: "termination",
          title: "9. Résiliation",
          ul: [
            "Vous pouvez cesser d’utiliser l’application et supprimer votre compte à tout moment depuis l’application (voir [[delete-account]]).",
            "Nous pouvons suspendre ou résilier votre compte si vous violez ces conditions ou les [[regles]], pour protéger les utilisateurs ou le service, ou en raison d’une obligation légale.",
          ],
        },
        {
          id: "disclaimer",
          title: "10. Exclusion de garanties",
          p: ["Dans la mesure maximale permise par la loi, l’application est fournie « en l’état » et « selon disponibilité », sans garantie expresse ou implicite, notamment d’exactitude, d’adéquation à un usage particulier, d’absence d’interruption ou d’erreur."],
        },
        {
          id: "liability",
          title: "11. Limitation de responsabilité",
          p: [
            "Dans la mesure maximale permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires, spéciaux ou punitifs, ni de la perte de profits, de réputation, d’audience, de données ou de compte auprès d’un tiers, résultant de l’utilisation ou de l’impossibilité d’utiliser l’application, y compris ce que dit l’invité ou les décisions des plateformes. Notre responsabilité totale n’excède pas le montant que vous nous avez payé pour l’application au cours des douze mois précédant le fait générateur (soit zéro si elle est gratuite).",
            "Cela n’affecte aucun droit auquel la loi ne permet pas de renoncer, ni notre responsabilité en cas de fraude, de faute lourde ou de dommage corporel lorsque la loi interdit de l’exclure.",
          ],
        },
        {
          id: "indemnity",
          title: "12. Indemnisation",
          p: ["Vous acceptez de nous indemniser et de nous garantir contre toute réclamation ou perte résultant de votre violation de ces conditions, des [[regles]], de la loi, des droits d’autrui ou des conditions des plateformes, dans la mesure permise par la loi applicable."],
        },
        {
          id: "changes",
          title: "13. Modification des conditions",
          p: ["Nous pouvons modifier ces conditions et mettre à jour la date en haut de page. Pour les changements importants, nous nous efforcerons de vous en informer dans l’application ou sur ce site. Continuer à utiliser l’application après modification vaut acceptation."],
        },
        {
          id: "law",
          title: "14. Droit applicable",
          p: ["Ces conditions sont régies par le droit du pays de résidence de {dev}, sans préjudice des droits impératifs dont vous bénéficiez en tant que consommateur dans votre pays. Nous préférons d’abord régler tout différend à l’amiable : écrivez-nous à {email}."],
        },
        {
          id: "contact",
          title: "15. Contact",
          p: ["{dev} · {email}"],
        },
      ],
    },
    privacy: {
      metaTitle: "Politique de confidentialité | TikGuest",
      metaDesc:
        "Politique de confidentialité de TikGuest : données collectées, autorisations et leur raison, partage, durée de conservation, vos droits et suppression du compte.",
      h1: "Politique de confidentialité",
      intro:
        "Nous expliquons ici, en toute franchise, ce que TikGuest fait de vos données et de celles d’autrui qui transitent par l’application. Nous conservons le strict nécessaire et ne vendons pas vos données. Cette politique s’applique à l’application TikGuest (paquet {pkg}) et à ce site.",
      sections: [
        {
          id: "who",
          title: "1. Qui sommes-nous",
          p: [
            "Responsable du traitement : {dev}. Contact pour toute question de confidentialité : {email}.",
            "TikGuest est indépendante de TikTok, ByteDance, Google et ElevenLabs.",
          ],
        },
        {
          id: "collect",
          title: "2. Données collectées et conservées",
          ul: [
            "**Compte :** votre e-mail et votre identifiant issus de la connexion Google (via Supabase Auth).",
            "**Ce que vous créez :** les personnages (nom, dialecte, description, réglages vocaux), les règles et les connaissances que vous ajoutez. Elles sont liées à votre compte et invisibles pour les autres utilisateurs.",
            "**Clés d’API (Gemini et ElevenLabs) :** stockées chiffrées sur votre appareil (clé protégée par l’Android Keystore) et chiffrées côté serveur dans votre compte, pour vous suivre d’un appareil à l’autre. Nous ne les utilisons que pour faire fonctionner l’invité en votre nom.",
            "**Mémoire des personnes (facultative, désactivée par défaut) :** si vous l’activez, nous conservons les prénoms de personnes apparaissant dans votre live et de brèves notes les concernant, ainsi que les questions auxquelles l’invité n’a pas su répondre. Ce sont des données de tiers : ne conservez que ce qui est permis.",
            "**Signalements :** si vous appuyez sur « Signaler », nous conservons le texte de la réponse de l’invité (jusqu’à 1 500 caractères) et le motif, jamais la voix de quiconque.",
            "**Données techniques :** comme tout service en ligne, nos prestataires d’hébergement et d’authentification peuvent journaliser des données techniques standard (adresse IP, type d’appareil) à des fins d’exploitation et de sécurité.",
          ],
        },
        {
          id: "not",
          title: "3. Ce que nous ne conservons pas",
          ul: [
            "Nous ne conservons pas ce que disent les participants du live, ni sa transcription, ni aucun enregistrement.",
            "Nous ne conservons pas les captures d’écran.",
            "La mémoire de la conversation reste dans la mémoire de l’appareil pendant la session uniquement, puis disparaît.",
            "Nous n’utilisons pas vos données pour la publicité, nous ne les vendons pas, et l’application ne contient ni traceur ni outil d’analyse.",
          ],
        },
        {
          id: "permissions",
          title: "4. Autorisations de l’appareil et pourquoi",
          ul: [
            "**Microphone (RECORD_AUDIO) :** exigé par Android pour capter l’audio interne de l’appareil (ce que lisent les autres applications, dont le son du live). L’application exclut son propre son de la capture.",
            "**Partage d’écran (MediaProjection) :** pour capter l’audio interne et, uniquement en cas de besoin, prendre une capture d’écran, par exemple pour vérifier votre statut dans le live ou quand l’invité demande à voir l’écran. Le système demande votre accord à chaque session.",
            "**Affichage par-dessus les applications (SYSTEM_ALERT_WINDOW) :** pour afficher le panneau de contrôle flottant.",
            "**Service au premier plan et notifications (FOREGROUND_SERVICE, POST_NOTIFICATIONS) :** pour maintenir l’invité actif en arrière-plan avec une notification visible.",
            "**WAKE_LOCK et ignorer l’optimisation de la batterie :** pour éviter que le système n’arrête l’invité pendant un long live. Ce dernier point est facultatif.",
            "**Internet :** pour joindre les services listés ci-dessous.",
            "**L’application n’utilise pas les services d’accessibilité** et ne lit pas le texte des autres applications.",
          ],
        },
        {
          id: "sharing",
          title: "5. Avec qui nous partageons",
          ul: [
            "**Google (API Gemini) :** pendant l’utilisation, sont envoyés en temps réel à Gemini, avec votre propre clé, l’audio interne de l’appareil (qui peut contenir la voix des participants du live) et, uniquement en cas de besoin, des captures d’écran. Google les traite selon ses conditions et politiques. Dans les services gratuits, Google peut utiliser le contenu pour améliorer ses produits et des humains peuvent le relire ; utilisez une clé payante pour une meilleure confidentialité. Dans l’Espace économique européen, en Suisse et au Royaume-Uni, Google impose l’usage de services payants.",
            "**Google (connexion) :** pour vous authentifier avec votre compte Google.",
            "**ElevenLabs :** si vous choisissez sa voix, seul le texte de la réponse de l’invité lui est envoyé pour être converti en voix.",
            "**Supabase :** fournisseur de base de données et d’authentification, qui héberge les données de votre compte.",
            "Nous pouvons divulguer des données si la loi l’exige ou pour protéger des droits et la sécurité.",
          ],
          after: ["Ces tiers sont indépendants et traitent les données selon leurs propres politiques. Le traitement peut avoir lieu dans des pays autres que le vôtre."],
        },
        {
          id: "others",
          title: "6. Votre responsabilité envers les participants de votre live",
          p: ["Puisque la voix des autres participants est envoyée à Gemini pendant l’utilisation, il vous appartient de disposer de la base légale nécessaire, de les informer lorsque la loi l’exige et de signaler que l’invité est une IA. Voir les [[regles]]."],
        },
        {
          id: "retention",
          title: "7. Durée de conservation et suppression",
          p: ["Nous conservons les données de votre compte tant que celui-ci existe. Vous pouvez supprimer définitivement votre compte, toutes vos données et vos clés depuis l’application : Réglages → Compte → « Supprimer mon compte et toutes mes données ». Si c’est impossible, écrivez-nous à {email}. Détails sur la page [[delete-account]]."],
        },
        {
          id: "security",
          title: "8. Sécurité",
          ul: [
            "Communications chiffrées (HTTPS/WSS).",
            "Clés d’API chiffrées sur l’appareil et sur le serveur.",
            "Politiques de sécurité au niveau des lignes dans la base de données, qui limitent l’accès de chaque utilisateur à ses propres données.",
          ],
          after: ["Aucun système n’est totalement sûr ; nous ne pouvons donc pas garantir une sécurité absolue."],
        },
        {
          id: "rights",
          title: "9. Vos droits",
          p: ["Selon votre pays (par exemple le RGPD en Europe), vous pouvez avoir le droit d’accéder à vos données, de les rectifier, de les supprimer, de les transférer, de vous opposer à leur traitement ou de le limiter, de retirer votre consentement à tout moment et d’introduire une réclamation auprès de l’autorité de protection des données de votre pays. Pour exercer un droit, écrivez à {email} ; nous répondrons dans un délai raisonnable."],
        },
        {
          id: "children",
          title: "10. Enfants",
          p: ["L’application ne s’adresse pas aux moins de 18 ans et nous ne collectons pas sciemment leurs données. Si nous apprenons qu’un compte appartient à un mineur, nous le supprimons."],
        },
        {
          id: "changes",
          title: "11. Modification de cette politique",
          p: ["Nous pouvons mettre à jour cette politique et la date en haut de page ; pour les changements importants, nous vous informerons dans l’application ou sur ce site."],
        },
        {
          id: "contact",
          title: "12. Contact",
          p: ["{dev} · {email}"],
        },
      ],
    },
    "delete-account": {
      metaTitle: "Supprimer le compte et les données | TikGuest",
      metaDesc:
        "Comment supprimer votre compte TikGuest et toutes vos données : depuis l’application en quelques étapes, ou sur demande par e-mail.",
      h1: "Supprimer votre compte et vos données",
      intro:
        "Vous avez le droit de supprimer votre compte et vos données à tout moment. Cette page concerne l’application TikGuest (paquet {pkg}) développée par {dev}.",
      sections: [
        {
          id: "in-app",
          title: "Méthode 1 : depuis l’application (la plus rapide)",
          ul: [
            "Ouvrez TikGuest et connectez-vous.",
            "Allez dans **Réglages → Compte**.",
            "Appuyez sur **« Supprimer mon compte et toutes mes données »** puis confirmez.",
          ],
          after: ["La suppression est immédiate et vous êtes déconnecté."],
        },
        {
          id: "by-email",
          title: "Méthode 2 : par e-mail",
          p: ["Si l’application n’est plus installée ou si vous ne pouvez pas vous connecter, envoyez un e-mail à {email} depuis l’adresse du compte Google utilisé pour vous inscrire, avec pour objet « Delete my TikGuest account ». Nous vérifions votre identité puis supprimons votre compte et vos données sous 30 jours maximum, et nous vous le confirmons."],
        },
        {
          id: "what",
          title: "Ce qui est supprimé",
          ul: [
            "Votre compte (e-mail et identifiant).",
            "Tous vos personnages et ce qui s’y rattache : règles, connaissances, réglages vocaux.",
            "Les notes sur des personnes et les questions sans réponse, si vous aviez activé la mémoire.",
            "Les clés d’API enregistrées (Gemini, ElevenLabs) dans notre système, et sur votre appareil lorsque la suppression se fait depuis l’application.",
          ],
          after: ["Des copies peuvent subsister temporairement dans les sauvegardes de notre fournisseur de base de données avant d’être effacées définitivement par le cycle normal."],
        },
        {
          id: "third",
          title: "Ce que notre suppression ne couvre pas",
          p: ["Ce qui se trouve chez d’autres entités relève de leurs politiques et de votre compte chez elles : le compte Google et la clé Gemini (Google AI Studio), le compte ElevenLabs. Supprimez ou révoquez aussi vos clés là-bas si vous le souhaitez. L’application TikTok et votre compte TikTok sont hors de notre périmètre."],
        },
        {
          id: "questions",
          title: "Une question ?",
          p: ["Écrivez-nous à {email}. Pour en savoir plus, voir la [[privacy]]."],
        },
      ],
    },
  },
};

export default fr;
