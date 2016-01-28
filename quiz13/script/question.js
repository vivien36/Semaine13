angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
					
	
		$scope.questions = [
	
			{id:"01",
			 categorie:"sport",
			 question:"Quel pays à gagné la coupe du monde de football en 1998 ?",
			 reponseA:"France",
			 reponseB:"Allemagne",
			 reponseC:"Brésil",
			 reponseD:"Italie",
			 correct:"reponseA",
			 bonneReponse:"France",
			 points:5,
			 pointscat1:5,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://media.rtl.fr/online/image/2014/0603/7772403173_le-trophee-de-la-coupe-du-monde.jpg"
			},
			{id:"02",
			 categorie:"cinema",
			 question:"Qui est la fille ainée des Simpsons ?",
			 reponseA:"Maggie",
			 reponseB:"Lisa",
			 reponseC:"Marge",
			 reponseD:"Bart",
			 correct:"reponseB",
			 bonneReponse:"Lisa",
			 points:5,
			 pointscat1:0,
			 pointscat2:5,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/simpsons.jpg"
			},
			{id:"03",
			 categorie:"musique",
			 question:"Dans quel clip voit on Florent Pagny s'exprimer en language des signes ?",
			 reponseA:"Et un jour, une femme",
			 reponseB:"Chanter",
			 reponseC:"Ma liberté de penser",
			 reponseD:"Savoir aimer",
			 correct:"reponseD",
			 bonneReponse:"Savoir aimer",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:5,
			 pointscat4:0,
			image:"img/florent.jpg"
			},
			{id:"04",
			 categorie:"culture generale",
			 question:"Lequel de ces pays ne fait pas parti de l'Union Européenne ?",
			 reponseA:"Italie",
			 reponseB:"Roumanie",
			 reponseC:"Norvège",
			 reponseD:"Hongrie",
			 correct:"reponseC",
			 bonneReponse:"Norvège",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:5,
			 image:"img/UE.jpg"
			},
			{id:"05",
			 categorie:"sport",
			 question:"Tour de France: Qui detient le record de victoires d'étapes ?",
			 reponseA:"Bernard Hinault",
			 reponseB:"Eddy Merckx",
			 reponseC:"Mark Cavendish",
			 reponseD:"Gino Bartali",
			 correct:"reponseB",
			 bonneReponse:"Eddy Merckx",
			 points:5,
			 pointscat1:5,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/tourdefrance.jpg"
			},
			{id:"06",
			categorie:"cinema",
			 question:"Qui se cache derrière Dark Vador ?",
			 reponseA:"Luke Skywalker",
			 reponseB:"Palpatine",
			 reponseC:"Obi-Wan",
			 reponseD:"Anakin Skywalker",
			 correct:"reponseD",
			 bonneReponse:"Anakin Skywalker",
			 points:5,
			 pointscat1:0,
			 pointscat2:5,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/starwars.jpg"
			},
			{id:"07",
			 categorie:"musique",
			 question:"Qui à interpreté la chanson thème du film Titanic ?",
			 reponseA:"Lara Fabian",
			 reponseB:"Natacha Saint-Pier",
			 reponseC:"Céline Dion",
			 reponseD:"Isabelle Boulay",
			 correct:"reponseC",
			 bonneReponse:"Céline Dion",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:5,
			 pointscat4:0,
			 image:"img/titanic.jpg"
			},
			{id:"08",
			 categorie:"culture generale",
			 question:"En quelle année a eu lieu la bataille de Marignan ?",
			 reponseA:"1914",
			 reponseB:"1515",
			 reponseC:"1945",
			 reponseD:"1442",
			 correct:"reponseB",
			 bonneReponse:"1515",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:5,
			 image:"img/marignan.jpg"
			},
			{id:"09",
			 categorie:"sport",
			 question:"Sur quelle île est né Teddy Riner ?",
			 reponseA:"Martinique",
			 reponseB:"Réunion",
			 reponseC:"Oléron",
			 reponseD:"Guadeloupe",
			 correct:"reponseD",
			 bonneReponse:"Guadeloupe",
			 points:5,
			 pointscat1:5,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			image:"img/teddy.jpg"
			},
			{id:"10",
			 categorie:"cinema",
			 question:"Qui interprete \"Le Glaude\" dans la soupe aux choux ?",
			 reponseA:"Jean Carmet",
			 reponseB:"Jacques Villeret",
			 reponseC:"Louis de Funès",
			 reponseD:"Henri Génès",
			 correct:"reponseC",
			 bonneReponse:"Louis de Funès",
			 points:5,
			 pointscat1:0,
			 pointscat2:5,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/soupe.png"
			},
			{id:"11",
			 categorie:"musique",
			 question:"Qui chante \"Je garde le sourire\" ?",
			 reponseA:"Maître Gims",
			 reponseB:"Black M",
			 reponseC:"Soprano",
			 reponseD:"Kendji Girac",
			 correct:"reponseB",
			 bonneReponse:"Black M",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:5,
			 pointscat4:0,
			 image:"img/rap.jpg"
			},
			{id:"12",
			categorie:"culture generale",
			 question:"Qui est le dieu du Soleil dans l'ancienne Egypte ?",
			 reponseA:"Anubis",
			 reponseB:"Amenothes",
			 reponseC:"Aken",
			 reponseD:"Râ",
			 correct:"reponseD",
			 bonneReponse:"Râ",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:5,
			 image:"img/ra.gif"
			},
			{id:"13",
			 categorie:"sport",
			 question:"Quel pays est spécialiste du lancer de tronc d'arbre ?",
			 reponseA:"La Russie",
			 reponseB:"La Suisse",
			 reponseC:"L'Ecosse",
			 reponseD:"L'Italie",
			 correct:"reponseC",
			 bonneReponse:"L'Ecosse",
			 points:5,
			 pointscat1:5,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/troncs.jpg"
			},
			{id:"14",
			 categorie:"cinema",
			 question:"Quel est le nom du premier long métrage Disney sorti au cinéma?",
			 reponseA:"Cendrillon",
			 reponseB:"Bambi",
			 reponseC:"Blanche Neige",
			 reponseD:"la Belle au bois dormant",
			 correct:"reponseC",
			 bonneReponse:"Blanche Neige",
			 points:5,
			 pointscat1:0,
			 pointscat2:5,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/disney.jpeg"
			},
			{id:"15",
			 categorie:"musique",
			 question:"Que chante Robbie Williams et Nicole Kidman en 2001?",
			 reponseA:"Angels",
			 reponseB:"Somethin' stupid",
			 reponseC:"You Only Live Twice",
			 reponseD:"Kids",
			 correct:"reponseB",
			 bonneReponse:"Somethin' stupid",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:5,
			 pointscat4:0,
			 image:"img/musique.jpg"
			},
			{id:"16",
			categorie:"culture generale",
			 question:"Quel est le pays natal de Wolfgang Amadeus Mozart ?",
			 reponseA:"Suède",
			 reponseB:"Pologne",
			 reponseC:"L'Allemagne",
			 reponseD:"L'Autriche",
			 correct:"reponseD",
			 bonneReponse:"L'Autriche",
			 points:5,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:5,
			 image:"img/mozart.jpg"
			}


		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

		
	function cat (){
		if ($scope.numquestion < 16){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="sport";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 16)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==80)
				{
					$scope.texte = "Incroyable,vous avez répondu correctement à toutes les questions !";
					$scope.image = "http://www.pickupalliance.com/wp-content/uploads/2014/09/intelligence-abstraite-intuitive.jpg";
				}
				else if ($scope.categorie1 == 20)
				{
					$scope.texte = "Vous êtes incollable en sport,Félicitation !";
					$scope.image = "http://www.cormontreuil.fr/wp-content/uploads/2010/06/sport-site.jpg";
				}
				else if ($scope.categorie2 == 20)
				{
					$scope.texte = "Vous êtes incollable en cinéma,Félicitation !";
					$scope.image = "http://www.le-top-capendu.fr/cinema-plein-air-a-capendu/image";
				}
				else if ($scope.categorie3 == 20)
				{
					$scope.texte = "Vous êtes incollable en musique,Félicitation !";
					$scope.image = "http://www.bien-etre-au-naturel.fr/wp-content/uploads/2015/05/intro-musique.jpg";
				}
				else if ($scope.categorie4 == 20)
				{
					$scope.texte = "Vous êtes incollable en culture générale,Félicitation !";
					$scope.image = "http://www.quizz.fr/files/2010/03/litt%C3%A9rature-2.jpg";
				}
				else if ($scope.categorie1 == 15)
				{
					$scope.texte = "Presque tout bon en sport,Félicitation !";
					$scope.image = "http://www.cormontreuil.fr/wp-content/uploads/2010/06/sport-site.jpg";
				}
				else if ($scope.categorie2 == 15)
				{
					$scope.texte = "Presque tout bon en cinema,Félicitation !";
					$scope.image = "http://www.le-top-capendu.fr/cinema-plein-air-a-capendu/image";
				}
				else if ($scope.categorie3 == 15)
				{
					$scope.texte = "Presque tout bon en musique,Félicitation !";
					$scope.image = "http://www.bien-etre-au-naturel.fr/wp-content/uploads/2015/05/intro-musique.jpg";
				}
				else if ($scope.categorie4 == 15)
				{
					$scope.texte = "Presque tout bon en culture générale,Félicitation !";
					$scope.image = "http://www.quizz.fr/files/2010/03/litt%C3%A9rature-2.jpg";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
	}]);
	
	