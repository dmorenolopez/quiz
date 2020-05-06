function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question3.value;
    var question5 = document.quiz.question3.value;
    var correct = 0;
    
  /* Pregunta 1 */
    if (question1 == "Decides solo como se debe actuar e impartes las instrucciones sin consultar a nadie más") {
        correct++;} 
    
    if (question1 == "Te ciñes de acuerdo a los procesos y planes estandarizados") {
         correct+2;} 

    if (question1 == "Te estresas y sueles tomar decisiones precipitadas") {
        correct+3;} 

    if (question1 == "Reúnes al equipo y consultas con ellos y toman decisiones en conjunto") {
        correct+4;} 

      /* Pregunta 2 */
    if (question2 == "Llamas a todo el personal y les haces un llamado de atención severo, los amenazas con despedirlos") {
        correct++;} 
    
    if (question2 == "Acatas lo que está establecido en el código laboral y aplicas las sanciones correspondientes") {
         correct+2;} 

    if (question2 == "Pegas un grito estremecedor y generas un caos hasta encontrar de quién es la culpa") {
        correct+3;} 

    if (question2 == "Haces una reunión con el equipo, preguntas que sucedió. Aunque entiendes al cliente, también es importante saber que pasó") {
        correct+4;} 
    
    /* Pregunta 3 */
    if (question3 == "Fría y calculadamente pones cámaras escondidas para grabarlo y poder incriminarlo con pruebas") {
        correct++;} 
    
    if (question3 == "Buscas al abogado de la empresa y consultas cuáles son los pasos a seguir") {
         correct+2;} 

    if (question3 == "Buscas a la persona en cuestión y de frente la retas y le preguntas si efectivamente está robando") {
        correct+3;} 

    if (question3 == "Hablas con la persona calmadamente y si tienes que despedirla lo haces. Pero primero te aseguras bien") {
        correct+4;} 

    /* Pregunta 4 */
    if (question4 == "Te juntas solo con las personas que consideras que están a tu nivel") {
        correct++;} 
    
    if (question4 == "No socializas mucho, te quedas callado y observas el comportamiento de la gente") {
         correct+2;} 

    if (question4 == "Te tomas tus buenos tragos, la pasas bien. Eres el alma de la fiesta. La gente disfruta contigo, y tu buen ambiente.") {
        correct+3;} 

    if (question4 == "Tomas, pero con moderación y tratas de involucrar a todas las personas. Te preocupa que la gente esté bien") {
        correct+4;} 

         /* Pregunta 5 */
    if (question5 == "Se decide y se hace solo lo que tu digas. Tu tienes la última palabra") {
        correct++;} 
    
    if (question5 == "Eres inspirador, la gente te sigue. Pero te ciñes al plan") {
         correct+2;} 

    if (question5 == "Hablas de muchas cosas a la vez, si suena tu celular contestas, cambias de tema constantemente, pero al final tomas decisiones que todos aceptan") {
        correct+3;} 

    if (question5 == "Animas a la gente a participar, toman decisiones en conjunto. Todo el mundo sale inspirado y feliz.") {
        correct+4;} 

        var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
        var messages = ["Great job!", "That's just okay", "You really need to do better"];
        var score;
    
        if (correct == 0) {
            score = 2;
        }
    
        if (correct > 0 && correct < 3) {
            score = 1;
        }
    
        if (correct == 3) {
            score = 0;
        }
    
        document.getElementById("after_submit").style.visibility = "visible";
    
        document.getElementById("message").innerHTML = messages[score];
        document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
        document.getElementById("picture").src = pictures[score];
    }