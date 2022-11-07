"use strict";

$(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });

  $(document).ready(function() {
	loadMeters();
});

function loadMeters(){
    let workoutStr = ``;
	for(let workout in workoutChallenges) {
		workoutStr += `
            <section class="workout-container"> 
                <header>${workoutChallenges[workout].title}</header>
                <p>${workoutChallenges[workout].milestoneMessage()}</p>
                <div class="meter ${workoutChallenges[workout].styles}">
                    <span style="width: ${workoutChallenges[workout].progress()}"></span>
                </div>
                <p>Total: ${workoutChallenges[workout].current()}/${workoutChallenges[workout].totalNeeded}</p>
            </section>
        `
	}

	$('#workout-list-container').html(`       
		${workoutStr}
    `);

}

function generateMilestoneMessage(workoutObject){
    if (workoutObject.current() < workoutObject.totalNeeded){
      for(let milestone in workoutObject.milestones){
          if(workoutObject.current() < workoutObject.milestones[milestone].milestoneValue){
            return `${workoutObject.calculation} until ${workoutObject.milestones[milestone].milestoneName}: ${(workoutObject.milestones[milestone].milestoneValue - workoutObject.current()).toFixed(2).replace(/[.,]00$/, "")}`
          }
      }
  } else {
      return 'Complete!'
  }
}

function calculateCompleted(workoutObject){
  let totalComplete = 0;
  for(let loggedItem in workoutLog){
    if(workoutLog[loggedItem].workoutType == workoutObject.type ){
      totalComplete += workoutLog[loggedItem].workoutQuantity;
    }
  }
  return totalComplete;
}

 